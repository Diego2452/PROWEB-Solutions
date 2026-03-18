"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterNumberProps {
  value: string;
  className?: string;
}

export default function CounterNumber({ value, className = "" }: CounterNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;

    const num = parseInt(value.replace(/\D/g, ""), 10);
    if (isNaN(num)) {
      setDisplay(value);
      return;
    }

    const suffix = value.replace(/[\d]/g, "");
    let start = 0;
    const duration = 1400;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(ease * num);
      setDisplay(current + suffix);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref} className={className}>{display}</span>;
}
