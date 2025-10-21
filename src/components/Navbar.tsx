import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const phoneNumber = "+5492216045067";

    const message = "Olá! Gostaria de saber mais sobre o curso de inglês.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


    return (
        <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50">
            <div className="container mx-auto px-6 sm:px-10 lg:px-20 py-4 max-w-7xl">
                <div className="flex items-center justify-between">
                    <Logo />

                    {/* Menu desktop */}
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
                        <div className="ml-4">
                            <button className="bg-yellow-500 hover:bg-yellow-500/90 text-black font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
                                <a href={whatsappUrl} target="_blank">Matricule-se</a>

                            </button>
                        </div>
                    </nav>

                    {/* Botão hambúrguer mobile */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-black hover:text-yellow-500 transition-colors"
                        aria-label="Abrir menu"
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Menu mobile */}
                {menuOpen && (
                    <div className="md:hidden mt-4 bg-white rounded-xl shadow-lg p-6 space-y-4 animate-fadeIn">
                        {["Sobre", "Cursos", "Depoimentos", "Contato"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setMenuOpen(false)}
                                className="block text-lg text-black hover:text-yellow-500 font-medium transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                        <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300">
                            Matricule-se
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
