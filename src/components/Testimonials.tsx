import { Star, Quote } from "lucide-react";

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
        <section className="py-24 bg-gradient-to-b from-white via-amber-50/40 to-white relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
                
                <div className="text-center mb-16">
                    <span className="bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
                        Depoimentos
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-6 mb-6">
                        O que nossos alunos dizem
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
                        Histórias reais de transformação através do inglês.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <div 
                            key={idx} 
                            className="group bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-10px_rgba(251,191,36,0.15)] transition-all duration-500 hover:-translate-y-2 relative"
                        >
                            {/* Aspas Decorativas */}
                            <div className="absolute top-8 right-8 text-amber-100 group-hover:text-amber-200 transition-colors duration-500">
                                <Quote size={48} fill="currentColor" />
                            </div>

                            {/* Avaliação */}
                            <div className="flex gap-1 mb-6">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            {/* Texto do Depoimento */}
                            <blockquote className="relative z-10">
                                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                                    "{t.text}"
                                </p>
                            </blockquote>

                            {/* Info do Aluno */}
                            <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                                <div className="relative">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="w-14 h-14 rounded-2xl object-cover ring-2 ring-amber-400/20 group-hover:ring-amber-400 transition-all duration-500"
                                    />
                                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white shadow-sm"></div>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-lg">{t.name}</p>
                                    <p className="text-sm text-amber-600 font-semibold tracking-wide uppercase">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;