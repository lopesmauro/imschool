import { Check, Sparkles, Crown, Rocket } from 'lucide-react';

const Plans = () => {
                const phoneNumber = "+5492216045067";

        const message = "Olá! Gostaria de saber mais sobre o curso de inglês.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const plans = [
        {
            name: 'Essencial',
            price: 'R$ 359',
            period: '/mês',
            description: 'Perfeito para começar sua jornada',
            icon: Sparkles,
            features: [
                'Plataforma (Básico ao Avançado)',
                'Suporte com professor designado (Diariamente)',
                'Plano de estudo padrão',
                '4 aulas individuais de Conversação ao vivo. (30 minutos cada aula)',
                'Certificado ao concluir o curso'
            ],
            highlighted: false
        },
        {
            name: 'Premium',
            price: 'R$ 529',
            period: '/mês',
            description: 'O mais escolhido pelos nossos alunos',
            icon: Crown,
            features: [
                'Plataforma (Básico ao Avançado)',
                'Suporte com professor designado (Diariamente)',
                'Plano de estudo padrão',
                '4 aulas individuais de Conversação ao vivo. (45 minutos cada aula)',
                'Certificado ao concluir o curso'
            ],
            highlighted: true
        },
        {
            name: 'Executive',
            price: 'R$ 717',
            period: '/mês',
            description: 'Experiência personalizada e exclusiva',
            icon: Rocket,
            features: [
                'Plataforma (Básico ao Avançado)',
                'Suporte com professor designado (Diariamente)',
                'Plano de estudo personalizado',
                '4 aulas individuais de Conversação ao vivo. (1 hora cada aula)',
                'Certificado ao concluir o curso'
            ],
            highlighted: false
        }
    ];

    return (
        <div className="py-24 relative bg-gradient-to-b from-white via-amber-50/20 to-white">
            <div className="container mx-auto px-20 max-w-7xl">
                <div className="text-center mb-16">
                    <p className="text-amber-600 uppercase tracking-wide font-semibold mb-3">
                        Planos e Preços
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Escolha o plano ideal para você
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Investimento acessível com resultados extraordinários. Sem taxas de matrícula.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 relative">
                    {plans.map((plan, index) => {
                        const Icon = plan.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative ${plan.highlighted ? 'lg:-mt-8' : ''}`}
                            >
                                {plan.highlighted && (
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                                        <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                                            MAIS POPULAR
                                        </div>
                                    </div>
                                )}

                                <div className={`h-full rounded-3xl p-8 transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden ${plan.highlighted
                                        ? 'bg-gradient-to-br from-gray-900 to-black shadow-2xl'
                                        : 'bg-white shadow-lg border border-gray-200 hover:border-amber-200'
                                    }`}>
                                    <div className={`absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-16 translate-x-16 ${plan.highlighted
                                            ? 'bg-gradient-to-br from-amber-400/20 to-yellow-400/10'
                                            : 'bg-gradient-to-br from-amber-100/50 to-yellow-100/30'
                                        }`}></div>

                                    <div className="relative">
                                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${plan.highlighted
                                                ? 'bg-gradient-to-br from-amber-400 to-yellow-500'
                                                : 'bg-gradient-to-br from-amber-100 to-yellow-100'
                                            }`}>
                                            <Icon className={`w-8 h-8 ${plan.highlighted ? 'text-black' : 'text-amber-600'}`} />
                                        </div>

                                        <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                                            {plan.name}
                                        </h3>
                                        <p className={`text-sm mb-6 ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                                            {plan.description}
                                        </p>

                                        <div className="mb-8">
                                            <div className="flex items-baseline gap-1">
                                                <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                                                    {plan.price}
                                                </span>
                                                <span className={`text-lg ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                                                    {plan.period}
                                                </span>
                                            </div>
                                        </div>

                                        <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 mb-8 ${plan.highlighted
                                                ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-black hover:shadow-xl hover:scale-105'
                                                : 'bg-gray-900 text-white hover:bg-gray-800 hover:scale-105'
                                            }`}>
                                            <a href={whatsappUrl} target="_blank">Começar Agora</a>
                                        </button>

                                        <div className="space-y-4">
                                            {plan.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.highlighted
                                                            ? 'bg-amber-400/20'
                                                            : 'bg-amber-100'
                                                        }`}>
                                                        <Check className={`w-3 h-3 ${plan.highlighted ? 'text-amber-400' : 'text-amber-600'}`} />
                                                    </div>
                                                    <span className={`text-sm leading-relaxed ${plan.highlighted ? 'text-gray-300' : 'text-gray-700'}`}>
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">
                        Todos os planos incluem garantia de 7 dias. Não gostou? Devolvemos seu dinheiro.
                    </p>
                    <button className="text-amber-600 font-semibold hover:text-amber-700 transition-colors">
                        Ver comparação completa dos planos →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Plans;
