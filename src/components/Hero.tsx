"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useRef } from "react";
import TopoCanvas from "./fx/TopoCanvas";
import MagneticButton from "./MagneticButton";
import { useLang } from "@/contexts/LanguageContext";
import { projectsData } from "@/lib/projectsData";

/* ── Inline bilingual copy ── */
const COPY = {
  es: {
    eyebrow:   "Diseño · Desarrollo · Resultados",
    headline1: "Tu empresa merece",
    headline2: "presencia digital perfecta.",
    subtitle:  "Diseñamos y desarrollamos sitios web y aplicaciones que llevan tu pyme al mundo digital. Moderno, veloz y construido para crecer.",
    cta1:      "Ver proyectos",
    cta2:      "Contáctenos",
    stack:     "Stack tecnológico",
    scroll:    "Descubrir más",
    projects:  "proyectos entregados",
    clients:   "clientes satisfechos",
  },
  en: {
    eyebrow:   "Design · Development · Results",
    headline1: "Your business deserves",
    headline2: "perfect digital presence.",
    subtitle:  "We design and develop websites and apps that take your SME into the digital world. Modern, fast, and built to grow.",
    cta1:      "See projects",
    cta2:      "Contact us",
    stack:     "Tech stack",
    scroll:    "Discover more",
    projects:  "projects delivered",
    clients:   "satisfied clients",
  },
} as const;

const TECH_PILLS = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Supabase",
];

/* ── Word-by-word animated headline ── */
function AnimatedHeadline({
  text,
  startDelay = 0.4,
  className = "",
}: {
  text: string;
  startDelay?: number;
  className?: string;
}) {
  return (
    <span className={`inline ${className}`}>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: startDelay + i * 0.09,
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
          style={{ marginRight: "0.28em" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const { lang } = useLang();
  const copy = COPY[lang as keyof typeof COPY] ?? COPY.es;
  const heroRef = useRef<HTMLDivElement>(null);

  /* Page-level scroll for parallax / fade-out */
  const { scrollY } = useScroll();
  const contentY       = useTransform(scrollY, [0, 650], [0, -120]);
  const contentOpacity = useTransform(scrollY, [0, 450], [1, 0]);
  const bgScale        = useTransform(scrollY, [0, 650], [1, 1.12]);
  const bgY            = useTransform(scrollY, [0, 650], [0, -60]);

  const springContentY = useSpring(contentY, { stiffness: 100, damping: 30 });
  const springBgY      = useSpring(bgY,      { stiffness: 80,  damping: 30 });

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Parallax background layer ── */}
      <motion.div
        style={{ y: springBgY, scale: bgScale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[#060606]" />
        <div className="absolute inset-0 opacity-50">
          <TopoCanvas />
        </div>
        {/* Top radial red halo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(196,40,28,0.14),transparent)]" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#060606] to-transparent" />
      </motion.div>

      {/* ── Parallax content layer ── */}
      <motion.div
        style={{ y: springContentY, opacity: contentOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-24 w-full"
      >
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="h-px w-8 bg-[#C4281C] flex-shrink-0" />
            <span className="text-xs font-heading font-medium text-[#C4281C] uppercase tracking-widest">
              {copy.eyebrow}
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[82px] font-heading font-medium tracking-tight leading-[0.95] text-white mb-6">
            <AnimatedHeadline text={copy.headline1} startDelay={0.3} />
            <br />
            <AnimatedHeadline
              text={copy.headline2}
              startDelay={0.5}
              className="text-gradient-red"
            />
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-base lg:text-lg text-white/45 font-body leading-body max-w-xl mb-10"
          >
            {copy.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.6 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <MagneticButton>
              <span className="ios-ring-strong">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C4281C] text-white font-heading font-medium text-sm hover:bg-[#991F16] transition-all duration-300"
                >
                  {copy.cta1}
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </span>
            </MagneticButton>

            <MagneticButton>
              <span className="ios-ring">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#111] text-white/70 font-heading font-medium text-sm hover:text-white hover:bg-[#1a1a1a] transition-all duration-300"
                >
                  {copy.cta2}
                </Link>
              </span>
            </MagneticButton>
          </motion.div>

          {/* Social proof line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex flex-wrap items-center gap-5 text-xs text-white/25 font-body mb-10"
          >
            <span>
              <span className="text-white/60 font-medium">{projectsData.length}+</span>{" "}
              {copy.projects}
            </span>
            <span className="h-3 w-px bg-white/10 flex-shrink-0" />
            <span>
              <span className="text-white/60 font-medium">100%</span>{" "}
              {copy.clients}
            </span>
          </motion.div>

          {/* Tech pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-wrap gap-2"
          >
            <span className="text-xs text-white/20 font-body self-center mr-1">
              {copy.stack}:
            </span>
            {TECH_PILLS.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + i * 0.07, duration: 0.4 }}
                className="ios-ring-tag"
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#111] text-xs text-white/50 font-body">
                  {tag}
                </span>
              </motion.span>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        style={{ opacity: contentOpacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/20 font-body tracking-[0.3em] uppercase">
          {copy.scroll}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={13} className="text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
