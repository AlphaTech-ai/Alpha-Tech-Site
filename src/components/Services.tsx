import AnimatedSection from "./AnimatedSection";
import SectionBadge from "./SectionBadge";

const SERVICES = [
  {
    title: "Criação de Sites",
    desc: "Sites profissionais que vendem, convertem visitantes em clientes e passam credibilidade da primeira vez que alguém acessa.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Automações",
    desc: "Chega de perder horas com tarefas manuais. Automatizamos processos repetitivos pro seu negócio funcionar sozinho.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Inteligência Artificial",
    desc: "IA aplicada ao seu negócio: chatbots que vendem, análise de dados que orientam decisões e atendimento que funciona 24 horas.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 2-2 3-2 5h-4c0-2-2-3-2-5a4 4 0 0 1 4-4z" />
        <path d="M8 15h8" />
        <path d="M9 18h6" />
        <path d="M10 21h4" />
      </svg>
    ),
  },
  {
    title: "Sistemas Personalizados",
    desc: "Sistemas web feitos sob medida pro seu negócio. Gestão, agendamento, vendas, controle financeiro e o que você precisar.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Chatbots e Atendimento Inteligente",
    desc: "Um assistente virtual que atende seus clientes no WhatsApp e no site 24 horas por dia, qualifica leads e ainda vende por você.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Identidade Digital",
    desc: "Sua marca do zero: identidade visual, presença digital e tudo que você precisa pra se destacar e ser levado a sério online.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
        <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
        <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
        <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
      </svg>
    ),
  },
];

export default function Services() {
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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <AnimatedSection key={service.title}>
              <div className="group gradient-border rounded-2xl bg-card p-7 transition-all duration-300 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
