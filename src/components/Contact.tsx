const Contact = () => {
    const phoneNumber = "5511999999999";
    const message = "Olá! Gostaria de saber mais sobre o curso de inglês EAD.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <section
            id="contato"
            className="relative py-28 bg-gradient-to-br from-yellow-50 via-white to-yellow-50 overflow-hidden"
        >
            {/* Ornamentação suave no fundo */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-100 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-20"></div>
            </div>

            <div className="container relative mx-auto px-6 md:px-20">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <p className="text-yellow-600 uppercase tracking-widest text-sm font-semibold">
                        Comece agora
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold mt-3 leading-tight">
                        Realize sua <span className="text-yellow-500">Inscrição</span>!
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mt-5 leading-relaxed">
                        Dê o primeiro passo na sua jornada com o inglês. Fale com um de nossos consultores clicando no botão abaixo ou escaneie o QR Code.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-16">
                    {/* Botão WhatsApp */}
                    <div className="flex flex-col items-center gap-4 text-center">
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            Online 24h
                        </span>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative inline-block px-10 py-5 text-lg font-semibold text-white rounded-2xl shadow-xl bg-yellow-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-yellow-600"
                        >
                            Conversar no WhatsApp
                            <span className="absolute -bottom-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full blur-sm opacity-40"></span>
                        </a>
                        <p className="text-sm text-gray-500 max-w-xs mt-2">
                            Atendimento imediato e personalizado para tirar suas dúvidas.
                        </p>
                    </div>

                    {/* Divisor visual */}
                    <div className="hidden md:block w-px h-40 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

                    {/* QR Code */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-64 h-64 p-5 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center">
                            <img
                                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
                                    whatsappUrl
                                )}&bgcolor=FFFFFF&color=D97706`}
                                alt="QR Code para WhatsApp"
                                className="w-full h-full object-contain rounded-xl"
                            />
                        </div>
                        <div className="mt-5 space-y-1">
                            <p className="text-sm text-gray-600 font-medium">Escaneie com a câmera</p>
                            <p className="text-xs text-gray-400 font-light">Acesso direto ao WhatsApp</p>
                        </div>
                    </div>
                </div>
            </div>
                            {/* Microcopy */}
                <div className="text-center mt-10">
                    <p className="text-xs text-gray-400">
                        📩 Suporte exclusivo via WhatsApp. Clique ou escaneie para iniciar sua conversa.
                    </p>
                </div>
        </section>
    );
};

export default Contact;
