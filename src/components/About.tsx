import { CheckCircle } from "lucide-react";

const About = () => {
    const features = [
        {
            icon: "/teachericon.png",
            title: "Professores Nativos",
            description: "Aprenda com professores especializados e nativos da língua inglesa"
        },
        {
            icon: "/courseicon.png",
            title: "Certificação Internacional",
            description: "Receba certificados reconhecidos mundialmente ao concluir os cursos"
        },
        {
            icon: "/clockicon.png",
            title: "Horários Flexíveis",
            description: "Estude no seu ritmo com horários que se adaptam à sua rotina"
        },
    ];

    return (
        <section id="sobre" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Título */}
                <div className="text-center mb-12">
                    <p className="text-gray-500 uppercase tracking-wide font-semibold">Sobre nós</p>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">
                        Por que escolher a <span className="text-primary">ImSchool</span>?
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Lista de benefícios com CheckCircle */}
                    <div>
                        <div className="space-y-4 mt-5">
                            {[
                                "Professores experientes e certificados internacionalmente",
                                "Ambiente imersivo para acelerar o aprendizado",
                                "Acompanhamento de progresso personalizado",
                                "Atividades práticas e interativas em todas as aulas",
                                "Horários flexíveis para se adaptar à sua rotina",
                                "Suporte contínuo fora da sala de aula",
                                "Simulações de situações reais do dia a dia e do trabalho",
                                "Plataforma online exclusiva para reforçar os estudos",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cards de features com ícones */}
                    <div className="grid gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                            >
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: "hsl(45 90% 65%)" }}
                                >
                                    <img
                                        src={feature.icon}
                                        alt={feature.title}
                                        className="h-9 w-9 object-contain"
                                    />
                                </div>
                                <div className="flex-1 text-left">
                                    <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                                    <p className="text-gray-600 text-sm">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
