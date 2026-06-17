import AnimatedSection from "./AnimatedSection";
import SectionBadge from "./SectionBadge";

const INSIGHTS = [
  {
    problem: "Seu WhatsApp não para e você perde cliente porque demora pra responder.",
    solution: "Um chatbot com IA que atende 24 horas por dia, qualifica leads e passa o contato quente pra você.",
  },
  {
    problem: "Seu negócio não aparece no Google e parece amador perto dos concorrentes.",
    solution: "Um site profissional, rápido e otimizado pra vender, com design que passa credibilidade.",
  },
  {
    problem: "Você passa horas fazendo tarefas repetitivas que um sistema poderia fazer em segundos.",
    solution: "Automações inteligentes que eliminam trabalho manual e liberam seu tempo pro que importa.",
  },
  {
    problem: "As informações do seu negócio estão espalhadas em planilhas, cadernos e na sua cabeça.",
    solution: "Um sistema personalizado que centraliza tudo e organiza sua operação de ponta a ponta.",
  },
  {
    problem: "Você sabe que precisa de tecnologia mas não sabe por onde começar ou tem medo do custo.",
    solution: "A gente te escuta, entende seu momento e propõe uma solução que cabe no seu bolso.",
  },
];

export default function HowWeHelp() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <AnimatedSection className="text-center">
          <SectionBadge text="Como podemos ajudar" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Você se reconhece em{" "}
            <span className="gradient-text">alguma situação</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            A gente ouve muito esses relatos. Se um deles parece familiar,
            podemos te ajudar.
          </p>
        </AnimatedSection>

        <div className="mt-14 space-y-6">
          {INSIGHTS.map((item, index) => (
            <AnimatedSection key={index}>
              <div className="group rounded-2xl border border-white/5 bg-card p-6 transition-all duration-300 hover:border-primary/20 sm:p-8">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-10">
                  <div>
                    <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-red-400">
                      O problema
                    </span>
                    <p className="text-sm leading-relaxed text-muted sm:text-base">
                      {item.problem}
                    </p>
                  </div>
                  <div>
                    <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-secondary">
                      Como resolvemos
                    </span>
                    <p className="text-sm leading-relaxed text-muted sm:text-base">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
