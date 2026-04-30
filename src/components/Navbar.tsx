import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navItems = [
        { label: "Método", href: "#sobre" },
        { label: "Processo", href: "#processo" },
        { label: "Histórias", href: "#depoimentos" },
        { label: "Cadastro", href: "#contato" },
    ];

    return (
        <header className="absolute left-0 top-0 z-50 w-full">
            <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between">
                    <Logo />

                    <div className="flex shrink-0 items-center gap-2 sm:gap-4">
                        <nav className="hidden items-center gap-1 rounded-full bg-white/8 px-2 py-1 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,.16)] backdrop-blur-md md:flex">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="rounded-full px-3 py-2 text-xs font-bold text-white/76 transition-colors hover:bg-white/10 hover:text-white"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>

                        <a 
                            href="#consultoria-form"
                            className="inline-flex min-h-10 items-center gap-2 whitespace-nowrap rounded-full bg-[#cf5f2b] px-4 py-2 text-sm font-extrabold text-white shadow-[0_16px_36px_-22px_rgba(207,95,43,.9)] transition-all hover:-translate-y-0.5 hover:bg-[#ef7941] sm:px-5"
                        >
                            <span className="hidden min-[360px]:inline">Começar</span>
                            <ArrowUpRight className="h-4 w-4" />
                        </a>

                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="p-2 text-white transition-colors hover:text-[#ffdc58] md:hidden"
                            aria-label="Menu"
                        >
                            <div className="transition-transform duration-300 ease-in-out">
                                {menuOpen ? <X size={26} /> : <Menu size={26} />}
                            </div>
                        </button>
                    </div>
                </div>

                <div 
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                        menuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
                    }`}
                >
                    <div className="space-y-3 rounded-[1.35rem] border border-white/18 bg-[#17120d]/88 p-5 shadow-2xl backdrop-blur-xl">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className="block border-b border-white/10 pb-2 text-base font-bold text-white/86 transition-colors last:border-0 hover:text-[#ffdc58]"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
