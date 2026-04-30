import website from "../assets/website.png";
import { BrainCircuit, SlidersHorizontal, WandSparkles } from "lucide-react";

const AboutUs = () => {
  const features = [
    {
      icon: SlidersHorizontal,
      title: "Rota personalizada",
      text: "Nível, rotina e objetivo entram na recomendação.",
    },
    {
      icon: WandSparkles,
      title: "Método prático",
      text: "Foco em fala, escuta e estrutura sem excesso.",
    },
    {
      icon: BrainCircuit,
      title: "Acompanhamento",
      text: "Você entende o que priorizar antes de começar.",
    },
  ];

  const points = [
    {
      title: "Criar o diagnóstico",
      text: "Você conta onde está, o que tentou antes e onde quer chegar.",
    },
    {
      title: "Definir prioridades",
      text: "A conversa separa urgência real, habilidade principal e rotina possível.",
    },
    {
      title: "Escolher o caminho",
      text: "Depois vem a recomendação: prática, estrutura, conversação e base.",
    },
  ];

  return (
    <section id="sobre" className="grain-overlay relative overflow-hidden bg-[#0f0d0b] py-16 text-white sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(207,95,43,.18),transparent_28rem),radial-gradient(circle_at_82%_18%,rgba(185,223,244,.11),transparent_26rem)]" />
      <div className="paper-dot absolute -left-8 top-20 h-36 w-36 rounded-full opacity-20" />
      <div className="container mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="fade-in mb-10 grid gap-8 lg:grid-cols-[.62fr_1fr] lg:items-start">
          <div className="fade-in">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#ffdc58]">
              Método ImSchool
            </p>
            <h2 className="font-editorial text-4xl leading-[0.95] text-white sm:text-5xl lg:text-[4.2rem]">
              <span className="font-editorial-italic">Sobre</span> nós.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className={`fade-in border-l border-white/14 pl-5 ${index === 1 ? "fade-delay-1" : index === 2 ? "fade-delay-2" : ""}`}>
                  <Icon className="mb-5 h-5 w-5 text-white/72" />
                  <h3 className="mb-2 text-sm font-extrabold text-white">{feature.title}</h3>
                  <p className="text-sm font-medium leading-relaxed text-white/48">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="fade-in-soft fade-delay-2 relative overflow-hidden rounded-[1.7rem] border border-white/12 bg-[#12100d] p-4 shadow-[0_40px_110px_-70px_rgba(0,0,0,.95)] sm:p-5 lg:p-6">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="relative grid gap-6 lg:grid-cols-[.34fr_.66fr]">
            <aside className="relative z-10">
              <div className="mb-8 flex items-center gap-3">
                <div>
                  <p className="text-xl font-bold leading-none">Nossa Plataforma</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/42">Diagnóstico de rota</p>
                </div>
              </div>

              <p className="max-w-xs text-sm font-medium leading-relaxed text-white/58">
                A página vira uma triagem visual: menos promessa solta, mais contexto para indicar um caminho de estudo que caiba na vida real.
              </p>

              <a href="#contato" className="mt-8 inline-flex rounded-full border border-white/18 px-4 py-2 text-xs font-extrabold text-white transition-colors hover:bg-white hover:text-black">
                Abrir diagnóstico
              </a>

              <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
                {points.map((point, index) => {
                  return (
                    <div key={point.title} className={`py-4 ${index === points.length - 1 ? "text-white" : "text-white/76"}`}>
                      <div className="flex items-center gap-3">
                        <p className="text-sm font-extrabold">{point.title}</p>
                      </div>
                      {index === points.length - 1 && (
                        <p className="mt-3 text-xs font-medium leading-relaxed text-white/46">{point.text}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </aside>

            <div className="relative min-h-[360px] overflow-hidden rounded-[1.2rem] bg-black lg:min-h-[560px]">
              <img
                src={website}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
