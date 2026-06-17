"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionBadge from "./SectionBadge";

const FAQ_ITEMS = [
  {
    question: "Quanto custa um site profissional?",
    answer:
      "Depende do tipo de site que sua empresa precisa. Um site institucional simples começa na faixa dos R$ 1.500. Sites mais completos, com sistema de gestão ou e-commerce, têm valor maior. Fazemos uma conversa gratuita para entender e só depois passamos o orçamento.",
  },
  {
    question: "Vocês consertam computadores em domicílio?",
    answer:
      "Sim. Fazemos manutenção em domicílio em Guanambi e região. Também atendemos remoto para problemas de software. O diagnóstico inicial é gratuito.",
  },
  {
    question: "Quanto tempo leva para criar um site?",
    answer:
      "Um site institucional fica pronto em 5 a 10 dias úteis. Projetos mais complexos, como sistemas ou e-commerce, levam de 15 a 30 dias, dependendo do escopo.",
  },
  {
    question: "Como funciona o suporte de TI para empresas?",
    answer:
      "Você entra em contato pelo WhatsApp ou e-mail e a gente resolve. Para empresas que precisam de acompanhamento contínuo, oferecemos planos de suporte mensal com monitoramento 24h e prioridade no atendimento.",
  },
  {
    question: "Vocês atendem fora de Guanambi?",
    answer:
      "Sim. Para suporte remoto, atendemos qualquer cidade da Bahia. Para serviços presenciais, priorizamos Guanambi e cidades vizinhas como Candiba, Caetité e Palmas de Monte Alto.",
  },
  {
    question: "Preciso ter contrato de fidelidade?",
    answer:
      "Não. Você contrata o serviço avulso ou o plano mensal, sem fidelidade. Se não ficar satisfeito, pode cancelar quando quiser.",
  },
  {
    question: "Vocês fazem sistema personalizado mesmo?",
    answer:
      "Sim. Já desenvolvemos sistemas de agendamento, controle financeiro, gestão de clientes e integrações. Se sua empresa tem uma necessidade específica que nenhum sistema pronto resolve, a gente constrói do zero.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="relative py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <AnimatedSection className="text-center">
          <SectionBadge text="FAQ" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Perguntas frequentes
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Dúvidas comuns que recebemos por aqui.
          </p>
        </AnimatedSection>

        <div className="mx-auto mt-12 max-w-2xl space-y-3">
          {FAQ_ITEMS.map((item, index) => (
            <AnimatedSection key={index}>
              <div className="rounded-xl border border-border bg-card transition-all duration-200 hover:border-primary/20">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left sm:px-6"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="pr-4 text-sm font-medium text-white">
                    {item.question}
                  </h3>
                  <svg
                    className={`h-4 w-4 flex-shrink-0 text-muted transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="px-5 pb-4 text-sm leading-relaxed text-muted sm:px-6">
                    {item.answer}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
