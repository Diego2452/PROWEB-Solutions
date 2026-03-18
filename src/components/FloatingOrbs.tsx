"use client";

import { motion } from "framer-motion";

const orbs = [
  { size: 500, x: "10%", y: "15%", delay: 0, duration: 18, opacity: 0.08 },
  { size: 350, x: "70%", y: "60%", delay: 3, duration: 22, opacity: 0.06 },
  { size: 250, x: "40%", y: "80%", delay: 6, duration: 16, opacity: 0.05 },
  { size: 180, x: "85%", y: "10%", delay: 2, duration: 25, opacity: 0.07 },
  { size: 120, x: "20%", y: "70%", delay: 9, duration: 14, opacity: 0.06 },
];

export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle at center, rgba(196,40,28,${orb.opacity}) 0%, transparent 70%)`,
            filter: "blur(40px)",
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            x: [0, 60, -40, 20, 0],
            y: [0, -50, 30, -20, 0],
            scale: [1, 1.1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
