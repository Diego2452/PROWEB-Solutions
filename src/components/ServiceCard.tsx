"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { translations, t } from "@/lib/translations";

interface ServiceCardProps {
  title: string;
  includes: string[];
  price: string;
  accent?: "purple" | "green" | "pink" | "yellow";
  featured?: boolean;
  index?: number;
}

export default function ServiceCard({
  title,
  includes,
  price,
  featured = false,
  index = 0,
}: ServiceCardProps) {
  const { lang } = useLang();
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex flex-col bg-[#141414] rounded-2xl p-6 border transition-all duration-400 group ${
        featured ? "border-[#C4281C]/35" : "border-white/5 hover:border-[#C4281C]/20"
      }`}
    >
      {hovered && (
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background: `radial-gradient(200px circle at ${glowPos.x}% ${glowPos.y}%, rgba(196,40,28,0.14), transparent 70%)`,
          }}
        />
      )}

      {featured && (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute -top-3 left-6 flex items-center gap-1 text-xs font-heading font-medium px-3 py-1 rounded-full bg-[#C4281C] text-white"
        >
          <Sparkles size={10} />
          {t(translations.services.popularBadge, lang)}
        </motion.div>
      )}

      <h3 className="text-base font-heading font-medium tracking-tight text-white mb-1 group-hover:text-[#C4281C] transition-colors duration-300">
        {title}
      </h3>

      <p className="text-xs text-white/25 font-body mb-4">
        {t(translations.services.includesLabel, lang)}
      </p>

      <ul className="flex flex-col gap-2.5 mb-6 flex-1">
        {includes.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + i * 0.06 }}
            className="flex items-start gap-2 text-sm text-white/50 font-body"
          >
            <Check size={13} className="mt-0.5 shrink-0 text-[#C4281C]" />
            {item}
          </motion.li>
        ))}
      </ul>

      <div className="mt-auto">
        <div className="mb-4">
          <p className="text-xs text-white/25 font-body mb-0.5">
            {t(translations.services.priceLabel, lang)}
          </p>
          <p className="text-xl font-heading font-medium tracking-tight text-[#C4281C]">{price}</p>
        </div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="/contact"
            className="block w-full text-center py-2.5 rounded-full text-xs font-heading font-medium bg-[#C4281C]/10 text-[#C4281C] hover:bg-[#C4281C] hover:text-white transition-all duration-300"
          >
            {t(translations.services.ctaBtn, lang)}
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}