"use client";

import { useState } from "react";
import GradientButton from "./GradientButton";

const NAV_LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

interface Props {
  onOpenContact?: () => void;
}

export default function Header({ onOpenContact }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-xl border-b border-white/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <a href="#hero" className="text-2xl font-bold tracking-tight">
          <span className="text-white">Alpha.</span>
          <span className="gradient-text">Tech</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <GradientButton onClick={onOpenContact} size="default">
            Fale conosco
          </GradientButton>
        </div>

        <button
          className="relative z-50 flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-6 rounded bg-white transition-all duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded bg-white transition-all duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-dark/98 backdrop-blur-xl transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleNavClick}
            className="text-2xl font-medium text-muted transition-colors hover:text-white"
          >
            {link.label}
          </a>
        ))}
        <GradientButton
          onClick={() => { onOpenContact?.(); setMenuOpen(false); }}
          size="large"
          className="mt-4"
        >
          Fale conosco
        </GradientButton>
      </div>
    </header>
  );
}
