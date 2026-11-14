"use client";
import { useEffect, useState } from "react";

/**
 * LightAngleProvider
 *
 * Tracks mouse position (desktop) and device orientation (mobile gyroscope)
 * and updates the CSS custom property `--light-angle` on :root.
 *
 * This variable drives the conic-gradient on .ios-ring / .ios-ring-strong,
 * creating an iOS-style "lit border" that follows the light source.
 *
 * Place once inside <body> in layout.tsx — it renders nothing visible.
 */
export function LightAngleProvider() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if iOS DeviceOrientationEvent permission is needed
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof (DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> })
        .requestPermission === "function"
    ) {
      setShowPrompt(true);
    }
  }, []);

  /* ─── Actual angle tracking setup (non-permission code) ─── */
  useEffect(() => {
    let currentAngle = 225;
    let targetAngle  = 225;
    let raf          = 0;

    /* Smooth angle lerp that takes the shortest arc */
    const lerpAngle = (a: number, b: number, t: number) => {
      let d = b - a;
      while (d >  180) d -= 360;
      while (d < -180) d += 360;
      return a + d * t;
    };

    /* RAF loop — updates CSS var every frame */
    const animate = () => {
      currentAngle = lerpAngle(currentAngle, targetAngle, 0.08);
      document.documentElement.style.setProperty(
        "--light-angle",
        currentAngle.toFixed(1) + "deg"
      );
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    /* Desktop — mouse position → angle from screen centre */
    const onMouse = (e: MouseEvent) => {
      const angle =
        Math.atan2(
          e.clientY - window.innerHeight / 2,
          e.clientX - window.innerWidth  / 2
        ) *
        (180 / Math.PI);
      targetAngle = angle + 90; // 0° = top
    };
    document.addEventListener("mousemove", onMouse);

    /* Mobile — DeviceOrientationEvent (gyroscope) */
    const handleOrientation = (e: DeviceOrientationEvent) => {
      const gamma = e.gamma ?? 0; // left-right tilt  (-90 … +90)
      const beta  = e.beta  ?? 0; // front-back tilt  (-180 … +180)
      // Map tilt to a light angle: tilting right → light from right
      const angle = Math.atan2(gamma, beta - 45) * (180 / Math.PI);
      targetAngle = angle + 90;
    };

    const addOrientationListener = () => {
      window.addEventListener("deviceorientation", handleOrientation);
    };

    if (typeof DeviceOrientationEvent !== "undefined") {
      if (
        typeof (DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> })
          .requestPermission !== "function"
      ) {
        // Android / older iOS — no permission required, attach directly
        addOrientationListener();
      }
      // iOS 13+ permission is requested via the visible UI button (see return value below)
    }

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMouse);
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  /* ── iOS permission prompt button ── */
  const handlePermission = async () => {
    setShowPrompt(false);
    try {
      const perm = await (
        DeviceOrientationEvent as unknown as { requestPermission: () => Promise<string> }
      ).requestPermission();
      if (perm === "granted") {
        window.addEventListener("deviceorientation", (e: DeviceOrientationEvent) => {
          const gamma = e.gamma ?? 0;
          const beta  = e.beta  ?? 0;
          const angle = Math.atan2(gamma, beta - 45) * (180 / Math.PI);
          document.documentElement.style.setProperty("--light-angle", (angle + 90).toFixed(1) + "deg");
        });
      }
    } catch { /* denied — no gyroscope, mouse still works */ }
  };

  if (!showPrompt) return null;

  return (
    <button
      onClick={handlePermission}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/70 backdrop-blur-md border border-white/[0.12] text-[11px] text-white/60 font-body whitespace-nowrap"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[#C4281C] flex-shrink-0">
        <path d="M12 2L12 6M12 18L12 22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12L6 12M18 12L22 12M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93"/>
      </svg>
      Toca para activar efecto de luz · Tap to enable tilt effect
    </button>
  );
}
