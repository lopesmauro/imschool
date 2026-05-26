import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navItems = [
        { label: "Método", href: "#sobre" },
        { label: "Aulas", href: "#sobre" },
        { label: "Processo", href: "#processo" },
        { label: "Diagnóstico", href: "#contato" },
        { label: "Histórias", href: "#depoimentos" },
        { label: "Cadastro", href: "#contato" },
    ];
    const leftNavItems = navItems.slice(0, 3);
    const rightNavItems = navItems.slice(3);

    return (
        <header className="absolute left-0 top-10 z-50 w-full">
            <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-8 lg:px-12">
                <div className="relative flex min-h-12 items-center justify-between lg:min-h-14">
                    <nav className="hidden w-[calc(50%_-_96px)] max-w-[470px] lg:block">
                        <div className="grid h-11 grid-cols-3 items-center text-white">
                            {leftNavItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="group inline-flex h-9 min-w-0 items-center justify-center px-3 text-center text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-white/72 transition-colors hover:text-white"
                                >
                                    <span className="relative">
                                        {item.label}
                                        <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-[#ffdc58] transition-all duration-300 group-hover:w-full" />
                                    </span>
                                </a>
                            ))}
                        </div>
                    </nav>

                    <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                        <Logo />
                    </div>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="relative z-20 p-2 text-white transition-colors hover:text-[#ffdc58] lg:hidden"
                        aria-label="Menu"
                    >
                        <div className="transition-transform duration-300 ease-in-out">
                            {menuOpen ? <X size={26} /> : <Menu size={26} />}
                        </div>
                    </button>

                    <nav className="hidden w-[calc(50%_-_96px)] max-w-[470px] lg:block">
                        <div className="grid h-11 grid-cols-3 items-center text-white">
                            {rightNavItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="group inline-flex h-9 min-w-0 items-center justify-center px-3 text-center text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-white/72 transition-colors hover:text-white"
                                >
                                    <span className="relative">
                                        {item.label}
                                        <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-[#ffdc58] transition-all duration-300 group-hover:w-full" />
                                    </span>
                                </a>
                            ))}
                        </div>
                    </nav>

                    <div className="h-10 w-10 lg:hidden" aria-hidden="true" />
                </div>

                <div 
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
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
                        <a
                            href="#contato"
                            onClick={() => setMenuOpen(false)}
                            className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#cf5f2b] px-5 py-3 text-sm font-extrabold text-white shadow-[0_18px_38px_-26px_rgba(207,95,43,.95)] transition-all hover:-translate-y-0.5 hover:bg-[#ef7941]"
                        >
                            Começar diagnóstico
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
