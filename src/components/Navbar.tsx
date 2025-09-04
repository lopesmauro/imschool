const Navbar = () => {
    return (
        <header className="fixed top-0 w-full bg-white backdrop-blur-md z-50">
            <div className="container mx-auto px-6 py-5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 group">
                        <div className="relative">
                            <div className="w-16 h-16 rounded-xl flex items-center justify-center">
                                <img
                                    src="/logo-ims.png"
                                    alt="Logo ImSchool"
                                    width={50}
                                    height={50}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-primary bg-clip-text">
                                ImSchool
                            </span>
                            <span className="text-xs text-muted-foreground">
                                English Academy
                            </span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        <a
                            href="#sobre"
                            className="relative px-4 py-2 text-black hover:text-primary transition-all duration-300 group font-medium"
                        >
                            Sobre
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a
                            href="#cursos"
                            className="relative px-4 py-2 text-black hover:text-primary transition-all duration-300 group font-medium"
                        >
                            Cursos
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a
                            href="#depoimentos"
                            className="relative px-4 py-2 text-black hover:text-primary transition-all duration-300 group font-medium"
                        >
                            Depoimentos
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a
                            href="#contato"
                            className="relative px-4 py-2 text-black hover:text-primary transition-all duration-300 group font-medium"
                        >
                            Contato
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <div className="ml-4">
                            <button className="bg-primary hover:bg-primary/90 text-black font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
                                Matricule-se
                            </button>
                        </div>
                    </nav>

                   
                </div>

            
            </div>
        </header>
    )
}

export default Navbar
