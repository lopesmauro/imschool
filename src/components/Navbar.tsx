import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const phoneNumber = "+5492214098715";

    const message = "🎓 Olá! Quero fazer minha matrícula e começar a estudar inglês com vocês. Pode me ajudar com o processo?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
            <div className="container mx-auto px-6 sm:px-10 lg:px-20 py-4 max-w-7xl">
                <div className="flex items-center justify-between">
                    <Logo />

                    {/* Desktop e Mobile Actions agrupados à direita */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        {/* Links Desktop - Escondidos no Mobile */}
                        <nav className="hidden md:flex items-center space-x-1">
                            {["Sobre", "Cursos", "Depoimentos", "Contato"].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="relative px-4 py-2 text-black hover:text-yellow-500 transition-all duration-300 group font-medium"
                                >
                                    {item}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </nav>

                        {/* Botão Matricule-se - Sempre visível */}
                        <a 
                            href={whatsappUrl} 
                            target="_blank"
                            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 sm:px-6 sm:py-2 rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base shadow-sm whitespace-nowrap"
                        >
                            Matricule-se
                        </a>

                        {/* Botão hambúrguer - Mobile */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden text-black hover:text-yellow-500 transition-all duration-300 p-1"
                            aria-label="Menu"
                        >
                            {/* Troca de ícones com leve rotação */}
                            <div className="transition-transform duration-300 ease-in-out">
                                {menuOpen ? <X size={28} className="rotate-90" /> : <Menu size={28} />}
                            </div>
                        </button>
                    </div>
                </div>

                {/* Menu mobile com transição suave */}
                <div 
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                        menuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
                    }`}
                >
                    <div className="bg-white rounded-xl shadow-lg p-6 space-y-4 border border-gray-100">
                        {["Sobre", "Cursos", "Depoimentos", "Contato"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setMenuOpen(false)}
                                className="block text-lg text-black hover:text-yellow-500 font-medium transition-colors border-b border-gray-50 pb-2 last:border-0"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;