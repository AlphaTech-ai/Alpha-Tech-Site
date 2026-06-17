export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div>
            <a href="#hero" className="text-2xl font-bold tracking-tight">
              <span className="text-white">Alpha.</span>
              <span className="gradient-text">Tech</span>
            </a>
            <p className="mt-2 max-w-xs text-sm text-muted">
              Tecnologia para negócios que querem evoluir.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-muted">
            <span className="font-semibold text-white">Links</span>
            <a href="#servicos" className="transition-colors hover:text-primary">
              Serviços
            </a>
            <a href="#como-funciona" className="transition-colors hover:text-primary">
              Como funciona
            </a>
            <a href="#sobre" className="transition-colors hover:text-primary">
              Sobre
            </a>
          </div>

          <div className="flex flex-col gap-3 text-sm text-muted">
            <span className="font-semibold text-white">Contato</span>
            <a
              href="https://instagram.com/alphatechai"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              Instagram
            </a>
            <a
              href="mailto:alphatechsolucoesbr@gmail.com"
              className="transition-colors hover:text-primary"
            >
              E-mail
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-8 text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Alpha.Tech. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
