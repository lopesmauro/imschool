const Footer = () => {
  const columns = [
    {
      title: "Produto",
      links: [
        { label: "Método", href: "#sobre" },
        { label: "Processo", href: "#processo" },
        { label: "Cadastro", href: "#consultoria-form" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacidade", href: "#" },
        { label: "Termos de uso", href: "#" },
      ],
    },
    {
      title: "Sobre",
      links: [
        { label: "Depoimentos", href: "#depoimentos" },
        { label: "Contato", href: "#contato" },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.25fr_1fr] lg:px-12 lg:py-20">
        <div>
          <a href="#" className="inline-flex items-center">
            <img
              src="/imlogo.png"
              alt="Logo ImSchool"
              width={320}
              height={104}
              className="h-auto w-[210px] object-contain sm:w-[250px]"
            />
          </a>

          <p className="mt-6 max-w-md text-lg font-normal leading-relaxed text-white/72">
            © 2025. Consultoria de inglês para quem quer clareza antes de escolher o próximo passo.
          </p>
        </div>

        <nav className="grid gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-md font-medium text-white">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-md font-normal text-white/72 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
