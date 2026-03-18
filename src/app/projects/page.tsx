"use client";

import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import AnimatedText from "@/components/AnimatedText";
import { useLang } from "@/contexts/LanguageContext";
import { translations, t } from "@/lib/translations";
import { projectsData } from "@/lib/projectsData";

export default function ProjectsPage() {
  const { lang } = useLang();

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Section className="mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, i) => (
            <ProjectCard
              key={project.slug}
              title={lang === "en" ? project.titleEn : project.titleEs}
              description={lang === "en" ? project.descriptionEn : project.descriptionEs}
              image={project.images[0]}
              tags={project.tags}
              demoUrl={project.demoUrl}
              codeUrl={project.codeUrl}
              slug={project.slug}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
