"use client";
import { useEffect, useRef } from "react";

/* ─── Deterministic Perlin 3-D noise (seed 2026) ─────────────────────────── */
function makeNoise(seed = 2026) {
  const p = new Uint8Array(512);
  const base = Array.from({ length: 256 }, (_: unknown, i: number) => i);
  let s = seed;
  const rand = () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646;
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [base[i], base[j]] = [base[j], base[i]];
  }
  for (let i = 0; i < 512; i++) p[i] = base[i & 255];

  const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
  const lerp = (a: number, b: number, t: number) => a + t * (b - a);
  const grad = (h: number, x: number, y: number, z: number) => {
    const hh = h & 15;
    const u = hh < 8 ? x : y;
    const v = hh < 4 ? y : hh === 12 || hh === 14 ? x : z;
    return ((hh & 1) === 0 ? u : -u) + ((hh & 2) === 0 ? v : -v);
  };

  return (x: number, y: number, z: number) => {
    const X = Math.floor(x) & 255, Y = Math.floor(y) & 255, Z = Math.floor(z) & 255;
    const xf = x - Math.floor(x), yf = y - Math.floor(y), zf = z - Math.floor(z);
    const u = fade(xf), v = fade(yf), w = fade(zf);
    const A = p[X] + Y, AA = p[A] + Z, AB = p[A + 1] + Z;
    const B = p[X + 1] + Y, BA = p[B] + Z, BB = p[B + 1] + Z;
    return lerp(
      lerp(
        lerp(grad(p[AA], xf, yf, zf),         grad(p[BA], xf - 1, yf, zf),     u),
        lerp(grad(p[AB], xf, yf - 1, zf),     grad(p[BB], xf - 1, yf - 1, zf), u), v),
      lerp(
        lerp(grad(p[AA + 1], xf, yf, zf - 1), grad(p[BA + 1], xf - 1, yf, zf - 1), u),
        lerp(grad(p[AB + 1], xf, yf - 1, zf - 1), grad(p[BB + 1], xf - 1, yf - 1, zf - 1), u), v),
      w
    );
  };
}

/* ─── Config ─────────────────────────────────────────────────────────────── */
const CELL    = 8;      // grid cell size in px
const LEVELS  = 18;     // number of iso-contour levels
const SPEED   = 0.012;  // time increment per second (slow ambient drift)

/* Terrain deformation (crater effect) */
const DEFORM_RADIUS   = 90;   // px — Gaussian crater radius
const DEFORM_STRENGTH = 0.55; // depth of depression

/* ─── White-only line palette (no red) ───────────────────────────────────── */
//  Every 4th level  → major white line (bright)
//  Even levels      → sub-major white line
//  Odd levels       → minor white line (very subtle)
const lineStyle = (l: number): { width: number; color: string } => {
  if (l % 4 === 0)  return { width: 2.0, color: "rgba(255,255,255,0.65)" }; // major
  if (l % 2 === 0)  return { width: 1.0, color: "rgba(255,255,255,0.22)" }; // sub-major
  return              { width: 1.0, color: "rgba(255,255,255,0.13)" };       // minor
};

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function TopoCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tRef      = useRef(0);
  const lastRef   = useRef(0);
  /* x/y: smoothed position | tx/ty: raw mouse target | strength: 0→1 */
  const mouseRef  = useRef({ x: 0, y: 0, tx: 0, ty: 0, strength: 0, tStrength: 0 });
  const noiseRef  = useRef<ReturnType<typeof makeNoise> | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (!noiseRef.current) noiseRef.current = makeNoise(2026);
    const noise = noiseRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ── Resize helper ── */
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w   = canvas.clientWidth;
      const h   = canvas.clientHeight;
      if (!w || !h) return;
      const tw = Math.round(w * dpr);
      const th = Math.round(h * dpr);
      if (canvas.width !== tw || canvas.height !== th) {
        canvas.width  = tw;
        canvas.height = th;
      }
    };

    /* ── Draw one frame ── */
    const draw = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w   = canvas.clientWidth;
      const h   = canvas.clientHeight;
      if (!w || !h) return;
      resize();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const cols = Math.ceil(w / CELL) + 1;
      const rows = Math.ceil(h / CELL) + 1;
      const t    = tRef.current;

      /* Mouse terrain deformation — position relative to canvas top-left */
      const rect    = canvas.getBoundingClientRect();
      const mx      = mouseRef.current.x - rect.left;
      const my      = mouseRef.current.y - rect.top;
      const mStr    = mouseRef.current.strength;
      const r2      = DEFORM_RADIUS * DEFORM_RADIUS;
      const hasDeform = mStr > 0.005;

      /* Build scalar field */
      const field = new Float32Array(cols * rows);
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const x = (i * CELL) / 240;
          const y = (j * CELL) / 240;
          let val =
            noise(x, y, t) +
            0.42 * noise(x * 2.1 + 7.3, y * 2.1 + 1.7, t * 1.4);

          /* Gaussian crater around cursor */
          if (hasDeform) {
            const dx = i * CELL - mx;
            const dy = j * CELL - my;
            const d2 = dx * dx + dy * dy;
            if (d2 < r2 * 9) {
              val -= DEFORM_STRENGTH * mStr * Math.exp(-d2 / (2 * r2));
            }
          }

          field[j * cols + i] = val;
        }
      }

      /* Marching squares for each iso-level */
      for (let l = 0; l < LEVELS; l++) {
        const iso = -0.75 + (1.5 * l) / (LEVELS - 1);
        const { width, color } = lineStyle(l);

        ctx.beginPath();
        ctx.lineWidth   = width;
        ctx.strokeStyle = color;

        for (let j = 0; j < rows - 1; j++) {
          for (let i = 0; i < cols - 1; i++) {
            const a = field[ j      * cols + i    ];
            const b = field[ j      * cols + i + 1];
            const c = field[(j + 1) * cols + i + 1];
            const d = field[(j + 1) * cols + i    ];

            const idx =
              (a > iso ? 8 : 0) |
              (b > iso ? 4 : 0) |
              (c > iso ? 2 : 0) |
              (d > iso ? 1 : 0);

            if (idx === 0 || idx === 15) continue;

            const x0 = i * CELL, y0 = j * CELL;

            /* Interpolated edge midpoints */
            const top    = (): [number, number] => [x0 + CELL * ((iso - a) / (b - a)), y0];
            const right  = (): [number, number] => [x0 + CELL, y0 + CELL * ((iso - b) / (c - b))];
            const bottom = (): [number, number] => [x0 + CELL * ((iso - d) / (c - d)), y0 + CELL];
            const left   = (): [number, number] => [x0, y0 + CELL * ((iso - a) / (d - a))];

            const seg = (p: [number, number], q: [number, number]) => {
              ctx.moveTo(p[0], p[1]);
              ctx.lineTo(q[0], q[1]);
            };

            switch (idx) {
              case  1: case 14: seg(left(),   bottom()); break;
              case  2: case 13: seg(bottom(), right());  break;
              case  3: case 12: seg(left(),   right());  break;
              case  4: case 11: seg(top(),    right());  break;
              case  5:          seg(left(),   top());    seg(bottom(), right()); break;
              case  6: case  9: seg(top(),    bottom()); break;
              case  7: case  8: seg(left(),   top());    break;
              case 10:          seg(left(),   bottom()); seg(top(), right());    break;
            }
          }
        }
        ctx.stroke();
      }
    };

    /* ── RAF loop ── */
    let raf = 0;
    const loop = (now: number) => {
      if (!reduce) {
        tRef.current += ((now - lastRef.current) / 1000) * SPEED;
        /* Smooth mouse position lerp (10% per frame) */
        const m = mouseRef.current;
        m.x += (m.tx - m.x) * 0.1;
        m.y += (m.ty - m.y) * 0.1;
        /* Smooth strength fade-in/out (4% per frame — slow fade-out) */
        m.strength += (m.tStrength - m.strength) * 0.04;
      }
      lastRef.current = now;
      draw();
      raf = requestAnimationFrame(loop);
    };

    lastRef.current = performance.now();
    raf = requestAnimationFrame(loop);

    /* ── Listeners ── */
    const onResize = () => { resize(); draw(); };
    const onMouse  = (e: MouseEvent) => {
      mouseRef.current.tx       = e.clientX;
      mouseRef.current.ty       = e.clientY;
      mouseRef.current.tStrength = 1;
    };
    const onLeave  = () => {
      mouseRef.current.tStrength = 0;
    };

    window.addEventListener("resize",        onResize);
    window.addEventListener("mousemove",     onMouse);
    document.addEventListener("mouseleave",  onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize",        onResize);
      window.removeEventListener("mousemove",     onMouse);
      document.removeEventListener("mouseleave",  onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.88 }}
    />
  );
}
