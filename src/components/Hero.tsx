"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import ParticleWave from "./ParticleWave";
import MagneticButton from "./MagneticButton";
import { useLang } from "@/contexts/LanguageContext";
import { translations, t } from "@/lib/translations";

const WORDS_ES = ["Innovadoras", "Modernas", "a la Medida", "de Alto Impacto"];
const WORDS_EN = ["Innovative",  "Modern",   "Tailored",    "High-Impact"   ];

function TypewriterCycle({ lang }: { lang: string }) {
  const words = lang === "en" ? WORDS_EN : WORDS_ES;
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  /* Reset typewriter when language changes */
  useEffect(() => {
    setDisplayed("");
    setDeleting(false);
    setIndex(0);
  }, [lang]);

  useEffect(() => {
    const word = words[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, words]);

  return (
    <span className="inline-block min-w-[2px]">
      <span className="text-gradient-red">{displayed}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[0.8em] bg-[#C4281C] ml-1 align-middle rounded-sm"
      />
    </span>
  );
}

function GridBackground() {
  return (
    <motion.div
      className="absolute inset-0"
      animate={{ opacity: [0.015, 0.04, 0.015] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }}
    />
  );
}

export default function Hero() {
  const { lang } = useLang();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Subtle grid */}
      <GridBackground />

      {/* Particle wave — replaces rings + orbs */}
      <ParticleWave />

      {/* Soft vignette at bottom to fade the particles */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none z-[1]" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-[1]" />

      {/* Content */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 text-center max-w-4xl mx-auto pt-24"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C4281C]/25 bg-[#C4281C]/8 text-[#C4281C] text-xs font-body mb-2"
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-[#C4281C]"
            animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {t(translations.hero.badge, lang)}
        </motion.div>

        {/* Main heading */}
        <div className="mb-5 overflow-hidden">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium tracking-tight leading-heading text-white"
          >
            {t(translations.hero.line1, lang)}
          </motion.div>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-7xl font-heading font-medium tracking-tight leading-heading text-white mt-2"
          >
            {t(translations.hero.line2, lang)}&nbsp;<TypewriterCycle lang={lang} />
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="text-xl text-white/45 font-body leading-body max-w-md mx-auto mt-2 mb-6"
        >
          {t(translations.hero.subtitle, lang)}
        </motion.p>

        {/* Tech pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-4"
        >
          {["Software Development", "Web Applications", "Mobile Apps", "Game Development"].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + i * 0.08 }}
              className="text-xs px-3 py-1 rounded-full bg-white/4 border border-white/8 text-white/55 font-body"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton>
            <Link
              href="/projects"
              className="group relative flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C4281C] text-white font-heading font-medium text-sm overflow-hidden hover:bg-[#991F16] transition-colors duration-300"
            >
              <span className="relative z-10">{t(translations.hero.cta1, lang)}</span>
              <ArrowRight size={13} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
          </MagneticButton>

          <MagneticButton>
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-full border border-white/10 text-white/55 font-heading font-medium text-sm hover:border-[#C4281C]/40 hover:text-white transition-all duration-300"
            >
              {t(translations.hero.cta2, lang)}
            </Link>
          </MagneticButton>
        </motion.div>

      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 z-10"
      >
        <span className="text-[10px] font-body tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={13} />
        </motion.div>
      </motion.div>
    </section>
  );
}