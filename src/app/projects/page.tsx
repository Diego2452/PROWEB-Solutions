"use client";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import AnimatedText from "@/components/AnimatedText";
import { useLang } from "@/contexts/LanguageContext";
import { translations, t } from "@/lib/translations";
import { projectsData, CATEGORY_LABELS, type ProjectCategory } from "@/lib/projectsData";

const CATEGORIES: ProjectCategory[] = [
  "todos", "ecommerce", "sistema", "web", "movil",
  "portfolio", "restaurante", "escuela", "turismo",
];

export default function ProjectsPage() {
  const { lang } = useLang();
  const [active, setActive] = useState<ProjectCategory>("todos");

  const filtered = active === "todos"
    ? projectsData
    : projectsData.filter(p => p.category === active);

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

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map(cat => {
            const isActive = active === cat;
            const label    = CATEGORY_LABELS[cat][lang === "en" ? "en" : "es"];
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-4 py-1.5 rounded-full text-sm font-heading font-medium border transition-all duration-200"
                style={{
                  backgroundColor: isActive ? "#C4281C"             : "transparent",
                  borderColor:     isActive ? "#C4281C"             : "rgba(255,255,255,0.1)",
                  color:           isActive ? "#ffffff"             : "rgba(255,255,255,0.45)",
                }}
              >
                {label}
                {cat !== "todos" && (
                  <span className="ml-1.5 text-xs opacity-60">
                    ({projectsData.filter(p => p.category === cat).length})
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => {
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

        {filtered.length === 0 && (
          <p className="text-center text-white/30 py-20 text-sm">
            {lang === "en" ? "No projects in this category yet." : "Sin proyectos en esta categoría aún."}
          </p>
        )}
      </div>
    </div>
  );
}
