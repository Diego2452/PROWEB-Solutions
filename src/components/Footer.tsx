"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle, Flag } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { translations, t } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLang();

  const footerLinks = [
    { label: t(translations.nav.projects, lang), href: "/projects" },
    { label: t(translations.nav.services, lang), href: "/services" },
    { label: t(translations.nav.about, lang), href: "/about" },
    { label: t(translations.nav.contact, lang), href: "/contact" },
  ];

  return (
    <footer className="border-t border-white/5 bg-black py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Columna izquierda — Navegación, texto a la izquierda */}
          <div className="flex flex-col items-start">
            <p className="text-xs font-heading font-medium text-white/25 uppercase tracking-widest mb-4">
              {t(translations.footer.nav, lang)}
            </p>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna central — Logo y tagline centrados */}
          <div className="flex flex-col items-center text-center gap-4">
            <Image
              src="/LogoWhite.png"
              alt="PROWEB Solutions"
              width={140}
              height={42}
              className="object-contain h-9 w-auto"
            />
            <p className="text-sm text-white/35 font-body leading-relaxed max-w-xs">
              {t(translations.footer.tagline, lang)}
            </p>
          </div>

          {/* Columna derecha — Contacto, alineado a la derecha */}
          <div className="flex flex-col items-end">
            <p className="text-xs font-heading font-medium text-white/25 uppercase tracking-widest mb-4">
              {t(translations.footer.contact, lang)}
            </p>
            <ul className="flex flex-col gap-3 items-end">
              <li>
                <a href="mailto:ventas.prowebsolutionscr@gmail.com" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-[#C4281C] transition-colors duration-200">
                  ventas.prowebsolutionscr@gmail.com
                  <Mail size={14} className="shrink-0" />
                </a>
              </li>
              <li>
                <a href="https://wa.me/50685233668" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-[#C4281C] transition-colors duration-200">
                  (+506) 8523-3668
                  <MessageCircle size={14} className="shrink-0" />
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/TKG8Arm7ojwpe3oA9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-[#C4281C] transition-colors duration-200">
                  San Pedro, San José, Costa Rica
                  <Flag size={14} className="shrink-0" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20 font-body">
            © 2025 PROWEB Solutions. {t(translations.footer.rights, lang)}
          </p>
          <p className="text-xs text-white/15 font-body">Last updated: 03/17/2026 | V.1.0.0</p>
        </div>
      </div>
    </footer>
  );
}