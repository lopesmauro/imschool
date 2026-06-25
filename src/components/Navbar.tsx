import { useState } from "react";
import { ArrowDown, Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navItems = [
        { label: "Método", href: "#sobre" },
        { label: "Aulas", href: "#sobre" },
        { label: "Processo", href: "#processo" },
        { label: "Diagnóstico", href: "#contato" },
        { label: "Histórias", href: "#depoimentos" },
    ];

    return (
        <header className="notebook-navbar absolute left-0 top-10 z-50 w-full">
            <div className="container mx-auto max-w-6xl px-4 py-4 sm:px-8 lg:px-10">
                <div className="grid min-h-14 grid-cols-[1fr_auto] items-center lg:grid-cols-[1fr_auto_1fr]">
                    <div className="justify-self-start">
                        <Logo />
                    </div>

                    <nav
                        aria-label="Navegação principal"
                        className="hidden rounded-full border border-white/14 bg-black/26 px-1.5 py-1 shadow-[0_18px_50px_-38px_rgba(0,0,0,.9)] backdrop-blur-xl lg:block"
                    >
                        <ul className="flex items-center gap-0.5">
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="inline-flex min-h-9 items-center rounded-full px-3 text-sm font-bold tracking-normal text-white/78 transition-colors hover:bg-white/10 hover:text-white"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <a
                        href="#contato"
                        className="group hidden min-h-10 items-center justify-center gap-2 justify-self-end rounded-full bg-highlight px-5 py-2 text-xs font-extrabold lowercase tracking-[0.1em] text-brand-dark shadow-[0_10px_30px_rgba(255,220,88,.18)] transition-all hover:-translate-y-0.5 hover:bg-white lg:inline-flex"
                    >
                        cadastrar
                        <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-1" />
                    </a>

                    <button
                        type="button"
                        onClick={() => setMenuOpen((open) => !open)}
                        className="justify-self-end p-2 text-white transition-colors hover:text-highlight lg:hidden"
                        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                    >
                        {menuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>

                <div
                    id="mobile-menu"
                    className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
                        menuOpen ? "mt-4 max-h-96 opacity-100" : "mt-0 max-h-0 opacity-0"
                    }`}
                >
                    <div className="rounded-card border border-white/18 bg-night-elevated/88 p-5 shadow-2xl backdrop-blur-xl">
                        <nav aria-label="Navegação mobile">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="flex min-h-11 items-center border-b border-white/10 text-base font-bold text-white/86 transition-colors last:border-0 hover:text-highlight"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                        <a
                            href="#contato"
                            onClick={() => setMenuOpen(false)}
                            className="group mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-highlight px-5 py-3 text-sm font-extrabold lowercase text-brand-dark shadow-[0_10px_30px_rgba(255,220,88,.16)] transition-all hover:-translate-y-0.5 hover:bg-white"
                        >
                            cadastrar
                            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
