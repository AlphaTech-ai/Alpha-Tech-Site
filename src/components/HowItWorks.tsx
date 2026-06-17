import AnimatedSection from "./AnimatedSection";
import SectionBadge from "./SectionBadge";

const STEPS = [
  {
    num: "01",
    title: "Você conta o que precisa",
    desc: "Sem burocracia. Manda uma mensagem contando seu problema ou projeto.",
  },
  {
    num: "02",
    title: "A gente propõe a solução",
    desc: "Analisamos, desenhamos a melhor saída e te enviamos orçamento e prazo.",
  },
  {
    num: "03",
    title: "Execução com transparência",
    desc: "Você acompanha cada etapa. Nada de surpresas no meio do caminho.",
  },
  {
    num: "04",
    title: "Entrega e suporte",
    desc: "Tudo funcionando. E a gente continua por perto sempre que precisar.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-20 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.01] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <AnimatedSection className="text-center">
          <SectionBadge text="Como funciona" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Nosso jeito de trabalhar
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Direto, sem mistério. Do primeiro contato à entrega.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <AnimatedSection key={step.num}>
              <div className="relative rounded-xl border border-border bg-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                  {step.num}
                </div>

                {index < STEPS.length - 1 && (
                  <div className="absolute top-7 left-[calc(50%+3rem)] hidden h-px w-[calc(100%-6rem)] bg-border lg:block" />
                )}

                <h3 className="font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
