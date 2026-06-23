"use client";

import { useState, useEffect, useCallback } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionBadge from "./SectionBadge";

const SLIDES = [
  {
    title: "Sites que vendem de verdade",
    desc: "Um site comum só mostra informação. O nosso é construído pra converter visitante em cliente. Cada botão, texto e imagem é pensado pra vender 24 horas por dia.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Automação que liberta seu tempo",
    desc: "Enquanto você dorme, a Alpha.Tech pode estar processando pedidos, enviando propostas e organizando planilhas. Automatizamos tarefas repetitivas pra você focar no que importa.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "IA que entende do seu negócio",
    desc: "Não é IA genérica. Criamos assistentes treinados com as informações da sua empresa. Seu chatbot conhece seus produtos, suas políticas e seu tom de voz. Atende como se fosse você, 24 horas por dia.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 2-2 3-2 5h-4c0-2-2-3-2-5a4 4 0 0 1 4-4z" />
        <path d="M8 15h8" />
        <path d="M9 18h6" />
        <path d="M10 21h4" />
      </svg>
    ),
  },
  {
    title: "Sistemas feitos sob medida",
    desc: "Você não precisa se adaptar a um sistema genérico. A gente constrói do zero a solução ideal pro seu negócio. Gestão, agendamento, vendas, financeiro. Só o que você usa.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Atendimento sem burocracia",
    desc: "Você não fala com robô nem com atendente que não entende do assunto. Quem responde sua mensagem é quem vai desenvolver seu projeto. Direto, rápido e sem enrolação.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Suporte que não te abandona",
    desc: "Entregamos o projeto e não sumimos. Você tem suporte, atualizações e melhorias sempre que precisar. Não somos agência que faz e some.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

export default function Carrossel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const goTo = (index: number) => {
    setCurrent(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  return (
    <section id="porque" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/[0.02] via-transparent to-primary/[0.02]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <AnimatedSection className="text-center">
          <SectionBadge text="Por que contratar a Alpha.Tech" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Motivos pra você escolher a{" "}
            <span className="text-white">Alpha.</span><span className="gradient-text">Tech</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Cada projeto é pensado pra resolver um problema real do seu negócio.
          </p>
        </AnimatedSection>

        <div className="mt-14">
          <div className="relative mx-auto max-w-3xl">
            <div
              className="gradient-border overflow-hidden rounded-2xl bg-card"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div className="relative min-h-[360px]">
                {SLIDES.map((slide, index) => (
                  <div
                    key={slide.title}
                    className={`absolute inset-0 p-8 sm:p-10 lg:p-12 transition-all duration-500 ease-out ${
                      index === current
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-8 pointer-events-none"
                    }`}
                  >
                    <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 text-primary">
                        {slide.icon}
                      </div>
                      <h3 className="text-xl font-bold sm:text-2xl">
                        {slide.title}
                      </h3>
                      <p className="mt-4 leading-relaxed text-muted">
                        {slide.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-card transition-all duration-300 hover:border-primary/30 hover:bg-primary/10"
                aria-label="Anterior"
              >
                <svg className="h-5 w-5 text-muted transition-colors group-hover:text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <div className="flex items-center gap-2">
                {SLIDES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === current
                        ? "w-8 bg-gradient-to-r from-primary to-secondary"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-card transition-all duration-300 hover:border-primary/30 hover:bg-primary/10"
                aria-label="Próximo"
              >
                <svg className="h-5 w-5 text-muted transition-colors group-hover:text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
