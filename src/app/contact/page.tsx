"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/Section";
import AnimatedText from "@/components/AnimatedText";
import ServiceMultiSelect from "@/components/ServiceMultiSelect";
import { Send, CheckCircle, Mail, Phone, MapPin, Clock } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { translations, t } from "@/lib/translations";

const inputClass = "bg-[#0F0F0F] border border-white/8 rounded-xl px-4 py-3 text-sm text-white font-body placeholder-white/20 focus:outline-none focus:border-[#C4281C]/50 transition-all duration-300 hover:border-white/15 w-full";

const serviceLabels: Record<string, string> = {
  "web-basic":   "Plan Básico Web — $249.50",
  "web-mid":     "Plan Intermedio Web — $499.50",
  "web-pro":     "Plan Pro Web — $849.50",
  "app-basic":   "Plan Básico App — $249.50",
  "app-mid":     "Plan Intermedio App — $499.50",
  "app-pro":     "Plan Pro App — $849.50",
  "maintenance": "Mantenimiento Web & App — $29.99/mes",
  "ads-basic":   "Google Ads Básico — $79.99",
  "ads-pro":     "Google Ads Pro — $199.99",
};

export default function ContactPage() {
  const { lang } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [selectedQuoteServices, setSelectedQuoteServices] = useState<string[]>([]);
  const [contactMethod, setContactMethod] = useState("");
  const [focused, setFocused] = useState<string | null>(null);

  const contactMethods = translations.contact.methods.map((m) => t(m, lang));

  const contactInfo = [
    { icon: Mail,   label: t(translations.contact.emailLabel,    lang), value: "ventas.prowebsolutionscr@gmail.com"              },
    { icon: Phone,  label: t(translations.contact.phoneLabel,    lang), value: "+506 8523-3668"                        },
    { icon: MapPin, label: t(translations.contact.locationLabel, lang), value: "Costa Rica"                           },
    { icon: Clock,  label: t(translations.contact.scheduleLabel, lang), value: t(translations.contact.scheduleValue, lang) },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(false);

    const form = e.currentTarget;
    const data = {
      nombre:          (form.elements.namedItem("nombre")      as HTMLInputElement).value,
      apellido:        (form.elements.namedItem("apellido")    as HTMLInputElement).value,
      email:           (form.elements.namedItem("email")       as HTMLInputElement).value,
      telefono:        (form.elements.namedItem("telefono")    as HTMLInputElement).value,
      pais:            (form.elements.namedItem("pais")        as HTMLInputElement).value,
      descripcion:     (form.elements.namedItem("descripcion") as HTMLTextAreaElement).value,
      metodo:          contactMethod,
      serviciosCotizar: selectedQuoteServices.map((id) => serviceLabels[id] ?? id),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Section className="mb-16">
          <p className="text-xs font-heading font-medium text-[#C4281C] uppercase tracking-widest mb-4">
            {t(translations.contact.sectionLabel, lang)}
          </p>
          <h1 className="text-5xl lg:text-6xl font-heading font-medium tracking-tight leading-heading text-white mb-6">
            <AnimatedText text={t(translations.contact.title, lang)} as="span" />
          </h1>
          <p className="text-base text-white/40 font-body leading-body max-w-xl">
            {t(translations.contact.subtitle, lang)}
          </p>
        </Section>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-[#0A0A0A] rounded-2xl p-5 border border-white/5 hover:border-[#C4281C]/20 transition-all duration-300 group flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#C4281C]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C4281C]/20 transition-colors duration-300">
                    <Icon size={16} className="text-[#C4281C]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 font-body mb-0.5">{item.label}</p>
                    <p className="text-sm text-white/70 font-body">{item.value}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                  className="h-full min-h-[500px] flex flex-col items-center justify-center gap-5 bg-[#141414] rounded-2xl border border-[#C4281C]/20 p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                    className="w-16 h-16 rounded-full bg-[#C4281C]/15 flex items-center justify-center"
                  >
                    <CheckCircle size={32} className="text-[#C4281C]" />
                  </motion.div>
                  <h3 className="text-2xl font-heading font-medium tracking-tight text-white">
                    {t(translations.contact.successTitle, lang)}
                  </h3>
                  <p className="text-sm text-white/40 font-body leading-body max-w-xs">
                    {t(translations.contact.successBody, lang)}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => { setSubmitted(false); setSelectedQuoteServices([]); setContactMethod(""); }}
                    className="mt-2 px-6 py-2.5 rounded-full border border-[#C4281C]/30 text-sm text-[#C4281C] font-heading font-medium hover:bg-[#C4281C]/10 transition-colors duration-200"
                  >
                    {t(translations.contact.successBtn, lang)}
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="bg-[#0A0A0A] rounded-2xl border border-white/5 p-8 flex flex-col gap-5"
                >
                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-body text-white/35">
                        {t(translations.contact.nameLabel, lang)} <span className="text-[#C4281C]">*</span>
                      </label>
                      <input
                        required name="nombre" type="text"
                        placeholder={t(translations.contact.namePlaceholder, lang)}
                        onFocus={() => setFocused("nombre")} onBlur={() => setFocused(null)}
                        className={inputClass}
                        style={focused === "nombre" ? { borderColor: "rgba(196,40,28,0.5)", boxShadow: "0 0 0 3px rgba(196,40,28,0.08)" } : {}}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-body text-white/35">
                        {t(translations.contact.lastNameLabel, lang)} <span className="text-[#C4281C]">*</span>
                      </label>
                      <input
                        required name="apellido" type="text"
                        placeholder={t(translations.contact.lastNamePlaceholder, lang)}
                        onFocus={() => setFocused("apellido")} onBlur={() => setFocused(null)}
                        className={inputClass}
                        style={focused === "apellido" ? { borderColor: "rgba(196,40,28,0.5)", boxShadow: "0 0 0 3px rgba(196,40,28,0.08)" } : {}}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-body text-white/35">
                      {t(translations.contact.emailFieldLabel, lang)} <span className="text-[#C4281C]">*</span>
                    </label>
                    <input
                      required name="email" type="email"
                      placeholder={t(translations.contact.emailPlaceholder, lang)}
                      onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                      className={inputClass}
                      style={focused === "email" ? { borderColor: "rgba(196,40,28,0.5)", boxShadow: "0 0 0 3px rgba(196,40,28,0.08)" } : {}}
                    />
                  </div>

                  {/* Phone + Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-body text-white/35">
                        {t(translations.contact.phoneFieldLabel, lang)}
                      </label>
                      <input
                        name="telefono" type="tel" defaultValue="+506 "
                        onFocus={() => setFocused("tel")} onBlur={() => setFocused(null)}
                        className={inputClass}
                        style={focused === "tel" ? { borderColor: "rgba(196,40,28,0.5)", boxShadow: "0 0 0 3px rgba(196,40,28,0.08)" } : {}}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-body text-white/35">
                        {t(translations.contact.countryLabel, lang)}
                      </label>
                      <input
                        name="pais" type="text" defaultValue="Costa Rica"
                        onFocus={() => setFocused("pais")} onBlur={() => setFocused(null)}
                        className={inputClass}
                        style={focused === "pais" ? { borderColor: "rgba(196,40,28,0.5)", boxShadow: "0 0 0 3px rgba(196,40,28,0.08)" } : {}}
                      />
                    </div>
                  </div>

                  {/* Contact method */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-body text-white/35">
                      {t(translations.contact.methodLabel, lang)}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {contactMethods.map((m) => (
                        <motion.button
                          whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                          type="button" key={m} onClick={() => setContactMethod(m)}
                          className={`px-3 py-1.5 rounded-full text-xs font-body border transition-all duration-200 ${
                            contactMethod === m
                              ? "border-[#C4281C]/50 bg-[#C4281C]/12 text-[#C4281C]"
                              : "border-white/8 text-white/35 hover:border-white/20 hover:text-white/55"
                          }`}
                        >
                          {m}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Services to quote */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-body text-white/35">
                      {lang === "en" ? "Services to quote" : "Servicios a cotizar"}
                    </label>
                    <ServiceMultiSelect
                      selected={selectedQuoteServices}
                      onChange={setSelectedQuoteServices}
                    />
                  </div>

                  {/* Description */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-body text-white/35">
                      {t(translations.contact.descLabel, lang)} <span className="text-[#C4281C]">*</span>
                    </label>
                    <textarea
                      required name="descripcion" rows={4}
                      placeholder={t(translations.contact.descPlaceholder, lang)}
                      onFocus={() => setFocused("desc")} onBlur={() => setFocused(null)}
                      className={`${inputClass} resize-none`}
                      style={focused === "desc" ? { borderColor: "rgba(196,40,28,0.5)", boxShadow: "0 0 0 3px rgba(196,40,28,0.08)" } : {}}
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <p className="text-xs text-red-400 font-body text-center">
                      {lang === "en"
                        ? "Something went wrong. Please try again or email us directly."
                        : "Ocurrió un error. Intenta de nuevo o escríbenos directamente."}
                    </p>
                  )}

                  {/* Submit */}
                  <motion.button
                    whileHover={{ scale: sending ? 1 : 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    disabled={sending}
                    className="mt-1 flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#C4281C] text-white font-heading font-medium text-sm hover:bg-[#991F16] transition-all duration-300 relative overflow-hidden group disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <motion.span
                      className="absolute inset-0 bg-white/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <Send size={14} className="relative z-10" />
                    <span className="relative z-10">
                      {sending
                        ? (lang === "en" ? "Sending..." : "Enviando...")
                        : t(translations.contact.submitBtn, lang)}
                    </span>
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}