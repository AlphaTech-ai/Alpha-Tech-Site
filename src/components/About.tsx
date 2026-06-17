import AnimatedSection from "./AnimatedSection";
import SectionBadge from "./SectionBadge";

export default function About() {
  return (
    <section id="sobre" className="relative py-20 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <SectionBadge text="Sobre" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Uma empresa de TI que fala a sua língua
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              A Alpha.Tech nasceu de uma insatisfação: a maioria das empresas de TI 
              trata pequeno e médio empresário como se fosse grande corporação. 
              Prometem suporte que nunca vem, usam jargão técnico pra confundir 
              e cobram caro por serviços que não entregam.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              A gente faz diferente. Atendemos empresas em Guanambi e região com 
              suporte técnico de verdade, projetos web bem feitos e preço que cabe 
              no orçamento. Aqui você manda mensagem e quem responde é quem resolve. 
              Sem setores, sem burocracia, sem desaparecer.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6">
              <div>
                <span className="block text-2xl font-bold text-primary">+20</span>
                <span className="text-xs text-muted">Projetos entregues</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-primary">+15</span>
                <span className="text-xs text-muted">Clientes ativos</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-primary">&lt;24h</span>
                <span className="text-xs text-muted">Tempo de resposta</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Sem contrato de fidelidade</h3>
                    <p className="text-sm text-muted">Você contrata só o que precisa, quando precisa.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Orçamento sem compromisso</h3>
                    <p className="text-sm text-muted">Conversamos, entendemos sua necessidade e só depois apresentamos o valor.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Atendimento direto com quem desenvolve</h3>
                    <p className="text-sm text-muted">Você não fala com atendente. Fala com quem faz.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Suporte mesmo depois da entrega</h3>
                    <p className="text-sm text-muted">Projeto pronto não significa fim do relacionamento. Seguimos juntos.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
