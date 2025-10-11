import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-black/10">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-12 max-w-7xl">
        {/* GRID PRINCIPAL */}
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 mb-8 text-center md:text-left">
          {/* Logo + Social */}
          <div className="flex flex-col items-center md:items-start">
            <Logo />
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              <a
                href="#"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-yellow-500 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-yellow-500 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-yellow-500 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-muted-foreground hover:text-yellow-500 transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Seções */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Sobre</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#sobre" className="hover:text-yellow-500 transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#passos" className="hover:text-yellow-500 transition-colors">
                  Passos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Explorar</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#planos" className="hover:text-yellow-500 transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-yellow-500 transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Ajuda</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#contato" className="hover:text-yellow-500 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-black/10">
          <div className="text-center text-muted-foreground space-y-2">
            <p className="text-sm sm:text-base">
              &copy; 2025 <span className="font-medium text-gray-900">ImSchool</span>. Todos os direitos reservados.
            </p>
            <p className="text-xs sm:text-sm">
              Desenvolvido por{" "}
              <span className="font-medium text-yellow-500 hover:text-yellow-600 transition-colors">
                Hipnos Development
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
