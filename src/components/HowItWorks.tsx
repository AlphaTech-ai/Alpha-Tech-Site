import AnimatedSection from "./AnimatedSection";
import SectionBadge from "./SectionBadge";

const STEPS = [
  {
    title: "Você conta seu problema",
    desc: "A gente ouve sem pressa, entende seu negócio e descobre o que realmente precisa ser resolvido.",
  },
  {
    title: "A gente desenha a solução",
    desc: "Com tudo claro, propomos a melhor saída com escopo definido, prazo realista e preço justo.",
  },
  {
    title: "Mão na massa com transparência",
    desc: "Desenvolvemos com entregas contínuas e você acompanha cada etapa sem surpresas.",
  },
  {
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
            Simples e transparente. A gente transforma sua ideia em solução
            digital.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <AnimatedSection key={step.title}>
              <div className="group relative text-center">
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
