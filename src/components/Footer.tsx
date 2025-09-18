import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-20 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo />

            <div className="flex space-x-4 mt-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Cursos</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Inglês Básico</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Inglês Intermediário</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Inglês Avançado</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Business English</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Nossa Equipe</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Metodologia</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreiras</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Fale Conosco</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/10 pt-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 ImSchool. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;