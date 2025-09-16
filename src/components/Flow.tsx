const Flow = () => {
    const steps = [
        {
            icon: "/courseicon.png",
            title: "1. Escolha seu Curso",
            description: "Selecione o nível ideal: Básico, Intermediário ou Avançado",
            details: "Avalie seu conhecimento e escolha o curso que melhor se adapta aos seus objetivos"
        },
        {
            icon: "/onlineicon.png",
            title: "2. Inscrição Online",
            description: "Preencha seus dados e faça sua matrícula em poucos minutos",
            details: "Processo 100% digital, rápido e seguro direto pelo site"
        },
        {
            icon: "/paymenticon.png",
            title: "3. Pagamento Seguro",
            description: "Escolha a forma de pagamento que preferir: cartão, PIX ou boleto",
            details: "Pagamentos protegidos e parcelamento em até 12x sem juros"
        },
        {
            icon: "/platformicon.png",
            title: "4. Acesso à Plataforma",
            description: "Receba suas credenciais e acesse nossa plataforma EAD",
            details: "Plataforma intuitiva com materiais, exercícios e aulas gravadas"
        },
        {
            icon: "/studyicon.png",
            title: "5. Comece a Estudar",
            description: "Inicie sua jornada rumo à fluência com nossa metodologia única",
            details: "Aulas ao vivo, suporte pedagógico e acompanhamento personalizado"
        },
        { 
            icon: "/studyicon.png",
            title: "6. Consolide seu Aprendizado",
            description: "Pratique e revise os conteúdos para maior retenção",
            details: "Exercícios, simulações e acompanhamento contínuo"
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Título da seção */}
                <div className="text-center mb-16">
                    <p className="text-gray-500 uppercase tracking-wide font-semibold">Fluxo de atendimento</p>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">
                        Como Funciona a <span className="text-primary">Inscrição</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
                        Em apenas 6 passos simples você estará pronto para começar sua jornada no inglês.
                    </p>
                </div>

                {/* Cards do fluxo */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Ícone dentro de círculo amarelo */}
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-sm"
                                style={{ backgroundColor: "hsl(45 90% 65%)" }}
                            >
                                <img src={step.icon} alt={step.title} className="h-10 w-10 object-contain" />
                            </div>

                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-700 mb-1">{step.description}</p>
                            <p className="text-xs text-gray-400">{step.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Flow;
