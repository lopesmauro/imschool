import { Quote } from "lucide-react";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Mariana",
            role: "Reuniões no trabalho",
            text: "Eu já tinha estudado antes, mas não sabia por onde retomar. A conversa deixou claro o que eu precisava priorizar primeiro."
        },
        {
            name: "Lucas",
            role: "Rotina corrida",
            text: "Gostei porque não foi uma proposta pronta. Falei da minha rotina e recebi uma orientação que cabia na minha semana."
        },
        {
            name: "Carla",
            role: "Inglês para viagem",
            text: "Eu cheguei cheia de dúvidas. Depois da consultoria, entendi qual caminho seguir e parei de trocar de método toda hora."
        }
    ];

    return (
        <section id="depoimentos" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
            <div className="absolute inset-x-0 top-0 h-px bg-black/10" />
            <div className="container mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
                <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-12 items-start">
                    <div className="fade-in">
                        <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-[#b85228]">
                            Experiências
                        </p>
                        <h2 className="font-editorial text-4xl leading-none text-black sm:text-5xl lg:text-[3.45rem]">
                            Quando existe <span className="font-editorial-italic">contexto</span>, a conversa rende mais.
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {testimonials.map((t, index) => (
                            <div
                                key={t.name}
                                className={`fade-in-soft rounded-[1.25rem] border border-black/10 bg-[#fbf8f1] p-5 ${index === 1 ? "fade-delay-1 lg:translate-y-8" : index === 2 ? "fade-delay-2" : ""}`}
                            >
                                <Quote size={28} className="mb-8 text-[#b85228]" />
                                <p className="mb-8 leading-relaxed text-stone-700">
                                    "{t.text}"
                                </p>
                                <div className="pt-5 border-t border-black/10">
                                    <p className="font-extrabold text-black">{t.name}</p>
                                    <p className="text-sm text-stone-500">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
