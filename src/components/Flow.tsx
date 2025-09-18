const Flow = () => {
    const steps = [
        {
            step: "1",
            title: "Escolha seu Curso",
            description: "Selecione o nível ideal: Básico, Intermediário ou Avançado",
        },
        {
            step: "2",
            title: "Inscrição Online",
            description: "Preencha seus dados e faça sua matrícula em poucos minutos",
        },
        {
            step: "3",
            title: "Pagamento Seguro",
            description: "Escolha a forma de pagamento que preferir: cartão, PIX ou boleto",
        },
        {
            step: "4",
            title: "Acesso à Plataforma",
            description: "Receba suas credenciais e acesse nossa plataforma EAD",
        },
        {
            step: "5",
            title: "Comece a Estudar",
            description: "Inicie sua jornada rumo à fluência com nossa metodologia única",
        },
        { 
            step: "6",
            title: "Consolide seu Aprendizado",
            description: "Pratique e revise os conteúdos para maior retenção",
        },
    ];

    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-20">
                {/* Título da seção */}
                <div className="text-center mb-16">
                    <p className="text-gray-500 uppercase tracking-wide font-semibold">Fluxo de atendimento</p>
                    <h2 className="text-white text-4xl md:text-5xl font-bold mt-2">
                        Como Funciona a <span className="text-yellow-500">Inscrição</span>
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
                            className="flex flex-col p-6 bg-yellow-500 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="text-8xl font-extrabold text-yellow-600">
                                <h1>{step.step}</h1>
                            </div>

                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-700 mb-1">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Flow;
