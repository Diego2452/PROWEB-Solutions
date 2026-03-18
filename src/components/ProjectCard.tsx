"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { useRef, useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { translations, t } from "@/lib/translations";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  codeUrl?: string;
  tags?: string[];
  index?: number;
  slug?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  demoUrl = "#",
  codeUrl = "#",
  tags = [],
  index = 0,
  slug,
}: ProjectCardProps) {
  const { lang } = useLang();
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
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

  const detailHref = slug ? `/projects/${slug}` : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="group relative bg-[#0A0A0A] rounded-2xl overflow-hidden border border-white/5 hover:border-[#C4281C]/25 transition-colors duration-500"
      >
        {hovered && (
          <div
            className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300 z-[1]"
            style={{
              background: `radial-gradient(300px circle at ${glowPos.x}% ${glowPos.y}%, rgba(196,40,28,0.12), transparent 70%)`,
            }}
          />
        )}

        {/* Clickable area — image + content (excluding buttons) */}
        {detailHref ? (
          <Link href={detailHref} className="block cursor-pointer">
            <CardInner
              title={title}
              description={description}
              image={image}
              tags={tags}
              hovered={hovered}
            />
          </Link>
        ) : (
          <CardInner
            title={title}
            description={description}
            image={image}
            tags={tags}
            hovered={hovered}
          />
        )}

        {/* Buttons — outside the Link so they don't trigger navigation */}
        <div className="px-6 pb-6 flex gap-3 relative z-10">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C4281C]/12 text-[#C4281C] text-xs font-heading font-medium border border-[#C4281C]/50 hover:bg-[#C4281C]/25 hover:border-[#C4281C] transition-all duration-200"
          >
            <ExternalLink size={12} />
            {t(translations.projects.demoBtn, lang)}
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/8 text-white/40 text-xs font-heading font-medium hover:border-white/20 hover:text-white transition-all duration-200"
          >
            <Github size={12} />
            {t(translations.projects.codeBtn, lang)}
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Inner content separated so Link wraps it cleanly ── */
function CardInner({
  title,
  description,
  image,
  tags,
  hovered,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  hovered: boolean;
}) {
  return (
    <>
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
        {hovered && (
          <motion.div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4281C]/60 to-transparent"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        )}
      </div>

      {/* Text content */}
      <div className="p-6 pb-3" style={{ transform: "translateZ(20px)" }}>
        <h3 className="text-lg font-heading font-medium tracking-tight text-white mb-2 group-hover:text-[#C4281C] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-white/40 font-body leading-body mb-4">{description}</p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-white/4 border border-white/8 text-white/35 font-body"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
