import { Quote } from "lucide-react";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Mariana",
            role: "Retomada dos estudos",
            text: "Eu já tinha estudado antes, mas não sabia por onde retomar. A conversa deixou claro o que eu precisava priorizar."
        },
        {
            name: "Lucas",
            role: "Rotina corrida",
            text: "Gostei porque não foi uma proposta pronta. Falei da minha rotina e recebi uma orientação que realmente cabia na minha semana."
        },
        {
            name: "Carla",
            role: "Direção clara",
            text: "Depois da consultoria, parei de trocar de método toda hora. Finalmente tenho um caminho claro."
        }
    ];

    return (
        <section id="depoimentos" className="notebook-section relative overflow-hidden bg-white py-16 sm:py-20 lg:py-18">
            <div className="absolute inset-x-0 top-0 h-px bg-black/10" />
            <div className="container mx-auto max-w-6xl px-4 sm:px-8 lg:px-10">
                <div className="grid items-start gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-10">
                    <div className="fade-in">
                        <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-gold-ink">
                            Experiências
                        </p>
                        <h2 className="notebook-heading-medium font-editorial text-4xl leading-none text-black sm:text-5xl lg:text-[2.95rem]">
                            Alunos que encontraram um <span className="font-editorial-italic">caminho</span> mais claro.
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {testimonials.map((t, index) => (
                            <div
                                key={t.name}
                                className={`notebook-testimonial-card fade-in-soft rounded-card bg-brand p-4 text-white ${index === 1 ? "fade-delay-1 lg:translate-y-6" : index === 2 ? "fade-delay-2" : ""}`}
                            >
                                <Quote size={25} className="mb-6 fill-highlight text-highlight" />
                                <p className="font-editorial-italic mb-6 text-[1.08rem] leading-[1.5] text-white/90">
                                    "{t.text}"
                                </p>
                                <div className="border-t border-white/18 pt-4">
                                    <p className="font-extrabold text-white">{t.name}</p>
                                    <p className="text-sm text-white/62">{t.role}</p>
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
