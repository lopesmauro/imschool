import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
            {/* Background image */}
            <img
                src="/bg-hero.jpg"
                alt="Hero background"
                className="absolute top-0 right-0 h-full w-1/2 object-cover pointer-events-none select-none"
            />

            <div className="container mx-auto px-4 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-5 z-10 relative">
                        <h1 className="text-5xl lg:text-6xl font-bold">
                            Aprenda <span className="text-yellow-500">Inglês</span> de
                            <br />Forma Eficiente
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Na ImSchool, transformamos o aprendizado do inglês em uma jornada empolgante.
                            Com metodologia comprovada e professores especializados, você alcança a fluência mais rápido.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-yellow-500 hover:bg-primary/90 text-black font-semibold px-12 py-3 rounded-lg text-sm flex items-center transition-colors shadow-elegant">
                                Comece Agora
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </button>

                        </div>

                        <div className="flex items-center gap-8 pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary">500+</div>
                                <div className="text-sm text-muted-foreground">Alunos Aprovados</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">95%</div>
                                <div className="text-sm text-muted-foreground">Taxa de Sucesso</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary">5⭐</div>
                                <div className="text-sm text-muted-foreground">Avaliação Média</div>
                            </div>
                        </div>
                    </div>

                    {/* Você pode deixar o segundo grid vazio, ou colocar algo aqui */}
                    <div></div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
