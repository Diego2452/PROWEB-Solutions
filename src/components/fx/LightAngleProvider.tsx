"use client";
import { useEffect } from "react";

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
      // iOS 13+ requires explicit permission
      if (
        typeof (DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> })
          .requestPermission === "function"
      ) {
        // Listen for a user interaction to trigger the prompt
        const requestPermission = async () => {
          try {
            const perm = await (
              DeviceOrientationEvent as unknown as {
                requestPermission: () => Promise<string>;
              }
            ).requestPermission();
            if (perm === "granted") addOrientationListener();
          } catch {
            // Permission denied or not available — fall back to mouse only
          }
          document.removeEventListener("click", requestPermission);
        };
        document.addEventListener("click", requestPermission, { once: true });
      } else {
        // Android / older iOS — no permission required
        addOrientationListener();
      }
    }

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMouse);
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  return null;
}
