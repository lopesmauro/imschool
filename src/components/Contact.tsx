const Contact = () => {
    const phoneNumber = "5511999999999"; // Substitua pelo seu número
    const message = "Olá! Gostaria de saber mais sobre o curso de inglês EAD.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <section id="contato" className="py-24 bg-gradient-to-r from-yellow-50 via-white to-yellow-50">
            <div className="container mx-auto px-4">
                {/* Título */}
                <div className="text-center mb-16">
                    <p className="text-gray-500 uppercase tracking-wide font-semibold">Comece agora</p>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">
                        Realize sua <span className="text-yellow-500">Inscrição</span>!
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-xl mx-auto">
                        Pronto para começar sua jornada no inglês? Clique no botão ou escaneie o QR Code.
                    </p>
                </div>

                {/* Botão e QR Code */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
                    {/* Botão WhatsApp */}
                    <div className="flex-1 max-w-sm text-center">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-block text-white font-medium px-8 py-4 rounded-2xl shadow-lg transition-transform duration-200 transform hover:-translate-y-1 hover:shadow-2xl bg-yellow-500"
                        >
                            Conversar no WhatsApp
                        </a>
                    </div>

                    <div className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

                    <div className="flex-1 max-w-sm text-center">
                        <div className="w-36 h-36 mx-auto bg-white rounded-3xl p-4 shadow-lg flex items-center justify-center">
                            <img
                                src={`https://api.qrserver.com/v1/create-qr-code/?size=144x144&data=${encodeURIComponent(
                                    whatsappUrl
                                )}&bgcolor=FFFFFF&color=D97706`}
                                alt="QR Code para WhatsApp"
                                className="w-full h-full object-contain rounded-xl"
                            />
                        </div>
                        <div className="mt-4 space-y-1">
                            <p className="text-sm text-gray-500 font-light">Escaneie com a câmera</p>
                            <p className="text-xs text-gray-400 font-light">Acesso direto ao WhatsApp</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
