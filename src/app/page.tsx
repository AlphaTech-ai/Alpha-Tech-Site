"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowWeHelp from "@/components/HowWeHelp";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Differentiators from "@/components/Differentiators";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <>
      <Header onOpenContact={() => setContactModalOpen(true)} />
      <main>
        <Hero />
        <Services />
        <HowWeHelp />
        <HowItWorks />
        <About />
        <Differentiators />
        <CTA onOpenContact={() => setContactModalOpen(true)} />
      </main>
      <Footer />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </>
  );
}
