"use client";

import { notFound } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, ChevronLeft, ChevronRight, Calendar, User } from "lucide-react";
import { getProjectBySlug } from "@/lib/projectsData";
import { useLang } from "@/contexts/LanguageContext";

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { lang } = useLang();
  const project = getProjectBySlug(slug);
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) notFound();

  const p = project!;

  const title       = lang === "en" ? p.titleEn       : p.titleEs;
  const description = lang === "en" ? p.descriptionEn : p.descriptionEs;
  const longDesc    = lang === "en" ? p.longDescEn    : p.longDescEs;

  function prev() {
    setCurrentImage((i) => (i === 0 ? p.images.length - 1 : i - 1));
  }

  function next() {
    setCurrentImage((i) => (i === p.images.length - 1 ? 0 : i + 1));
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200 group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform duration-200" />
            {lang === "en" ? "Back to projects" : "Volver a proyectos"}
          </Link>
        </motion.div>

        {/* Main grid — image left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT — Image carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/5 bg-[#0A0A0A] group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={p.images[currentImage]}
                    alt={`${title} — imagen ${currentImage + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Carousel controls */}
              {p.images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 transition-all duration-200 z-10"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 transition-all duration-200 z-10"
                  >
                    <ChevronRight size={16} />
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {p.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImage(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === currentImage
                            ? "w-6 bg-[#C4281C]"
                            : "w-1.5 bg-white/30 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail strip */}
            {p.images.length > 1 && (
              <div className="flex gap-3 mt-3">
                {p.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`relative flex-1 aspect-video rounded-xl overflow-hidden border transition-all duration-200 ${
                      i === currentImage
                        ? "border-[#C4281C]/60"
                        : "border-white/5 opacity-50 hover:opacity-80"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`thumbnail ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="120px"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* RIGHT — Project info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Title */}
            <div>
              <p className="text-xs font-heading font-medium text-[#C4281C] uppercase tracking-widest mb-3">
                {lang === "en" ? "Project" : "Proyecto"}
              </p>
              <h1 className="text-4xl lg:text-5xl font-heading font-medium tracking-tight leading-heading text-white mb-4">
                {title}
              </h1>
              <p className="text-base text-white/45 font-body leading-body">
                {description}
              </p>
            </div>

            {/* Meta info */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-white/35 font-body">
                <Calendar size={14} className="text-[#C4281C]" />
                {p.year}
              </div>
              <div className="flex items-center gap-2 text-sm text-white/35 font-body">
                <User size={14} className="text-[#C4281C]" />
                {p.client}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/5" />

            {/* Long description */}
            <p className="text-sm text-white/50 font-body leading-body">
              {longDesc}
            </p>

            {/* Tags */}
            <div>
              <p className="text-xs font-heading font-medium text-white/25 uppercase tracking-widest mb-3">
                {lang === "en" ? "Technologies" : "Tecnologías"}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/4 border border-white/8 text-white/50 font-body hover:border-[#C4281C]/30 hover:text-[#C4281C]/80 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/5" />

            {/* Action buttons */}
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={p.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#C4281C] text-white text-sm font-heading font-medium hover:bg-[#991F16] transition-colors duration-300"
              >
                <ExternalLink size={14} />
                {lang === "en" ? "View demo" : "Ver demo"}
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={p.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white/50 text-sm font-heading font-medium hover:border-white/25 hover:text-white transition-all duration-300"
              >
                <Github size={14} />
                {lang === "en" ? "View code" : "Ver código"}
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-[#C4281C]/15 transition-colors duration-500 p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-px h-20 bg-gradient-to-b from-[#C4281C]/50 to-transparent" />
          <div className="absolute top-0 right-0 h-px w-20 bg-gradient-to-l from-[#C4281C]/50 to-transparent" />
          <p className="text-xs font-heading font-medium text-[#C4281C] uppercase tracking-widest mb-3">
            {lang === "en" ? "Interested?" : "¿Te interesa?"}
          </p>
          <h2 className="text-3xl font-heading font-medium tracking-tight text-white mb-4">
            {lang === "en" ? "Let's build something together" : "Construyamos algo juntos"}
          </h2>
          <p className="text-sm text-white/40 font-body leading-body max-w-md mx-auto mb-8">
            {lang === "en"
              ? "Have a similar project in mind? We'd love to hear about it."
              : "¿Tienes un proyecto similar en mente? Nos encantaría escucharte."}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C4281C] text-white font-heading font-medium text-sm hover:bg-[#991F16] transition-all duration-300 hover:scale-[1.03]"
          >
            {lang === "en" ? "Contact us" : "Contáctenos"}
          </Link>
        </motion.div>

      </div>
    </div>
  );
}