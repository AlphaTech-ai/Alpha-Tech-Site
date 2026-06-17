"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowWeHelp from "@/components/HowWeHelp";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import LocalSEO from "@/components/LocalSEO";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const scrollToContact = () => {
  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
};

export default function Home() {
  return (
    <>
      <Header onOpenContact={scrollToContact} />
      <main>
        <Hero onOpenContact={scrollToContact} />
        <Services />
        <HowWeHelp />
        <HowItWorks />
        <About />
        <LocalSEO />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
