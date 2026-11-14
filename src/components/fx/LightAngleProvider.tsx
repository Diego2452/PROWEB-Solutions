"use client";
import { useEffect } from "react";

/**
 * LightAngleProvider
 *
 * Tracks mouse position (desktop) and device orientation (mobile gyroscope)
 * and updates the CSS custom property `--light-angle` on :root.
 *
 * iOS 13+: requests DeviceOrientationEvent permission automatically on the
 * user's very first touch interaction (no visible UI required).
 *
 * Place once inside <body> in layout.tsx — renders nothing.
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

    /* Shared orientation handler */
    const handleOrientation = (e: DeviceOrientationEvent) => {
      const gamma = e.gamma ?? 0; // left-right tilt  (-90 … +90)
      const beta  = e.beta  ?? 0; // front-back tilt  (-180 … +180)
      const angle = Math.atan2(gamma, beta - 45) * (180 / Math.PI);
      targetAngle = angle + 90;
    };

    if (typeof DeviceOrientationEvent !== "undefined") {
      const DEO = DeviceOrientationEvent as unknown as {
        requestPermission?: () => Promise<string>;
      };

      if (typeof DEO.requestPermission !== "function") {
        // Android / older iOS — no permission required, attach directly
        window.addEventListener("deviceorientation", handleOrientation);
      } else {
        // iOS 13+ — must call requestPermission() inside a user gesture.
        // We listen for the FIRST touchend on the document (once) and request
        // there, keeping the call synchronous within the gesture activation window.
        const requestOnFirstTouch = () => {
          DEO.requestPermission!()
            .then((perm) => {
              if (perm === "granted") {
                window.addEventListener("deviceorientation", handleOrientation);
              }
            })
            .catch(() => { /* user denied — mouse tracking still works */ });
        };
        document.addEventListener("touchend", requestOnFirstTouch, { once: true });
      }
    }

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMouse);
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  // Renders nothing — pure side-effect component
  return null;
}
