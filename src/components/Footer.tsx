export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div>
            <a href="#hero" className="text-xl font-bold tracking-tight">
              <span className="text-white">Alpha.</span>
              <span className="text-primary">Tech</span>
            </a>
            <p className="mt-2 max-w-xs text-sm text-muted">
              Suporte de TI e soluções digitais para empresas em Guanambi e Bahia.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-muted">
            <span className="font-semibold text-muted-light">Links</span>
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

          <div className="flex flex-col gap-2 text-sm text-muted">
            <span className="font-semibold text-muted-light">Contato</span>
            <span>Guanambi, Bahia</span>
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

          <div className="flex flex-col gap-2 text-sm text-muted">
            <span className="font-semibold text-muted-light">Horário</span>
            <span>Seg a Sex, 08h - 18h</span>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-8 text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Alpha.Tech Soluções. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
