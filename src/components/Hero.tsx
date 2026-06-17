import GradientButton from "./GradientButton";

interface Props {
  onOpenContact?: () => void;
}

export default function Hero({ onOpenContact }: Props) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-20"
    >
      <div className="absolute top-1/3 -left-48 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[140px]" />
      <div className="absolute bottom-1/4 -right-48 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Suporte de TI e{" "}
            <span className="text-primary">sites profissionais</span>{" "}
            para sua empresa em Guanambi
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Manutenção de computadores, redes empresariais, criação de sites,
            sistemas sob medida e automação. Atendimento presencial em Guanambi
            e remoto para toda a Bahia.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <GradientButton
              onClick={onOpenContact}
              size="large"
            >
              Solicitar orçamento
            </GradientButton>
            <GradientButton href="#servicos" variant="outline" size="large">
              Ver serviços
            </GradientButton>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-2xl rounded-xl border border-border bg-card/50 p-6 text-center">
          <p className="text-sm leading-relaxed text-muted">
            A Alpha.Tech existe porque acreditamos que tecnologia boa não precisa
            ser complicada. Se você é dono de negócio em Guanambi e região, quer
            alguém que resolva seus problemas de TI sem enrolação e com preço
            justo. Isso é o que a gente faz.
          </p>
        </div>
      </div>
    </section>
  );
}
