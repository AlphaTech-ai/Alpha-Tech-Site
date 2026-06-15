import GradientButton from "./GradientButton";

interface Props {
  onOpenContact?: () => void;
}

export default function CTA({ onOpenContact }: Props) {
  return (
    <section id="contato" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Vamos construir algo{" "}
          <span className="gradient-text">juntos</span>?
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
          Manda uma mensagem contando um pouco do seu negócio e a gente
          responde com uma proposta clara, sem enrolação.
        </p>

        <div className="mt-10">
          <GradientButton
            onClick={onOpenContact}
            size="large"
            className="px-10 py-5 text-lg"
          >
            <span className="flex items-center gap-3">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 7L2 7" />
              </svg>
              Enviar mensagem
            </span>
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
