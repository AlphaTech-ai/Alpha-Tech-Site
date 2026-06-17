import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Chatbot from "@/components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alpha.Tech Soluções | Suporte de TI e Desenvolvimento Web em Guanambi, BA",
  description:
    "Empresa de TI em Guanambi especializada em suporte técnico, manutenção de computadores, redes empresariais, criação de sites, sistemas sob medida e automação. Atendimento presencial e remoto em toda a Bahia.",
  keywords: [
    "suporte de TI Guanambi",
    "manutenção de computadores Guanambi",
    "assistência técnica de informática Guanambi",
    "empresa de TI Guanambi",
    "criação de sites Guanambi",
    "redes empresariais Guanambi",
    "suporte técnico remoto Bahia",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Alpha.Tech Soluções | Suporte de TI e Desenvolvimento Web em Guanambi, BA",
    description:
      "Empresa de TI em Guanambi. Suporte técnico, manutenção de computadores, redes, sites e sistemas personalizados para sua empresa.",
    type: "website",
    locale: "pt_BR",
    siteName: "Alpha.Tech Soluções",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Alpha.Tech Soluções",
  url: "https://alphatech.vercel.app",
  logo: "https://alphatech.vercel.app/favicon.ico",
  description:
    "Suporte de TI, manutenção de computadores, redes empresariais, criação de sites e sistemas sob medida em Guanambi, BA.",
  email: "alphatechsolucoesbr@gmail.com",
  foundingDate: "2026",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Guanambi",
    addressRegion: "BA",
    addressCountry: "BR",
  },
  areaServed: ["Guanambi", "Candiba", "Caetité", "Palmas de Monte Alto", "Bahia"],
  priceRange: "$$",
  openingHours: "Mo-Fr 08:00-18:00",
  sameAs: ["https://instagram.com/alphatechai"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-dark font-sans antialiased">
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
