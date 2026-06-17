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
      <div className="noise-overlay absolute inset-0" />

      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 h-80 w-80 rounded-full bg-secondary/10 blur-[120px] animate-float-delayed" />
      <div className="absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/5 blur-[100px] animate-float-slow" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[15%] left-[10%] h-4 w-4 rounded-full bg-primary/40 animate-glow" />
        <div className="absolute top-[35%] right-[15%] h-3 w-3 rounded-full bg-secondary/40 animate-glow" />
        <div className="absolute bottom-[25%] left-[20%] h-2 w-2 rounded-full bg-primary/30 animate-glow" />
        <div className="absolute bottom-[40%] right-[25%] h-5 w-5 rounded-full bg-secondary/30 animate-glow" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block mb-6 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            Tecnologia que resolve
          </span>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Seu negócio merece uma{" "}
            <span className="gradient-text">presença digital</span>{" "}
            que vende, atende e organiza tudo sozinho
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            A Alpha.Tech cria sites, sistemas e automações que fazem seu
            negócio crescer. Sem mensalidades abusivas, sem burocracia.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <GradientButton
              onClick={onOpenContact}
              size="large"
            >
              Quero um orçamento
            </GradientButton>
            <GradientButton href="#servicos" variant="outline" size="large">
              Ver o que fazemos
            </GradientButton>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-2xl text-center">
          <p className="text-sm text-muted leading-relaxed">
            Você não precisa entender de tecnologia. A gente entende do seu
            negócio, desenha a solução e entrega tudo funcionando. Sem
            gerente de relacionamento, sem conversa fiada.
          </p>
        </div>
      </div>
    </section>
  );
}
