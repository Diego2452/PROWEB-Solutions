"use client";

import Section from "@/components/Section";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import { Globe, Code2, Database, Headphones, Network, Wrench } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { translations, t } from "@/lib/translations";

const iconMap = [Globe, Code2, Database, Headphones, Network, Wrench];

export default function AboutPage() {
  const { lang } = useLang();

  const mvv = [
    { label: t(translations.about.missionLabel, lang), text: t(translations.about.missionText, lang) },
    { label: t(translations.about.visionLabel,  lang), text: t(translations.about.visionText,  lang) },
    { label: t(translations.about.valuesLabel,  lang), text: t(translations.about.valuesText,  lang) },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <Section className="mb-20">
          <p className="text-xs font-heading font-medium text-[#C4281C] uppercase tracking-widest mb-4">
            {t(translations.about.sectionLabel, lang)}
          </p>
          <h1 className="text-5xl lg:text-6xl font-heading font-medium tracking-tight leading-heading text-white mb-6">
            <AnimatedText text={t(translations.about.title, lang)} as="span" />
          </h1>
        </Section>

        {/* Who we are */}
        <Section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <h2 className="text-3xl font-heading font-medium tracking-tight leading-heading text-white mb-6">
              {t(translations.about.whoTitle, lang)}
            </h2>
            <p className="text-base text-white/45 font-body leading-body mb-4">
              {t(translations.about.whoBody1, lang)}
            </p>
            <p className="text-base text-white/45 font-body leading-body">
              {t(translations.about.whoBody2, lang)}
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-square border border-white/5 group">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt={t(translations.about.imageAlt, lang)}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#C4281C]/10 to-transparent" />
          </div>
        </Section>

        {/* Mission / Vision / Values */}
        <Section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mvv.map((item) => (
              <div
                key={item.label}
                className="bg-[#141414] rounded-2xl p-8 border border-[#C4281C]/15 hover:border-[#C4281C]/30 transition-colors duration-300"
              >
                <p className="text-xs font-heading font-medium uppercase tracking-widest mb-4 text-[#C4281C]">
                  {item.label}
                </p>
                <p className="text-sm text-white/45 font-body leading-body">{item.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Specialties */}
        <Section>
          <p className="text-xs font-heading font-medium text-[#C4281C] uppercase tracking-widest mb-4">
            {t(translations.about.specLabel, lang)}
          </p>
          <h2 className="text-3xl font-heading font-medium tracking-tight leading-heading text-white mb-12">
            {t(translations.about.specTitle, lang)}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {translations.about.specialties.map((item, i) => {
              const Icon = iconMap[i];
              return (
                <div
                  key={t(item.title, lang)}
                  className="bg-[#141414] rounded-2xl p-6 border border-white/5 hover:border-[#C4281C]/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#C4281C]/10 flex items-center justify-center mb-4 group-hover:bg-[#C4281C]/20 transition-colors duration-300">
                    <Icon size={18} className="text-[#C4281C]" />
                  </div>
                  <h3 className="text-base font-heading font-medium tracking-tight text-white mb-2 group-hover:text-[#C4281C] transition-colors duration-300">
                    {t(item.title, lang)}
                  </h3>
                  <p className="text-sm text-white/35 font-body leading-body">
                    {t(item.description, lang)}
                  </p>
                </div>
              );
            })}
          </div>
        </Section>

      </div>
    </div>
  );
}