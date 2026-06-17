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
  title: "Alpha.Tech | Tecnologia, Automação e IA para seu negócio",
  description:
    "Criamos sites, sistemas e automações inteligentes para empresas que querem vender mais, atender melhor e economizar tempo.",
  keywords: [
    "criação de sites",
    "automação",
    "inteligência artificial",
    "chatbot",
    "sistemas personalizados",
    "marketing digital",
    "pequenos negócios",
    "Alpha.Tech",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Alpha.Tech | Tecnologia, Automação e IA",
    description:
      "Criamos sites, sistemas e automações inteligentes para empresas que querem vender mais, atender melhor e economizar tempo.",
    type: "website",
    locale: "pt_BR",
    siteName: "Alpha.Tech",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Alpha.Tech",
  url: "https://alphatech.vercel.app",
  logo: "https://alphatech.vercel.app/favicon.ico",
  description:
    "Criamos sites, sistemas e automações inteligentes para empresas que querem vender mais, atender melhor e economizar tempo.",
  email: "alphatechsolucoesbr@gmail.com",
  foundingDate: "2026",
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
