import criarImage from "../assets/criar.png";
import lupaImage from "../assets/lupa.png";
import timeImage from "../assets/time.png";

const Flow = () => {
    const steps = [
        {
            image: criarImage,
            imageAlt: "Ilustração do cadastro inicial",
            imageScale: "scale-[1.24]",
            title: "Cadastro rápido",
            description: "Você informa nome, WhatsApp, email e o principal objetivo com o inglês.",
        },
        {
            image: lupaImage,
            imageAlt: "Ilustração da análise do perfil do aluno",
            imageScale: "scale-100",
            title: "Análise do seu perfil",
            description: "Eu avalio seu nível, sua rotina e os bloqueios que travam o aprendizado.",
        },
        {
            image: timeImage,
            imageAlt: "Ilustração da direção recomendada para estudo",
            imageScale: "scale-[1.12]",
            title: "Conversa estratégica",
            description: "Você recebe um diagnóstico claro, um plano de ação e a melhor recomendação de curso ou aulas.",
        },
    ];

    return (
        <section id="processo" className="notebook-section relative overflow-hidden bg-black py-16 text-white sm:py-20 lg:py-18">
            <div className="absolute inset-0 bg-[var(--gradient-flow)]" />

            <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-8 lg:px-10">
                <div className="fade-in mb-8">
                    <div className="max-w-2xl">
                        <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-highlight">
                            Como funciona
                        </p>
                        <h2 className="notebook-heading-medium font-editorial text-4xl leading-none sm:text-5xl lg:text-[2.75rem]">
                            <span className="font-editorial-italic">Simples</span> e rápido, com direção desde o primeiro contato.
                        </h2>
                    </div>
                </div>

                <div className="fade-in-soft fade-delay-1 relative">
                    <div className="grid items-stretch overflow-hidden rounded-card border border-night-border bg-night-elevated shadow-[0_36px_100px_-72px_rgba(0,0,0,.95)] lg:grid-cols-3">
                        {steps.map((step, index) => {
                            return (
                                <article key={step.title} className={`fade-in group relative flex h-full min-w-0 flex-col border-b border-night-border last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 ${index === 1 ? "fade-delay-1" : index === 2 ? "fade-delay-2" : ""}`}>
                                    <div className="notebook-flow-media relative flex aspect-[1.5] shrink-0 items-center justify-center overflow-hidden bg-night-soft">
                                        <div className="absolute inset-0 opacity-12 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:13px_13px]" />
                                        <img
                                            src={step.image}
                                            alt={step.imageAlt}
                                            className={`relative z-10 h-[86%] w-[86%] object-contain transition-transform duration-500 group-hover:-translate-y-3 ${step.imageScale}`}
                                        />
                                    </div>

                                    <div className="notebook-flow-body flex min-h-[172px] flex-1 flex-col bg-night-elevated p-6">
                                        <h3 className="notebook-flow-title mb-2 min-h-[54px] text-[1.35rem] font-extrabold leading-tight text-white">{step.title}</h3>
                                        <p className="line-clamp-5 text-base font-medium leading-relaxed text-white/62">{step.description}</p>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Flow;
