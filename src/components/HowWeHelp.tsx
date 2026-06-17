import AnimatedSection from "./AnimatedSection";
import SectionBadge from "./SectionBadge";

const INSIGHTS = [
  {
    problem: "Seu computador trava, está lento ou com vírus.",
    solution: "Fazemos manutenção, formatação, upgrade e limpeza. Diagnóstico gratuito antes de qualquer serviço.",
  },
  {
    problem: "Sua empresa sofre com internet instável ou rede mal feita.",
    solution: "Projetamos e instalamos redes empresariais com wi-fi de verdade. Monitoramento 24h incluso.",
  },
  {
    problem: "Você perde cliente porque demora para responder no WhatsApp.",
    solution: "Criamos um chatbot inteligente que atende 24h, qualifica leads e entrega o contato quente na sua mão.",
  },
  {
    problem: "Seu negócio não aparece no Google ou passa vergonha online.",
    solution: "Um site profissional, rápido e feito pra vender. Do design à entrega em poucos dias.",
  },
  {
    problem: "Você gasta horas com tarefas repetitivas que um sistema faria em segundos.",
    solution: "Automatizamos processos: emissão de propostas, relatórios, disparos e integrações que sua empresa usa.",
  },
  {
    problem: "Você não sabe se seus dados estão seguros ou se está pagando caro demais em TI.",
    solution: "Consultoria gratuita. A gente analisa sua situação e propõe o que realmente faz sentido pro seu bolso.",
  },
];

export default function HowWeHelp() {
  return (
    <section className="relative py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <AnimatedSection className="text-center">
          <SectionBadge text="Problemas comuns" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Situações que a gente <span className="text-primary">resolve</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Se algo aqui parece familiar, é porque atendemos isso todo dia.
          </p>
        </AnimatedSection>

        <div className="mt-12 space-y-4">
          {INSIGHTS.map((item, index) => (
            <AnimatedSection key={index}>
              <div className="rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-primary/20 sm:p-6">
                <div className="grid gap-3 sm:grid-cols-5">
                  <div className="sm:col-span-2">
                    <p className="text-sm leading-relaxed text-muted">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-red-400 mb-1">Problema</span>
                      {item.problem}
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center">
                    <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-sm leading-relaxed text-muted">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1">Solução</span>
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
