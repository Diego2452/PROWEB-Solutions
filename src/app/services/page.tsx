"use client";

import ServiceCard from "@/components/ServiceCard";
import Section from "@/components/Section";
import AnimatedText from "@/components/AnimatedText";
import { useLang } from "@/contexts/LanguageContext";
import { translations, t } from "@/lib/translations";

export default function ServicesPage() {
  const { lang } = useLang();

  const webPlans = translations.services.plans.web.map((plan) => ({
    title:    t(plan.title, lang),
    price:    t(plan.price, lang),
    featured: plan.featured ?? false,
    includes: plan.includes.map((item) => t(item, lang)),
  }));

  const mobilePlans = translations.services.plans.mobile.map((plan) => ({
    title:    t(plan.title, lang),
    price:    t(plan.price, lang),
    featured: plan.featured ?? false,
    includes: plan.includes.map((item) => t(item, lang)),
  }));

  const otherPlans = translations.services.plans.other.map((plan) => ({
    title:    t(plan.title, lang),
    price:    t(plan.price, lang),
    featured: plan.featured ?? false,
    includes: plan.includes.map((item) => t(item, lang)),
  }));

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Section className="mb-16">
          <p className="text-xs font-heading font-medium text-[#C4281C] uppercase tracking-widest mb-4">
            {t(translations.services.sectionLabel, lang)}
          </p>
          <h1 className="text-5xl lg:text-6xl font-heading font-medium tracking-tight leading-heading text-white mb-6">
            <AnimatedText text={t(translations.services.title, lang)} as="span" />
          </h1>
          <p className="text-base text-white/40 font-body leading-body max-w-xl">
            {t(translations.services.subtitle, lang)}
          </p>
        </Section>

        <Section className="mb-20">
          <p className="text-xs font-heading font-medium text-[#C4281C] uppercase tracking-widest mb-3">
            {t(translations.services.webLabel, lang)}
          </p>
          <h2 className="text-2xl font-heading font-medium tracking-tight text-white mb-8">
            {t(translations.services.webTitle, lang)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {webPlans.map((plan, i) => (
              <ServiceCard key={plan.title} {...plan} index={i} />
            ))}
          </div>
        </Section>

        <Section className="mb-20">
          <p className="text-xs font-heading font-medium text-[#C4281C] uppercase tracking-widest mb-3">
            {t(translations.services.mobileLabel, lang)}
          </p>
          <h2 className="text-2xl font-heading font-medium tracking-tight text-white mb-8">
            {t(translations.services.mobileTitle, lang)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mobilePlans.map((plan, i) => (
              <ServiceCard key={plan.title} {...plan} index={i} />
            ))}
          </div>
        </Section>

        <Section>
          <p className="text-xs font-heading font-medium text-[#C4281C] uppercase tracking-widest mb-3">
            {t(translations.services.otherLabel, lang)}
          </p>
          <h2 className="text-2xl font-heading font-medium tracking-tight text-white mb-8">
            {t(translations.services.otherTitle, lang)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherPlans.map((plan, i) => (
              <ServiceCard key={plan.title} {...plan} index={i} />
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}