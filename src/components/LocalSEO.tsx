import AnimatedSection from "./AnimatedSection";
import SectionBadge from "./SectionBadge";

export default function LocalSEO() {
  return (
    <section id="atendimento" className="relative py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <AnimatedSection>
            <SectionBadge text="Onde atendemos" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Presencial em Guanambi, remoto para toda a Bahia
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              Nosso escritório fica em Guanambi, mas atendemos empresas em toda 
              a região. Para serviços de suporte e manutenção, vamos até você. 
              Para projetos digitais, o trabalho é remoto com entregas online.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Já atendemos clientes em Guanambi, Candiba, Caetité e Palmas de 
              Monte Alto. Se sua cidade é na Bahia, provavelmente conseguimos 
              ajudar. É só perguntar.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white">
                Regiões que atendemos
              </h3>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2">
                  <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-sm">Guanambi</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2">
                  <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-sm">Candiba</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2">
                  <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-sm">Caetité</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2">
                  <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-sm">Palmas de Monte Alto</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2">
                  <svg className="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
                    <path d="M6 6h12v12H6z" />
                  </svg>
                  <span className="text-sm">Remoto (toda BA)</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
