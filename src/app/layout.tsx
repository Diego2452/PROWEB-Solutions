import type { Metadata } from "next";
import { Manrope, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
  adjustFontFallback: false,
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-nunito-sans",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "PROWEB Solutions | Desarrollo Web y Móvil",
  description:
    "Convertimos ideas en sitios web y aplicaciones móviles de alta calidad. Soluciones web y móviles a la medida.",
  keywords: [
    "desarrollo web",
    "aplicaciones móviles",
    "Costa Rica",
    "software",
    "PROWEB Solutions",
  ],
  authors: [{ name: "Diego Vargas Salas" }],
  openGraph: {
    title: "PROWEB Solutions",
    description: "Soluciones Web y Móviles a la Medida",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${manrope.variable} ${nunitoSans.variable} font-body bg-dark-900 text-white antialiased`}
      >
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}