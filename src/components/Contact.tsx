const Contact = () => {
    const phoneNumber = "+5492216045067";
    const message = "Olá! Gostaria de saber mais sobre o curso de inglês EAD.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <section
            id="contato"
            className="relative py-28 bg-gradient-to-br from-yellow-50 via-white to-yellow-50 overflow-hidden"
        >
            {/* Ornamentos suaves */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-100 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-20"></div>
            </div>

            <div className="relative container mx-auto px-20 md:px-20 z-10 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
                    {/* COLUNA ESQUERDA */}
                    <div className="flex-1">
                        <div className="max-w-xl mb-10">
                            <p className="text-yellow-600 uppercase tracking-widest text-sm font-semibold">
                                Comece agora
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900">
                                Realize sua <span className="text-yellow-500">Inscrição</span>
                            </h2>
                            <p className="text-lg md:text-xl text-gray-700 mt-5 leading-relaxed">
                                Dê o primeiro passo na sua jornada com o inglês. Fale com um de
                                nossos consultores clicando no botão abaixo ou escaneie o QR Code.
                            </p>
                        </div>

                        {/* Botão CTA */}
                        <div className="mb-6">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative inline-block px-10 py-5 text-lg font-semibold text-white rounded-2xl shadow-xl bg-yellow-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-yellow-600"
                            >
                                Conversar no WhatsApp
                                <span className="absolute -bottom-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full blur-sm opacity-40"></span>
                            </a>
                            <p className="text-sm text-gray-500 max-w-xs mt-4">
                                Atendimento imediato e personalizado para tirar suas dúvidas.
                            </p>
                        </div>

                        {/* Benefícios rápidos */}
                        <div className="space-y-2 text-sm text-gray-700 mb-8">
                            <p>✔ Atendimento 24h com consultores especializados</p>
                            <p>✔ Informações completas sobre cursos e preços</p>
                            <p>✔ Suporte contínuo mesmo após a inscrição</p>
                        </div>

                        {/* Info extra de suporte */}
                        <div className="flex items-start gap-3 text-sm text-gray-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-yellow-500 mt-0.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8 10h.01M12 14h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"
                                />
                            </svg>
                            <p>
                                <strong className="font-medium text-gray-900">Suporte dedicado:</strong> nosso time te acompanha do primeiro contato até a fluência.
                            </p>
                        </div>
                    </div>

                    {/* COLUNA DIREITA - QR CODE GRANDE */}
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="w-full max-w-md p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <img
                                src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
                                    whatsappUrl
                                )}&bgcolor=FFFFFF&color=D97706`}
                                alt="QR Code para WhatsApp"
                                className="w-full h-full object-contain rounded-xl"
                            />
                        </div>
                        <div className="mt-6 text-center space-y-1">
                            <p className="text-base text-gray-700 font-medium">Escaneie com a câmera</p>
                            <p className="text-sm text-gray-500">Acesso direto ao WhatsApp</p>
                        </div>
                    </div>
                </div>

                {/* Microcopy final */}
                <div className="text-center mt-16">
                    <p className="text-xs text-gray-400">
                        📩 Suporte exclusivo via WhatsApp. Clique ou escaneie para iniciar sua conversa.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
