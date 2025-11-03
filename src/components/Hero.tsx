import { ArrowRight } from "lucide-react";

const Hero = () => {
        const phoneNumber = "+5492216045067";
    const message = "🚀 Oi! Vi o site e quero começar agora minhas aulas de inglês. Quais são os próximos passos?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
            {/* Imagem de fundo */}
            <img
                src="/bg-hero.jpg"
                alt="Hero background"
                className="absolute top-0 left-0 w-full h-full object-cover lg:w-1/2 lg:right-0 lg:left-auto transition-all duration-500"
            />

            {/* Overlay escuro suave apenas no mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent lg:hidden" />

            {/* Gradiente branco no desktop para suavizar transição */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent hidden lg:block" />

            {/* Conteúdo */}
            <div className="container mx-auto px-6 sm:px-10 lg:px-20 py-16 sm:py-24 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div
                        className="space-y-6 text-center lg:text-left 
                        text-white lg:text-black drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.35)] 
                        lg:drop-shadow-none"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            Aprenda <span className="text-yellow-400 lg:text-yellow-500">Inglês</span> de
                            <br className="hidden sm:block" /> Forma Eficiente
                        </h1>

                        <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Na ImSchool, transformamos o aprendizado do inglês em uma jornada empolgante.
                            Com metodologia comprovada e professores especializados, você alcança a fluência mais rápido.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
                            <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-10 py-3 rounded-lg text-base flex items-center justify-center transition-all shadow-md hover:shadow-lg">
                                <a href={whatsappUrl} target="_blank">Comece agora</a>
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-10">
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-yellow-400 lg:text-yellow-500">
                                    1200+
                                </div>
                                <div className="text-sm opacity-90">Alunos Aprovados</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold">93.5%</div>
                                <div className="text-sm opacity-90">Taxa de Sucesso</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-yellow-400 lg:text-yellow-500">
                                    4,6⭐
                                </div>
                                <div className="text-sm opacity-90">Avaliação Média</div>
                            </div>
                        </div>
                    </div>

                    {/* Espaço reservado no desktop */}
                    <div className="hidden lg:block"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
