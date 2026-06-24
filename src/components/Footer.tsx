import { ArrowUp } from "lucide-react";

const Footer = () => {
  const navigation = [
    { label: "Método", href: "#sobre" },
    { label: "Processo", href: "#processo" },
    { label: "Experiências", href: "#depoimentos" },
    { label: "Diagnóstico", href: "#contato" },
  ];

  return (
    <footer className="grain-overlay relative overflow-hidden bg-night text-white">
      <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-brand/18 blur-[110px]" />
      <div className="paper-dot absolute -bottom-20 left-[7%] h-56 w-56 rounded-full opacity-10" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-8 lg:px-10">

        <div className="notebook-footer-main grid gap-10 py-10 sm:py-12 lg:grid-cols-[1.25fr_.75fr] lg:items-start">
          <div>
            <a href="#" aria-label="Voltar ao início" className="inline-flex">
              <img
                src="/modern.png"
                alt="Logo ImSchool"
                width={320}
                height={104}
                className="h-auto w-16 object-contain sm:w-18"
              />
            </a>
            <p className="mt-5 max-w-sm text-sm font-medium leading-relaxed text-white/54">
              Inglês com clareza, prática e uma direção feita para o seu momento.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
              {navigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center text-sm font-bold text-white/68 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs font-medium text-white/38 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ImSchool. Todos os direitos reservados.</p>
          <a href="#" className="group inline-flex items-center gap-2 transition-colors hover:text-white">
            Voltar ao topo
            <ArrowUp className="h-3.5 w-3.5 text-highlight transition-transform group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
