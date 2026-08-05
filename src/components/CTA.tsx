"use client";

import ContactForm from "./ContactForm";

const openChatbot = () => {
  window.dispatchEvent(new Event("alpha-tech:open-chat"));
};

export default function CTA() {
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

        <button
          onClick={openChatbot}
          className="mt-4 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Em caso de dúvida, fale com o assistente
        </button>

        <div className="mx-auto mt-10 max-w-lg text-left">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
