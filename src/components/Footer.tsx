"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, MessageCircle, Github, Instagram } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import TopoCanvas from "./fx/TopoCanvas";

/* ── Animated left-line link ── */
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group flex w-fit items-center gap-2 text-sm text-white/40 transition-colors duration-200 hover:text-[#C4281C]"
    >
      <span className="h-px w-0 bg-[#C4281C] transition-all duration-300 group-hover:w-3 flex-shrink-0" />
      {children}
    </Link>
  );
}

export default function Footer() {
  const { lang } = useLang();
  const [sealHovered, setSealHovered] = useState(false);

  const navLinks = [
    { href: "/",         label: lang === "en" ? "Home"     : "Inicio"    },
    { href: "/projects", label: lang === "en" ? "Projects" : "Proyectos" },
    { href: "/services", label: lang === "en" ? "Services" : "Servicios" },
    { href: "/about",    label: lang === "en" ? "About"    : "Nosotros"  },
    { href: "/contact",  label: lang === "en" ? "Contact"  : "Contacto"  },
  ];

  const socials = [
    { href: "https://github.com/diegovargas-dev",         icon: Github,        label: "GitHub",    hoverClass: "hover:bg-[#333] hover:text-white hover:border-[#555]"             },
    { href: "https://instagram.com/proweb.solutions",     icon: Instagram,     label: "Instagram", hoverClass: "hover-instagram"                                                   },
    { href: "mailto:diegovargas.dev@gmail.com",           icon: Mail,          label: "Email",     hoverClass: "hover:bg-[#C4281C] hover:text-white hover:border-transparent"      },
    { href: "https://wa.me/50684058065",                  icon: MessageCircle, label: "WhatsApp",  hoverClass: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366]"        },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-black/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        {/* ── 3-column main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Col 1: Brand + social */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="inline-flex items-center gap-3 w-fit group">
              <div className="w-7 h-7 rounded-lg bg-[#C4281C] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-heading font-bold">P</span>
              </div>
              <span className="text-sm font-heading font-medium text-white group-hover:text-[#C4281C] transition-colors duration-200">
                PROWEB Solutions
              </span>
            </Link>

            <p className="text-sm text-white/30 font-body leading-body max-w-[220px]">
              {lang === "en"
                ? "Building digital experiences that drive real results."
                : "Construyendo experiencias digitales que generan resultados reales."}
            </p>

            {/* Social round buttons with ios-ring */}
            <div className="flex gap-2 flex-wrap">
              {socials.map(({ href, icon: Icon, label, hoverClass }) => (
                <span key={label} className="ios-ring">
                  <a
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`flex items-center justify-center w-9 h-9 rounded-full bg-[#1a1a1a] border border-white/[0.08] text-white/60 ${hoverClass} transition-all duration-200`}
                  >
                    <Icon size={15} />
                  </a>
                </span>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-heading font-medium text-white/25 uppercase tracking-widest mb-1">
              {lang === "en" ? "Navigation" : "Navegación"}
            </p>
            {navLinks.map(({ href, label }) => (
              <FooterLink key={href} href={href}>
                {label}
              </FooterLink>
            ))}
          </div>

          {/* Col 3: Contact */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-heading font-medium text-white/25 uppercase tracking-widest mb-1">
              {lang === "en" ? "Contact" : "Contacto"}
            </p>

            <a
              href="mailto:diegovargas.dev@gmail.com"
              className="group flex w-fit items-center gap-2 text-sm text-white/40 hover:text-[#C4281C] transition-colors duration-200"
            >
              <Mail size={13} className="text-[#C4281C] flex-shrink-0" />
              diegovargas.dev@gmail.com
            </a>

            <a
              href="https://wa.me/50684058065"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-fit items-center gap-2 text-sm text-white/40 hover:text-[#C4281C] transition-colors duration-200"
            >
              <MessageCircle size={13} className="text-[#C4281C] flex-shrink-0" />
              WhatsApp
            </a>
          </div>

        </div>

        {/* ── Bottom row: copyright left · ProWebCredit seal right ── */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Copyright */}
          <p className="text-xs text-white/20 font-body order-2 md:order-1">
            © {new Date().getFullYear()} PROWEB Solutions ·{" "}
            {lang === "en" ? "All rights reserved." : "Todos los derechos reservados."}
          </p>

          {/* ── ProWebCredit Seal ── */}
          <div
            className="ios-ring-card order-1 md:order-2 cursor-default"
            onMouseEnter={() => setSealHovered(true)}
            onMouseLeave={() => setSealHovered(false)}
          >
            <div className="relative w-56 h-28 rounded-[19px] bg-[#0A0A0A] overflow-hidden select-none">
              {/* Topo canvas background on hover */}
              {sealHovered && (
                <div className="absolute inset-0 opacity-25 pointer-events-none">
                  <TopoCanvas />
                </div>
              )}

              <div className="relative z-10 p-4 flex flex-col h-full justify-between">
                {/* Top: logo + label */}
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm bg-[#C4281C] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[8px] font-heading font-bold leading-none">P</span>
                  </div>
                  <span className="text-[9px] font-heading font-medium text-white/50 uppercase tracking-widest">
                    PROWEB Certified
                  </span>
                </div>

                {/* Bottom: cert code + chips */}
                <div>
                  <p className="text-[8px] font-body text-white/20 mb-2 font-mono tracking-wide">
                    CERT-PRW-2026-X9K2
                  </p>
                  <div className="flex gap-1.5">
                    <span className="ios-ring-tag">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#111] text-[9px] text-white/35 font-body">
                        V.1.1.0
                      </span>
                    </span>
                    <span className="ios-ring-tag">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#111] text-[9px] text-white/35 font-body">
                        11/13/2026
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
