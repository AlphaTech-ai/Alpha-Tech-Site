import AnimatedSection from "./AnimatedSection";
import SectionBadge from "./SectionBadge";

const STEPS = [
  {
    num: "01",
    title: "Você conta seu problema",
    desc: "A gente ouve sem pressa, entende seu negócio e descobre o que realmente precisa ser resolvido.",
  },
  {
    num: "02",
    title: "A gente desenha a solução",
    desc: "Com tudo claro, propomos a melhor saída com escopo definido, prazo realista e preço justo.",
  },
  {
    num: "03",
    title: "Mão na massa com transparência",
    desc: "Desenvolvemos com entregas contínuas e você acompanha cada etapa sem surpresas.",
  },
  {
    num: "04",
    title: "Entrega e suporte de verdade",
    desc: "Projeto no ar, tudo funcionando, e a gente continua por perto sempre que precisar.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <AnimatedSection className="text-center">
          <SectionBadge text="Como funciona" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Nosso <span className="gradient-text">processo</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Metodologia simples e transparente para transformar sua ideia em
            solução digital.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <AnimatedSection key={step.num}>
              <div className="group relative text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 text-2xl font-bold gradient-text transition-transform duration-300 group-hover:scale-110">
                  {step.num}
                </div>

                {index < STEPS.length - 1 && (
                  <div className="absolute top-10 left-[calc(50%+3rem)] hidden h-px w-[calc(100%-6rem)] bg-gradient-to-r from-primary/40 to-secondary/40 lg:block" />
                )}

                <h3 className="text-lg font-semibold">{step.title}</h3>
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
