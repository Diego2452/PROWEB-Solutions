"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  baseOpacity: number;
}

export default function ParticleWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;

    let particles: Particle[] = [];
    let width = 0;
    let height = 0;

    /* ── Grid config ── */
    const COLS = 28;
    const ROWS = 16;
    const MOUSE_RADIUS = 130;
    const MOUSE_FORCE = 0.55;
    const RETURN_SPEED = 0.04;
    const DAMPING = 0.82;

    function buildParticles() {
      particles = [];
      const spacingX = width / (COLS - 1);
      const spacingY = height / (ROWS - 1);

      /* tilt the grid diagonally by offsetting Y based on X position */
      const tiltAmount = height * 0.22;

      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          const baseX = col * spacingX;
          const baseY = row * spacingY + (col / (COLS - 1)) * tiltAmount - tiltAmount * 0.5;

          const baseOpacity = 0.12 + Math.random() * 0.25;

          particles.push({
            x: baseX,
            y: baseY,
            originX: baseX,
            originY: baseY,
            vx: 0,
            vy: 0,
            size: Math.random() * 1.4 + 0.5,
            opacity: baseOpacity,
            baseOpacity,
          });
        }
      }
    }

    function resize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      buildParticles();
    }

    function drawConnections() {
      ctx.lineWidth = 0.3;
      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          const i = row * COLS + col;
          const p = particles[i];

          /* connect right */
          if (col < COLS - 1) {
            const right = particles[i + 1];
            const alpha = Math.min(p.opacity, right.opacity) * 0.55;
            ctx.strokeStyle = `rgba(230, 210, 210, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(right.x, right.y);
            ctx.stroke();
          }

          /* connect down */
          if (row < ROWS - 1) {
            const down = particles[i + COLS];
            const alpha = Math.min(p.opacity, down.opacity) * 0.55;
            ctx.strokeStyle = `rgba(230, 210, 210, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(down.x, down.y);
            ctx.stroke();
          }
        }
      }
    }

    function tick(time: number) {
      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const t = time * 0.0008;

      particles.forEach((p, idx) => {
        const col = idx % COLS;
        const row = Math.floor(idx / COLS);

        /* wave offset — diagonal sine wave */
        const wavePhase = col * 0.35 + row * 0.18 - t * 2.2;
        const waveY = Math.sin(wavePhase) * 9;
        const waveX = Math.cos(wavePhase * 0.6) * 3;

        const targetX = p.originX + waveX;
        const targetY = p.originY + waveY;

        /* mouse repulsion */
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * MOUSE_FORCE;
          const angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle) * force * 8;
          p.vy += Math.sin(angle) * force * 8;
          p.opacity = Math.min(p.baseOpacity * 2.5, 0.9);
        } else {
          p.opacity += (p.baseOpacity - p.opacity) * 0.06;
        }

        /* spring back toward wave target */
        p.vx += (targetX - p.x) * RETURN_SPEED;
        p.vy += (targetY - p.y) * RETURN_SPEED;
        p.vx *= DAMPING;
        p.vy *= DAMPING;
        p.x += p.vx;
        p.y += p.vy;

        /* draw particle */
        const r = Math.round(220 + p.opacity * 15);
        const g = Math.round(200 + p.opacity * 5);
        const b = Math.round(200 + p.opacity * 5);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity})`;
        ctx.fill();
      });

      drawConnections();

      frameRef.current = requestAnimationFrame(tick);
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }

    function handleMouseLeave() {
      mouseRef.current = { x: -9999, y: -9999 };
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    frameRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameRef.current);
      ro.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.85 }}
    />
  );
}
