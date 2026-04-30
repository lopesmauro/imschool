import { ClipboardList, Compass, MessagesSquare } from "lucide-react";
import criarImage from "../assets/criar.png";
import lupaImage from "../assets/lupa.png";
import timeImage from "../assets/time.png";

const Flow = () => {
    const steps = [
        {
            icon: ClipboardList,
            image: criarImage,
            imageAlt: "Ilustração do cadastro inicial",
            title: "Você se cadastra",
            description: "Nome, email, telefone e algumas respostas sobre seu objetivo com o inglês.",
        },
        {
            icon: MessagesSquare,
            image: lupaImage,
            imageAlt: "Ilustração da análise do perfil do aluno",
            title: "Eu analiso seu momento",
            description: "As respostas ajudam a entender sua urgência, seu nível e os bloqueios que aparecem na rotina.",
        },
        {
            icon: Compass,
            image: timeImage,
            imageAlt: "Ilustração da direção recomendada para estudo",
            title: "A reunião vira direção",
            description: "Na conversa, você recebe uma orientação clara e eu explico o melhor próximo passo.",
        },
    ];

    return (
        <section id="processo" className="relative overflow-hidden bg-black py-16 text-white sm:py-20 lg:py-24">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#000_0%,#000_36%,#351306_58%,#8d3717_78%,#cf5f2b_100%)]" />

            <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
                <div className="fade-in mb-10 grid gap-5 lg:grid-cols-[.7fr_1fr] lg:items-end">
                    <div>
                        <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-[#ffdc58]">
                            Como funciona
                        </p>
                        <h2 className="font-editorial text-4xl leading-none sm:text-5xl lg:text-[3.1rem]">
                            <span className="font-editorial-italic">Sequência</span> curta, com intenção em cada etapa.
                        </h2>
                    </div>
                    <p className="max-w-2xl text-lg font-medium leading-relaxed text-white/62 lg:pb-1">
                        Três passos simples para transformar um primeiro contato em uma conversa útil, com contexto e direção.
                    </p>
                </div>

                <div className="fade-in-soft fade-delay-1 relative">
                    <div className="grid items-stretch overflow-hidden rounded-[1.45rem] border border-[#2b2926] bg-[#171513] shadow-[0_36px_100px_-72px_rgba(0,0,0,.95)] lg:grid-cols-3">
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <article key={step.title} className={`fade-in group relative flex h-full min-w-0 flex-col border-b border-[#2b2926] last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 ${index === 1 ? "fade-delay-1" : index === 2 ? "fade-delay-2" : ""}`}>
                                    <div className="relative flex aspect-[1.36] shrink-0 items-center justify-center overflow-hidden bg-[#201d19]">
                                        <div className="absolute inset-0 opacity-12 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:13px_13px]" />
                                            {step.image ? (
                                                <img
                                                    src={step.image}
                                                    alt={step.imageAlt}
                                                    className="relative z-10 h-[72%] w-[72%] object-contain transition-transform duration-500 group-hover:-translate-y-3"
                                                />
                                            ) : (
                                                <div className="relative z-10 grid h-32 w-32 place-items-center rounded-[2rem] border border-[#34302b] bg-[#2a2621] shadow-[0_22px_50px_-34px_rgba(0,0,0,.8)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-3deg] sm:h-36 sm:w-36">
                                                    <Icon className="h-9 w-9 text-[#ffdc58]" />
                                                    <span className="absolute -right-3 -top-3 grid h-10 w-10 place-items-center rounded-full bg-[#cf5f2b] text-sm font-extrabold text-white">
                                                        0{index + 1}
                                                    </span>
                                                </div>
                                            )}
                                    </div>

                                    <div className="flex min-h-[205px] flex-1 flex-col bg-[#171513] p-6 sm:p-7">
                                        <h3 className="mb-3 min-h-[64px] text-2xl font-extrabold leading-tight text-white">{step.title}</h3>
                                        <p className="line-clamp-5 text-lg font-medium leading-relaxed text-white/62">{step.description}</p>
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
