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
      {/* ios-ring wraps the trigger button */}
      <span className="ios-ring">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-1.5 px-3 py-2.5 rounded-full bg-[#111] text-white/50 hover:text-white transition-all duration-200 text-base font-body"
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
      </span>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            {/* ios-ring-card wraps the dropdown — absolute positioning via inline style */}
            <div
              className="ios-ring-card"
              style={{ position: "absolute", right: 0, top: "calc(100% + 8px)", zIndex: 50, minWidth: "130px" }}
            >
              <motion.div
                initial={{ opacity: 0, y: -6, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.97 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="bg-[#060606] rounded-[19px] overflow-hidden shadow-xl shadow-black/40"
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
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
