"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Mail, MessageCircle, Github, Instagram, ArrowUpRight, BadgeCheck } from "lucide-react";
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

  /* Social icons — always-on brand colors */
  const socials = [
    {
      href: "https://github.com/diegovargas-dev",
      icon: Github,
      label: "GitHub",
      className: "bg-[#2d2d2d] text-white border-[#555]",
    },
    {
      href: "https://instagram.com/proweb.solutions",
      icon: Instagram,
      label: "Instagram",
      className: "bg-instagram text-white border-transparent",
    },
    {
      href: "mailto:diegovargas.dev@gmail.com",
      icon: Mail,
      label: "Email",
      className: "bg-[#C4281C] text-white border-transparent",
    },
    {
      href: "https://wa.me/50684058065",
      icon: MessageCircle,
      label: "WhatsApp",
      className: "bg-[#25D366] text-white border-transparent",
    },
  ];

  const today = new Date().toLocaleDateString("es-CR", { day: "2-digit", month: "short", year: "numeric" });

  return (
    <footer className="relative border-t border-white/5 bg-black/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-3">

        {/* ── 3-column main grid: brand · logo · nav+contact ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Col 1: Brand + description + social + copyright */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="inline-flex items-center gap-3 w-fit group">
              <div className="w-7 h-7 rounded-lg bg-[#C4281C] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-heading font-bold">P</span>
              </div>
              <span className="text-sm font-heading font-medium text-white group-hover:text-[#C4281C] transition-colors duration-200">
                PROWEB Solutions
              </span>
            </Link>

            <p className="text-sm text-white/30 font-body leading-relaxed max-w-[220px]">
              {lang === "en"
                ? "Building digital experiences that drive real results."
                : "Construyendo experiencias digitales que generan resultados reales."}
            </p>

            <p className="text-xs text-white/20 font-body">
              © {new Date().getFullYear()} PROWEB Solutions.{" "}
              {lang === "en" ? "All rights reserved." : "Todos los derechos reservados."}
            </p>

            {/* Social icons — always-on brand colors */}
            <div className="flex gap-2 flex-wrap mt-auto">
              {socials.map(({ href, icon: Icon, label, className }) => (
                <span key={label} className="ios-ring">
                  <a
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`flex items-center justify-center w-9 h-9 rounded-full border ${className} transition-all duration-200`}
                  >
                    <Icon size={15} />
                  </a>
                </span>
              ))}
            </div>
          </div>

          {/* Col 2 (CENTER): LogoWhite.png + tagline */}
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="relative h-14 w-52">
              <Image
                src="/LogoWhite.png"
                alt="PROWEB Solutions"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-white/25 font-body tracking-widest uppercase text-center">
              {lang === "en" ? "Design · Development · Results" : "Diseño · Desarrollo · Resultados"}
            </p>
          </div>

          {/* Col 3: Navegación + Contacto */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-10">

            {/* Navegación */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-heading font-medium text-white/25 uppercase tracking-widest mb-1">
                {lang === "en" ? "Navigation" : "Navegación"}
              </p>
              {navLinks.map(({ href, label }) => (
                <FooterLink key={href} href={href}>
                  {label}
                </FooterLink>
              ))}
            </div>

            {/* Contacto */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-heading font-medium text-white/25 uppercase tracking-widest mb-1">
                {lang === "en" ? "Contact" : "Contacto"}
              </p>
              <a
                href="mailto:diegovargas.dev@gmail.com"
                className="flex items-center gap-2 text-sm text-white/40 hover:text-[#C4281C] transition-colors duration-200 w-fit"
              >
                <Mail size={13} className="text-[#C4281C] flex-shrink-0" />
                diegovargas.dev@gmail.com
              </a>
              <a
                href="https://wa.me/50684058065"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/40 hover:text-[#25D366] transition-colors duration-200 w-fit"
              >
                <MessageCircle size={13} className="text-[#25D366] flex-shrink-0" />
                WhatsApp
              </a>
            </div>

          </div>
        </div>

        {/* ── Mayresa-style ProWeb certification bar ── */}
        <div
          className="relative isolate overflow-hidden rounded-2xl cursor-default"
          onMouseEnter={() => setSealHovered(true)}
          onMouseLeave={() => setSealHovered(false)}
        >
          {/* Base dark background */}
          <div className="absolute inset-0 bg-[#0a0a0a] rounded-2xl" />

          {/* ios-ring border on the whole card */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
            padding: "1px",
            background: "conic-gradient(from var(--light-angle, 225deg), rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.00) 3%, rgba(255,255,255,0.00) 47%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.00) 53%, rgba(255,255,255,0.00) 97%, rgba(255,255,255,0.15) 100%)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }} />

          {/* Topo canvas on hover */}
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-700 pointer-events-none"
            style={{ opacity: sealHovered ? 1 : 0 }}
          >
            <TopoCanvas />
          </div>

          {/* Radial gradient overlay */}
          <div
            className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
            style={{
              opacity: sealHovered ? 1 : 0,
              background: "radial-gradient(40% 140% at 50% 50%, rgba(5,5,5,0.9), rgba(5,5,5,0.5))",
            }}
          />

          <div className="relative z-10 grid items-center gap-5 px-5 py-6 text-center md:grid-cols-[1fr_auto_1fr] md:gap-8 md:px-8 md:text-left">

            {/* Left: verified icon + text */}
            <div className="flex flex-col items-center gap-3 md:flex-row md:justify-start">
              <span
                className="grid size-11 shrink-0 place-items-center rounded-full transition-colors duration-500"
                style={{
                  backgroundColor: sealHovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.06)",
                  color: sealHovered ? "#0a0a0a" : "rgba(255,255,255,0.7)",
                }}
              >
                <BadgeCheck size={22} />
              </span>
              <span className="max-w-sm">
                <span
                  className="block font-heading text-[0.68rem] font-extrabold uppercase tracking-[0.22em] transition-colors duration-500"
                  style={{ color: sealHovered ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.4)" }}
                >
                  {lang === "en" ? "ProWeb Quality Certificate" : "Certificado de calidad ProWeb"}{" "}
                  <span
                    className="font-bold tracking-[0.12em] transition-colors duration-500"
                    style={{ color: sealHovered ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.2)" }}
                  >
                    N.º PWS-PRW-100
                  </span>
                </span>
                <span
                  className="mt-0.5 block text-[0.6rem] leading-snug transition-colors duration-500"
                  style={{ color: sealHovered ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.18)" }}
                >
                  {lang === "en"
                    ? "Site built and maintained under ProWeb Solutions' own design, software quality, and attention-to-detail standards."
                    : "Sitio creado y mantenido bajo los propios estándares de diseño, calidad de software, perfeccionismo y atención al detalle de ProWeb Solutions."}
                </span>
              </span>
            </div>

            {/* Center: logo */}
            <div className="relative mx-auto h-14 w-44">
              <Image
                src="/LogoWhite.png"
                alt="PROWEB Solutions"
                fill
                className="object-contain transition-opacity duration-500"
                style={{ opacity: sealHovered ? 0.9 : 0.25 }}
              />
            </div>

            {/* Right: credit + version chips */}
            <div className="flex flex-col items-center gap-2 md:items-end md:text-right">
              <a
                href="https://prowebsolutionscr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs group/l"
                style={{ color: sealHovered ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.22)" }}
              >
                {lang === "en" ? "Designed and developed by" : "Diseño y desarrollo por"}{" "}
                <strong
                  className="font-heading font-bold transition-colors duration-500"
                  style={{ color: sealHovered ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.4)" }}
                >
                  ProWebSolutions
                </strong>
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-200 group-hover/l:-translate-y-0.5 group-hover/l:translate-x-0.5"
                />
              </a>
              <div className="flex flex-wrap justify-center gap-1 font-heading text-[0.52rem] font-bold uppercase tracking-[0.14em] md:justify-end">
                <div
                  className="flex gap-1.5 rounded px-2 py-0.5 transition-colors duration-500"
                  style={{ backgroundColor: sealHovered ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)" }}
                >
                  <span style={{ color: sealHovered ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.18)" }}>
                    {lang === "en" ? "Version" : "Versión"}
                  </span>
                  <span style={{ color: sealHovered ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.35)" }}>
                    V1.1.0
                  </span>
                </div>
                <div
                  className="flex gap-1.5 rounded px-2 py-0.5 transition-colors duration-500"
                  style={{ backgroundColor: sealHovered ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)" }}
                >
                  <span style={{ color: sealHovered ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.18)" }}>
                    {lang === "en" ? "Last updated" : "Última modificación"}
                  </span>
                  <span style={{ color: sealHovered ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.35)" }}>
                    {today}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
