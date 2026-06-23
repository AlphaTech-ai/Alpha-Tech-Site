"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionBadge from "./SectionBadge";

const SERVICES = [
  {
    title: "Criação de Sites",
    desc: "Sites que vendem e passam credibilidade desde o primeiro clique. Feitos pra converter visitante em cliente.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    examples: [
      {
        icon: (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
            <line x1="6" y1="10" x2="18" y2="10" />
          </svg>
        ),
        title: "Landing Page",
        desc: "Landing page institucional com formulário de contato integrado",
      },
      {
        icon: (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        ),
        title: "Site Comercial",
        desc: "Catálogo de produtos e serviços online",
      },
      {
        icon: (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="3" />
            <line x1="12" y1="2" x2="12" y2="6" />
            <line x1="12" y1="18" x2="12" y2="22" />
            <line x1="2" y1="12" x2="6" y2="12" />
            <line x1="18" y1="12" x2="22" y2="12" />
          </svg>
        ),
        title: "Página de Captura",
        desc: "Landing page otimizada para conversão de visitantes",
      },
    ],
  },
  {
    title: "Automações",
    desc: "Chega de perder horas com tarefas manuais. A gente automatiza processos repetitivos pro seu negócio funcionar sozinho.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    examples: [
      {
        icon: (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        ),
        title: "Coleta de Leads",
        desc: "Robô que extrai contatos do Google Maps e redes sociais automaticamente",
      },
      {
        icon: (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        ),
        title: "Disparo WhatsApp",
        desc: "Mensagens automáticas para leads e clientes via WhatsApp",
      },
      {
        icon: (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        ),
        title: "Gestão Financeira",
        desc: "Cobranças e planilhas financeiras geradas automaticamente",
      },
    ],
  },
  {
    title: "Inteligência Artificial",
    desc: "Chatbots que vendem, análise de dados que orientam decisões e atendimento que funciona 24 horas por dia.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 2-2 3-2 5h-4c0-2-2-3-2-5a4 4 0 0 1 4-4z" />
        <path d="M8 15h8" />
        <path d="M9 18h6" />
        <path d="M10 21h4" />
      </svg>
    ),
    examples: [
      {
        icon: (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        ),
        title: "Chatbot 24h",
        desc: "Atendimento inteligente que qualifica leads e tira dúvidas automaticamente",
      },
      {
        icon: (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          </svg>
        ),
        title: "Análise de Documentos",
        desc: "Sistema que extrai informações de documentos automaticamente",
      },
      {
        icon: (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <polyline points="17 11 19 13 23 9" />
          </svg>
        ),
        title: "Assistente Inteligente",
        desc: "Sugere respostas personalizadas com base no histórico do cliente",
      },
    ],
  },
  {
    title: "Sistemas Personalizados",
    desc: "Sistemas web feitos sob medida pro seu negócio. Gestão, agendamento, vendas, controle financeiro e o que mais precisar.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
    examples: [
      {
        icon: (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        ),
        title: "Painel de Leads",
        desc: "Gestão completa com status, histórico e funil de vendas",
      },
      {
        icon: (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <path d="M8 14h.01" />
            <path d="M12 14h.01" />
            <path d="M16 14h.01" />
            <path d="M8 18h.01" />
            <path d="M12 18h.01" />
            <path d="M16 18h.01" />
          </svg>
        ),
        title: "Agendamento Automático",
        desc: "Sistema de agendamento com confirmação automática via WhatsApp",
      },
      {
        icon: (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="20" x2="12" y2="10" />
            <line x1="18" y1="20" x2="18" y2="4" />
            <line x1="6" y1="20" x2="6" y2="16" />
          </svg>
        ),
        title: "Dashboard Financeiro",
        desc: "Controle de entradas, saídas e relatórios em tempo real",
      },
    ],
  },
  {
    title: "Chatbots e Atendimento Inteligente",
    desc: "Um assistente virtual que atende seus clientes no WhatsApp e no site 24 horas por dia. Qualifica leads e vende por você.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    examples: [
      {
        icon: (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
        ),
        title: "WhatsApp com IA",
        desc: "Atendimento automático inteligente direto no WhatsApp",
      },
      {
        icon: (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <polyline points="17 11 19 13 23 9" />
          </svg>
        ),
        title: "Qualificação de Leads",
        desc: "Filtro inteligente antes de passar o lead para o time comercial",
      },
      {
        icon: (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ),
        title: "Fora do Horário",
        desc: "Respostas automáticas quando a equipe não está disponível",
      },
    ],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<null | typeof SERVICES[0]>(null);

  return (
    <section id="servicos" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <AnimatedSection className="text-center">
          <SectionBadge text="Nossos serviços" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Tudo que seu negócio precisa pra{" "}
            <span className="gradient-text">crescer online</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            De um site profissional a um sistema completo com IA, a gente
            entrega solução que funciona de verdade.
          </p>
        </AnimatedSection>

        <div className="mt-14 flex flex-wrap justify-center gap-5">
          {SERVICES.map((service) => (
            <div key={service.title} className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.833rem)]">
              <AnimatedSection>
                <div
                  className="group gradient-border rounded-2xl bg-card p-7 transition-all duration-300 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
                  onClick={() => setSelectedService(service)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedService(service);
                    }
                  }}
                >
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    Ver exemplos
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-dark/90 backdrop-blur-xl p-4 transition-all duration-300 ${
          selectedService ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelectedService(null);
        }}
      >
        <div
          className={`relative w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-2xl transition-all duration-300 ${
            selectedService ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          {selectedService && (
            <>
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-muted hover:text-white transition-colors"
              aria-label="Fechar"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 text-primary">
              {selectedService.icon}
            </div>
            <h3 className="text-xl font-bold">
              <span className="gradient-text">{selectedService.title}</span>
            </h3>
            <p className="mt-1 text-sm text-muted">{selectedService.desc}</p>

            <div className="mt-6 flex flex-col gap-3">
              {selectedService.examples.map((example, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 rounded-xl border border-border bg-dark/50 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-card"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-secondary/10 text-primary">
                    {example.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white">{example.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted transition-colors group-hover:text-white/80">
                      {example.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
