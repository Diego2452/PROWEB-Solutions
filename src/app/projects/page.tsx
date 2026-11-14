"use client";
import { useState, useMemo } from "react";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import AnimatedText from "@/components/AnimatedText";
import {
  Search, ChevronLeft, ChevronRight,
  Layers, ShoppingCart, Server, Globe, Smartphone,
  Briefcase, UtensilsCrossed, GraduationCap, MapPin,
} from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { translations, t } from "@/lib/translations";
import { projectsData, CATEGORY_LABELS, type ProjectCategory } from "@/lib/projectsData";

const CATEGORIES: ProjectCategory[] = [
  "todos", "ecommerce", "sistema", "web", "movil",
  "portfolio", "restaurante", "escuela", "turismo",
];

/* Lucide icon per category */
const CAT_ICONS: Record<ProjectCategory, React.ReactNode> = {
  todos:       <Layers        size={12} />,
  ecommerce:   <ShoppingCart  size={12} />,
  sistema:     <Server        size={12} />,
  web:         <Globe         size={12} />,
  movil:       <Smartphone    size={12} />,
  portfolio:   <Briefcase     size={12} />,
  restaurante: <UtensilsCrossed size={12} />,
  escuela:     <GraduationCap size={12} />,
  turismo:     <MapPin        size={12} />,
};

const PAGE_SIZE = 12;

export default function ProjectsPage() {
  const { lang }  = useLang();
  const [active,  setActive]  = useState<ProjectCategory>("todos");
  const [search,  setSearch]  = useState("");
  const [page,    setPage]    = useState(1);

  const filtered = useMemo(() => {
    const sorted = [...projectsData].sort((a, b) => b.yearSort - a.yearSort);
    return sorted.filter(p => {
      const matchCat    = active === "todos" || p.category === active;
      const q           = search.toLowerCase();
      const matchSearch = !q
        || p.titleEs.toLowerCase().includes(q)
        || p.titleEn.toLowerCase().includes(q)
        || p.descriptionEs.toLowerCase().includes(q)
        || p.descriptionEn.toLowerCase().includes(q)
        || p.tags.some(tag => tag.toLowerCase().includes(q))
        || p.client.toLowerCase().includes(q)
        || p.year.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [active, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function handleCategory(cat: ProjectCategory) {
    setActive(cat);
    setPage(1);
  }
  function handleSearch(val: string) {
    setSearch(val);
    setPage(1);
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <Section className="mb-12">
          <p className="text-xs font-heading font-medium text-[#C4281C] uppercase tracking-widest mb-4">
            {t(translations.projects.sectionLabel, lang)}
          </p>
          <h1 className="text-5xl lg:text-6xl font-heading font-medium tracking-tight leading-heading text-white mb-6">
            <AnimatedText text={t(translations.projects.title, lang)} as="span" />
          </h1>
          <p className="text-base text-white/40 font-body leading-body max-w-xl">
            {t(translations.projects.subtitle, lang)}
          </p>
        </Section>

        {/* Search bar */}
        <div className="relative mb-6">
          <Search
            size={15}
            className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ color: "rgba(255,255,255,0.25)" }}
          />
          <input
            type="text"
            value={search}
            onChange={e => handleSearch(e.target.value)}
            placeholder={lang === "en" ? "Search by name, technology, client…" : "Buscar por nombre, tecnología, cliente…"}
            className="w-full bg-[#111] border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#C4281C]/50 transition-colors duration-200"
          />
        </div>

        {/* Category filter — ios-ring-tag already in place */}
        <div className="flex gap-2 mb-10 overflow-x-auto scrollbar-hide pb-2">
          {CATEGORIES.map(cat => {
            const isActive = active === cat;
            const label    = CATEGORY_LABELS[cat][lang === "en" ? "en" : "es"];
            const count    = cat === "todos"
              ? projectsData.length
              : projectsData.filter(p => p.category === cat).length;
            return (
              <span key={cat} className="ios-ring-tag flex-shrink-0">
                <button
                  onClick={() => handleCategory(cat)}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-heading font-medium transition-all duration-200 whitespace-nowrap"
                  style={{
                    backgroundColor: isActive ? "#C4281C"              : "#111",
                    color:           isActive ? "#ffffff"              : "rgba(255,255,255,0.45)",
                  }}
                >
                  {CAT_ICONS[cat]}
                  {label}
                  <span className="ml-0.5 text-xs opacity-60">({count})</span>
                </button>
              </span>
            );
          })}
        </div>

        {/* Results count */}
        <p className="text-xs text-white/25 font-body mb-6">
          {lang === "en"
            ? `${filtered.length} project${filtered.length !== 1 ? "s" : ""} — sorted by most recent`
            : `${filtered.length} proyecto${filtered.length !== 1 ? "s" : ""} — ordenados por más reciente`}
        </p>

        {/* Grid */}
        {paginated.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {paginated.map((project, i) => {
              const cleanTags = project.tags.length > 6
                ? [...project.tags.slice(0, 6), "..."]
                : project.tags;
              return (
                <ProjectCard
                  key={project.slug}
                  title={lang === "en" ? project.titleEn : project.titleEs}
                  description={lang === "en" ? project.descriptionEn : project.descriptionEs}
                  image={project.images[0]}
                  tags={cleanTags}
                  demoUrl={project.demoUrl}
                  codeUrl={project.codeUrl}
                  slug={project.slug}
                  showCode={project.slug === "restaurante-el-varon"}
                  index={i}
                />
              );
            })}
          </div>
        ) : (
          <p className="text-center text-white/30 py-20 text-sm">
            {lang === "en" ? "No projects match your search." : "Ningún proyecto coincide con tu búsqueda."}
          </p>
        )}

        {/* Pagination — ios-ring-card on each button */}
        {totalPages > 1 && (
          <div className="flex items-center justify-end gap-2">
            <span className="text-xs text-white/30 font-body mr-2">
              {lang === "en" ? `Page ${page} of ${totalPages}` : `Página ${page} de ${totalPages}`}
            </span>

            {/* Prev */}
            <div className="ios-ring-card" style={{ display: 'inline-flex' }}>
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="flex items-center justify-center w-9 h-9 rounded-[19px] text-white/40 hover:text-[#C4281C] disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200 bg-[#060606]"
              >
                <ChevronLeft size={16} />
              </button>
            </div>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
              <div key={n} className="ios-ring-card" style={{ display: 'inline-flex' }}>
                <button
                  onClick={() => setPage(n)}
                  className="flex items-center justify-center w-9 h-9 rounded-[19px] text-sm font-heading font-medium transition-all duration-200"
                  style={{
                    backgroundColor: page === n ? "#C4281C" : "#060606",
                    color:           page === n ? "#ffffff" : "rgba(255,255,255,0.4)",
                  }}
                >
                  {n}
                </button>
              </div>
            ))}

            {/* Next */}
            <div className="ios-ring-card" style={{ display: 'inline-flex' }}>
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="flex items-center justify-center w-9 h-9 rounded-[19px] text-white/40 hover:text-[#C4281C] disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200 bg-[#060606]"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
