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
              Se você dirige um pequeno ou médio negócio, sabe como é frustrante
              pagar caro por um site ou sistema que não entrega resultado.
              Ou pior: depender de agências que respondem uma vez por semana.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              A <span className="font-semibold text-white">Alpha.Tech</span>{" "}
              existe pra mudar isso. Criamos sites, automações, sistemas e
              chatbots que realmente funcionam, com atendimento direto de
              quem desenvolve. Você manda uma mensagem e a gente responde no
              mesmo dia. Simples assim.
            </p>
          </AnimatedSection>

          <AnimatedSection className="relative">
            <div className="relative rounded-2xl border border-white/5 bg-card p-8">
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-gradient-to-tr from-secondary/10 to-primary/20 blur-2xl" />

              <div className="space-y-5">
                <p className="text-sm leading-relaxed text-muted">
                  Cada projeto que entregamos é construído do zero para atender
                  exatamente o que seu negócio precisa. Nada de templates
                  genéricos ou soluções que não encaixam.
                </p>
                <p className="text-sm leading-relaxed text-muted">
                  Nosso tempo de resposta é em horas, o desenvolvimento é ágil
                  e você acompanha tudo de perto. Sem surpresas no final.
                </p>
              </div>

              <div className="mt-6 border-t border-white/5 pt-6">
                <p className="text-center text-sm font-medium text-white">
                  &ldquo;Falta um site profissional? Quer automatizar o
                  atendimento? Precisa de um sistema sob medida? Chama a
                  gente que a gente resolve.&rdquo;
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
