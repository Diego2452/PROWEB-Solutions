"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, Earth } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";

const options: { value: Lang; label: string }[] = [
  { value: "es", label: "Español" },
  { value: "en", label: "English" },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const current = options.find((o) => o.value === lang)!;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-3 py-2.5 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/25 transition-all duration-200 text-base font-body"
      >
        <Earth size={20} />
        <span className="uppercase tracking-wide">{current.value}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={11} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.97 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute right-0 top-[calc(100%+8px)] z-50 min-w-[130px] bg-[#141414] border border-white/8 rounded-xl overflow-hidden shadow-xl shadow-black/40"
            >
              {options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => { setLang(opt.value); setOpen(false); }}
                  className="w-full flex items-center gap-2.5 px-4 py-2.5 text-base font-body text-left hover:bg-white/5 transition-colors duration-150"
                >
                  <span className={lang === opt.value ? "text-white" : "text-white/45"}>
                    {opt.label}
                  </span>
                  {lang === opt.value && (
                    <Check size={11} className="ml-auto text-[#C4281C]" />
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}