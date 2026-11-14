"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { translations, t } from "@/lib/translations";
import { TAG_ICONS } from "@/lib/tagIcons";

interface ProjectCardProps {
  title:       string;
  description: string;
  image:       string;
  demoUrl?:    string;
  codeUrl?:    string;
  tags?:       string[];
  index?:      number;
  slug?:       string;
  /** Only show the code/GitHub button for this project. Default: false */
  showCode?:   boolean;
}

/* ── Tag chip con ícono — solid bg so ios-ring-tag border shows cleanly ── */
function TagChip({ tag }: { tag: string }) {
  const icon = TAG_ICONS[tag];
  return (
    <span className="ios-ring-tag flex-shrink-0">
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#111] text-[11px] text-white/35 font-body whitespace-nowrap">
        {icon && (
          <img
            src={icon}
            alt=""
            width={12}
            height={12}
            className="w-3 h-3 object-contain"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
        )}
        {tag}
      </span>
    </span>
  );
}

export default function ProjectCard({
  title,
  description,
  image,
  demoUrl  = "#",
  codeUrl  = "#",
  tags     = [],
  index    = 0,
  slug,
  showCode = false,
}: ProjectCardProps) {
  const { lang }  = useLang();
  const cardRef   = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const mouseX  = useMotionValue(0);
  const mouseY  = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]),  { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]),  { stiffness: 300, damping: 30 });

  const hasDemo = !!(demoUrl && demoUrl !== "#");
  const hasCode = !!(codeUrl && codeUrl !== "#") && showCode;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width  - 0.5);
    mouseY.set((e.clientY - rect.top)  / rect.height - 0.5);
    setGlowPos({
      x: ((e.clientX - rect.left) / rect.width)  * 100,
      y: ((e.clientY - rect.top)  / rect.height) * 100,
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
      className="h-full"
    >
      {/* iOS ring border wrapper */}
      <div className="ios-ring-card h-full">
        <motion.div
          ref={cardRef}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={handleMouseLeave}
          className="group relative flex flex-col h-full bg-[#060606] rounded-[19px] overflow-hidden transition-colors duration-500"
        >
          {/* Glow reactivo */}
          {hovered && (
            <div
              className="absolute inset-0 pointer-events-none rounded-[19px] transition-opacity duration-300 z-[1]"
              style={{
                background: `radial-gradient(300px circle at ${glowPos.x}% ${glowPos.y}%, rgba(196,40,28,0.12), transparent 70%)`,
              }}
            />
          )}

          {/* Área clickeable */}
          {detailHref ? (
            <Link href={detailHref} className="flex flex-col flex-1 cursor-pointer">
              <CardInner title={title} description={description} image={image} tags={tags} hovered={hovered} />
            </Link>
          ) : (
            <div className="flex flex-col flex-1">
              <CardInner title={title} description={description} image={image} tags={tags} hovered={hovered} />
            </div>
          )}

          {/* Botones al fondo */}
          <div className="px-6 pb-6 flex gap-3 relative z-10 flex-shrink-0">
            {hasDemo && (
              <span className="ios-ring-tag">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C4281C]/12 text-[#C4281C] text-xs font-heading font-medium hover:bg-[#C4281C]/25 transition-all duration-200"
                >
                  <ExternalLink size={12} />
                  {t(translations.projects.demoBtn, lang)}
                </motion.a>
              </span>
            )}

            {/* Code button — only renders when showCode is true */}
            {hasCode && (
              <span className="ios-ring-tag">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href={codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#111] text-white/40 text-xs font-heading font-medium hover:text-white transition-all duration-200"
                >
                  <Github size={12} />
                  {t(translations.projects.codeBtn, lang)}
                </motion.a>
              </span>
            )}

            {!hasDemo && !hasCode && (
              <span className="flex items-center px-4 py-2 text-white/20 text-xs font-body">
                {lang === "en" ? "Private project" : "Proyecto privado"}
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ── Inner: imagen + texto + tags ── */
function CardInner({
  title, description, image, tags, hovered,
}: {
  title:       string;
  description: string;
  image:       string;
  tags:        string[];
  hovered:     boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef   = useRef<HTMLDivElement>(null);
  const [visibleTags, setVisibleTags] = useState<string[]>(tags);
  const [hasMore,     setHasMore]     = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const measure   = measureRef.current;
    if (!container || !measure) return;
    const maxW  = container.offsetWidth;
    const chips = Array.from(measure.children) as HTMLElement[];
    const GAP   = 6;
    const DOTS  = 36;
    let used  = 0;
    let count = 0;
    for (let i = 0; i < chips.length; i++) {
      const w    = chips[i].offsetWidth + (i > 0 ? GAP : 0);
      const last = i === chips.length - 1;
      if (used + w + (last ? 0 : DOTS + GAP) <= maxW) { used += w; count++; }
      else break;
    }
    if (count < tags.length) { setVisibleTags(tags.slice(0, count)); setHasMore(true); }
    else                     { setVisibleTags(tags);                  setHasMore(false); }
  }, [tags]);

  return (
    <div className="flex flex-col flex-1">
      {/* Imagen */}
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized={image.startsWith("http")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/30 to-transparent" />
        {/* Scan line removed */}
      </div>

      {/* Texto */}
      <div className="flex flex-col flex-1 p-6 pb-3" style={{ transform: "translateZ(20px)" }}>
        <h3 className="text-lg font-heading font-medium tracking-tight text-white mb-2 group-hover:text-[#C4281C] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-white/40 font-body leading-body mb-4 line-clamp-2">
          {description}
        </p>

        {/* Medición off-screen */}
        {tags.length > 0 && (
          <div
            ref={measureRef}
            style={{ position:"fixed", top:"-100vh", left:0, visibility:"hidden", pointerEvents:"none", display:"flex", gap:"6px", flexWrap:"nowrap" }}
            aria-hidden="true"
          >
            {tags.map(tag => <TagChip key={tag} tag={tag} />)}
          </div>
        )}

        {/* Tags: 1 sola fila */}
        {tags.length > 0 && (
          <div ref={containerRef} className="flex gap-1.5 flex-nowrap overflow-hidden">
            {visibleTags.map(tag => <TagChip key={tag} tag={tag} />)}
            {hasMore && (
              <span className="ios-ring-tag flex-shrink-0">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#111] text-[11px] text-white/25">•••</span>
              </span>
            )}
          </div>
        )}

        <div className="flex-1" />
      </div>
    </div>
  );
}
