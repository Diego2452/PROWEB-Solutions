"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, X } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

interface ServiceOption {
  id: string;
  labelEs: string;
  labelEn: string;
  priceEs: string;
  priceEn: string;
}

interface ServiceGroup {
  titleEs: string;
  titleEn: string;
  options: ServiceOption[];
}

const serviceGroups: ServiceGroup[] = [
  {
    titleEs: "Desarrollo Web",
    titleEn: "Web Development",
    options: [
      { id: "web-basic",    labelEs: "Plan Básico Web",      labelEn: "Basic Web Plan",        priceEs: "$249.50",        priceEn: "$249.50"        },
      { id: "web-mid",      labelEs: "Plan Intermedio Web",  labelEn: "Intermediate Web Plan", priceEs: "$499.50",        priceEn: "$499.50"        },
      { id: "web-pro",      labelEs: "Plan Pro Web",         labelEn: "Pro Web Plan",          priceEs: "$849.50",        priceEn: "$849.50"        },
    ],
  },
  {
    titleEs: "Aplicaciones Móviles",
    titleEn: "Mobile Apps",
    options: [
      { id: "app-basic",    labelEs: "Plan Básico App",      labelEn: "Basic App Plan",        priceEs: "$249.50",        priceEn: "$249.50"        },
      { id: "app-mid",      labelEs: "Plan Intermedio App",  labelEn: "Intermediate App Plan", priceEs: "$499.50",        priceEn: "$499.50"        },
      { id: "app-pro",      labelEs: "Plan Pro App",         labelEn: "Pro App Plan",          priceEs: "$849.50",        priceEn: "$849.50"        },
    ],
  },
  {
    titleEs: "Otros Servicios",
    titleEn: "Other Services",
    options: [
      { id: "maintenance",  labelEs: "Mantenimiento Web & App", labelEn: "Web & App Maintenance", priceEs: "$29.99/mes",  priceEn: "$29.99/mo"      },
      { id: "ads-basic",    labelEs: "Google Ads Básico",       labelEn: "Basic Google Ads",      priceEs: "$79.99",      priceEn: "$79.99"         },
      { id: "ads-pro",      labelEs: "Google Ads Pro",          labelEn: "Pro Google Ads",        priceEs: "$199.99",     priceEn: "$199.99"        },
    ],
  },
];

interface ServiceMultiSelectProps {
  selected: string[];
  onChange: (values: string[]) => void;
}

export default function ServiceMultiSelect({ selected, onChange }: ServiceMultiSelectProps) {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function toggle(id: string) {
    onChange(selected.includes(id) ? selected.filter((s) => s !== id) : [...selected, id]);
  }

  function remove(id: string, e: React.MouseEvent) {
    e.stopPropagation();
    onChange(selected.filter((s) => s !== id));
  }

  const allOptions = serviceGroups.flatMap((g) => g.options);
  const selectedOptions = allOptions.filter((o) => selected.includes(o.id));

  const placeholder = lang === "en"
    ? "Select services to quote..."
    : "Seleccione los servicios a cotizar...";

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full bg-[#0F0F0F] border border-white/8 rounded-xl px-4 py-3 text-sm text-left transition-all duration-300 hover:border-white/15 focus:outline-none focus:border-[#C4281C]/50 flex items-center justify-between gap-2 min-h-[46px]"
        style={open ? { borderColor: "rgba(196,40,28,0.5)", boxShadow: "0 0 0 3px rgba(196,40,28,0.08)" } : {}}
      >
        <div className="flex flex-wrap gap-1.5 flex-1">
          {selectedOptions.length === 0 ? (
            <span className="text-white/20 font-body">{placeholder}</span>
          ) : (
            selectedOptions.map((opt) => (
              <span
                key={opt.id}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#C4281C]/15 border border-[#C4281C]/30 text-[#C4281C] text-xs font-body"
              >
                {lang === "en" ? opt.labelEn : opt.labelEs}
                <button type="button" onClick={(e) => remove(opt.id, e)} className="hover:text-white transition-colors">
                  <X size={10} />
                </button>
              </span>
            ))
          )}
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-white/30"
        >
          <ChevronDown size={15} />
        </motion.div>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 bg-[#141414] border border-white/8 rounded-xl overflow-hidden shadow-2xl shadow-black/50"
          >
            {serviceGroups.map((group, gi) => (
              <div key={gi}>
                {/* Group header */}
                <div className="px-4 py-2.5 border-b border-white/5">
                  <p className="text-xs font-heading font-medium text-[#C4281C] uppercase tracking-widest">
                    {lang === "en" ? group.titleEn : group.titleEs}
                  </p>
                </div>

                {/* Options */}
                {group.options.map((opt) => {
                  const isSelected = selected.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggle(opt.id)}
                      className={`w-full flex items-center justify-between px-4 py-2.5 text-xs font-body text-left transition-colors duration-150 ${
                        isSelected
                          ? "bg-[#C4281C]/8 text-white"
                          : "text-white/50 hover:bg-white/4 hover:text-white"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className={`w-4 h-4 rounded flex items-center justify-center border transition-colors duration-150 shrink-0 ${
                            isSelected
                              ? "bg-[#C4281C] border-[#C4281C]"
                              : "border-white/20"
                          }`}
                        >
                          {isSelected && <Check size={10} className="text-white" />}
                        </span>
                        {lang === "en" ? opt.labelEn : opt.labelEs}
                      </span>
                      <span className={`text-xs font-heading font-medium ml-2 shrink-0 ${isSelected ? "text-[#C4281C]" : "text-white/25"}`}>
                        {lang === "en" ? opt.priceEn : opt.priceEs}
                      </span>
                    </button>
                  );
                })}

                {/* Spacer between groups */}
                {gi < serviceGroups.length - 1 && (
                  <div className="border-t border-white/5" />
                )}
              </div>
            ))}

            {/* Clear all */}
            {selected.length > 0 && (
              <>
                <div className="border-t border-white/5" />
                <button
                  type="button"
                  onClick={() => onChange([])}
                  className="w-full px-4 py-2.5 text-xs font-body text-white/30 hover:text-white/60 text-left transition-colors duration-150"
                >
                  {lang === "en" ? "Clear selection" : "Limpiar selección"}
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
