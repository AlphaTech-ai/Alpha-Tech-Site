import ContactForm from "./ContactForm";

export default function CTA() {
  return (
    <section id="contato" className="relative py-24 lg:py-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Vamos conversar sobre o seu projeto?
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-muted">
          Manda uma mensagem contando um pouco do que você precisa. A gente 
          responde com uma proposta clara, sem enrolação e sem compromisso.
        </p>

        <div className="mx-auto mt-10 max-w-md text-left">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
