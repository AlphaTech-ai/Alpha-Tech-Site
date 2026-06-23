import AnimatedSection from "./AnimatedSection";
import SectionBadge from "./SectionBadge";

export default function About() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <SectionBadge text="Sobre a Alpha.Tech" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Tecnologia que{" "}
              <span className="gradient-text">impulsiona</span> resultados
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              A <span className="font-semibold text-white">Alpha.Tech</span>{" "}
              cria sites, automações, sistemas e chatbots que funcionam de
              verdade. O atendimento é direto com quem desenvolve. Você
              manda uma mensagem e a gente responde no mesmo dia.
            </p>
          </AnimatedSection>

          <AnimatedSection className="relative">
            <div className="relative rounded-2xl border border-white/5 bg-card p-8">
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-gradient-to-tr from-secondary/10 to-primary/20 blur-2xl" />

              <div className="space-y-5">
                <p className="text-sm leading-relaxed text-muted">
                  Cada projeto é construído do zero pra atender exatamente
                  o que seu negócio precisa. Nada de template genérico ou
                  solução que não encaixa.
                </p>
                <p className="text-sm leading-relaxed text-muted">
                  O tempo de resposta é em horas, o desenvolvimento é ágil
                  e você acompanha tudo de perto. Sem surpresas no final.
                </p>
              </div>

              <div className="mt-6 border-t border-white/5 pt-6">
                <p className="text-center text-sm font-medium text-white">
                  Seu próximo projeto começa com uma mensagem.
                  A gente escuta, propõe e entrega sem burocracia.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
