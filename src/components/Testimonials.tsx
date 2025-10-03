import { Star } from "lucide-react";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Mariana Silva",
            role: "Estudante de Administração",
            text: "O curso superou minhas expectativas! Em poucos meses consegui evoluir no inglês e hoje me sinto confiante para participar de reuniões internacionais.",
            rating: 5,
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            name: "Lucas Pereira",
            role: "Analista de TI",
            text: "A metodologia é incrível. O suporte da equipe e o acesso à plataforma digital fizeram toda diferença na minha rotina corrida.",
            rating: 5,
            image: "https://randomuser.me/api/portraits/men/46.jpg"
        },
        {
            name: "Carla Mendes",
            role: "Empresária",
            text: "Recomendo muito! Fiz o plano Premium e já vejo resultados claros. O professor dedicado realmente ajuda a acelerar o aprendizado.",
            rating: 5,
            image: "https://randomuser.me/api/portraits/women/65.jpg"
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden">
            <div className="container mx-auto px-20 max-w-7xl">
                <div className="text-center mb-16">
                    <p className="text-amber-600 uppercase tracking-wide font-semibold mb-3">
                        Depoimentos
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        O que nossos alunos dizem
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Histórias reais de transformação através do inglês.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="bg-white rounded-3xl shadow-lg p-8 relative hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-amber-400"
                                />
                                <div>
                                    <p className="font-bold text-gray-900">{t.name}</p>
                                    <p className="text-sm text-gray-600">{t.role}</p>
                                </div>
                            </div>

                            <p className="text-gray-700 text-base mb-6 leading-relaxed">
                                “{t.text}”
                            </p>

                            <div className="flex gap-1 text-amber-400">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
