"use client";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import AnimatedText from "@/components/AnimatedText";
import CounterNumber from "@/components/CounterNumber";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { translations, t } from "@/lib/translations";
import { projectsData } from "@/lib/projectsData";

/* ── Reusable tilt + glow wrapper ── */
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    setGlowPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }
  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  }

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        className={`relative overflow-hidden h-full ${className}`}
      >
        {hovered && (
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              borderRadius: "inherit",
              background: `radial-gradient(220px circle at ${glowPos.x}% ${glowPos.y}%, rgba(196,40,28,0.13), transparent 70%)`,
            }}
          />
        )}
        {children}
      </motion.div>
    </div>
  );
}

/* ── Page ── */
export default function HomePage() {
  const { lang } = useLang();

  // 2 random projects — picked once on mount, different each visit
  const [featuredProjects] = useState(() => {
    const shuffled = [...projectsData].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 2);
  });

  const stats = [
    { value: `${projectsData.length}+`, label: lang === "en" ? "Projects delivered"  : "Proyectos entregados"  },
    { value: "100%",                     label: lang === "en" ? "Satisfied clients"    : "Clientes satisfechos"  },
    { value: "2+",                       label: lang === "en" ? "Years of experience"  : "Años de experiencia"   },
    { value: "CR",                       label: lang === "en" ? "Based in Costa Rica"  : "Basados en Costa Rica" },
  ];

  return (
    <>
      <Hero />

      {/* About preview */}
      <Section className="py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-heading font-medium text-[#C4281C] uppercase tracking-widest mb-4">
                {t(translations.home.whoLabel, lang)}
              </p>
              <h2 className="text-4xl lg:text-5xl font-heading font-medium tracking-tight leading-heading text-white mb-6">
                <AnimatedText text={t(translations.home.whoTitle1, lang)} as="span" />
                <br />
                <AnimatedText text={t(translations.home.whoTitle2, lang)} as="span" delay={0.2} className="text-gradient-red" />
              </h2>
              <p className="text-base text-white/40 font-body leading-body mb-8 max-w-lg">
                {t(translations.home.whoBody, lang)}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-heading font-medium text-white/50 hover:text-white group transition-colors"
              >
                {t(translations.home.whoLink, lang)}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stats with ios-ring-card + tilt */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full"
                >
                  {/* ios-ring-card wrapper */}
                  <div className="ios-ring-card h-full">
                    <TiltCard className="bg-[#060606] rounded-[19px] p-6 group">
                      <p className="text-3xl font-heading font-medium text-[#C4281C] tracking-tight mb-1">
                        <CounterNumber value={stat.value} />
                      </p>
                      <p className="text-sm text-white/35 font-body">{stat.label}</p>
                    </TiltCard>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Services preview with tilt + ios-ring-card */}
      <Section className="py-28" variant="scale">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* ios-ring-card wrapper for services block */}
          <div className="ios-ring-card">
            <TiltCard className="rounded-[19px] bg-[#060606] p-12 lg:p-16">
              <div className="relative z-10 max-w-2xl">
                <p className="text-xs font-heading font-medium text-[#C4281C] uppercase tracking-widest mb-4">
                  {t(translations.home.servLabel, lang)}
                </p>
                <h2 className="text-4xl font-heading font-medium tracking-tight leading-heading text-white mb-6">
                  {t(translations.home.servTitle, lang)}
                </h2>
                <p className="text-base text-white/40 font-body leading-body mb-8">
                  {t(translations.home.servBody, lang)}
                </p>
                {/* ios-ring on "Ver servicios" button */}
                <span className="ios-ring">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#111] text-sm font-heading font-medium text-white hover:text-[#C4281C] transition-all duration-300"
                  >
                    {t(translations.home.servBtn, lang)}
                    <ArrowRight size={14} />
                  </Link>
                </span>
              </div>
            </TiltCard>
          </div>
        </div>
      </Section>

      {/* Projects preview — 2 aleatorios */}
      <Section className="py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-heading font-medium text-[#C4281C] uppercase tracking-widest mb-3">
                {t(translations.home.portLabel, lang)}
              </p>
              <h2 className="text-4xl font-heading font-medium tracking-tight leading-heading text-white">
                {t(translations.home.portTitle, lang)}
              </h2>
              <p className="text-base text-white/35 font-body mt-2">
                {t(translations.home.portSub, lang)}
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-heading font-medium text-white/40 hover:text-white group transition-colors shrink-0"
            >
              {t(translations.home.portLink, lang)}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, i) => (
              <ProjectCard
                key={project.slug}
                title={lang === "en" ? project.titleEn : project.titleEs}
                description={lang === "en" ? project.descriptionEn : project.descriptionEs}
                image={project.images[0]}
                tags={project.tags.slice(0, 5)}
                demoUrl={project.demoUrl}
                codeUrl={project.codeUrl}
                slug={project.slug}
                showCode={project.slug === "restaurante-el-varon"}
                index={i}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section className="py-28" variant="scale">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-xs font-heading font-medium text-[#C4281C] uppercase tracking-widest mb-4">
            {t(translations.home.ctaLabel, lang)}
          </p>
          <h2 className="text-4xl lg:text-5xl font-heading font-medium tracking-tight leading-heading text-white mb-6 max-w-2xl mx-auto">
            {t(translations.home.ctaTitle1, lang)}{" "}
            <span className="text-gradient-red">{t(translations.home.ctaTitle2, lang)}</span>?
          </h2>
          <p className="text-base text-white/35 font-body leading-body max-w-xl mx-auto mb-10">
            {t(translations.home.ctaBody, lang)}
          </p>
          {/* ios-ring-strong on main CTA */}
          <span className="ios-ring-strong">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C4281C] text-white font-heading font-medium text-sm hover:bg-[#991F16] transition-all duration-300 hover:scale-[1.03]"
            >
              {t(translations.home.ctaBtn, lang)}
              <ArrowRight size={14} />
            </Link>
          </span>
        </div>
      </Section>
    </>
  );
}
