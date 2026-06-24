import { useState } from "react";
import website from "../assets/website.png";
import { ChevronDown } from "lucide-react";

const AboutUs = () => {
  const [activePoint, setActivePoint] = useState(0);

  const points = [
    {
      title: "Diagnóstico personalizado",
      text: "Uma conversa estratégica para entender nível, objetivos, dificuldades e rotina.",
    },
    {
      title: "Recomendação ideal",
      text: "A análise aponta o curso ou formato de aulas mais adequado para o seu momento.",
    },
    {
      title: "Inglês na prática",
      text: "Nada de aula padrão: a rota combina fala, escuta e estrutura sem complicação.",
    },
  ];

  return (
    <section id="sobre" className="notebook-section grain-overlay relative overflow-hidden bg-night py-16 text-white sm:py-20 lg:py-18">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(207,95,43,.18),transparent_28rem),radial-gradient(circle_at_82%_18%,rgba(185,223,244,.11),transparent_26rem)]" />
      <div className="paper-dot absolute -left-8 top-20 h-36 w-36 rounded-full opacity-20" />
      <div className="container mx-auto max-w-6xl px-4 sm:px-8 lg:px-10">
        <div className="fade-in mb-8">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-highlight">
              Método ImSchool
            </p>
            <h2 className="notebook-heading-large font-editorial text-4xl leading-[0.95] text-white sm:text-5xl lg:text-[3.55rem]">
              Inglês na <span className="font-editorial-italic">prática</span>, sem complicação.
            </h2>
          </div>
        </div>

        <div className="fade-in-soft fade-delay-2 relative overflow-hidden rounded-card border border-white/12 bg-night-panel p-4 shadow-[0_40px_110px_-70px_rgba(0,0,0,.95)] sm:p-5">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="relative grid gap-6 lg:grid-cols-[.34fr_.66fr]">
            <aside className="relative z-10">
              <div className="mb-6 mt-3 flex items-center gap-3">
                <div>
                  <p className="text-xl font-bold leading-none">Nossa Plataforma</p>
                </div>
              </div>

              <p className="max-w-xs text-sm font-medium leading-relaxed text-white/58">
                Antes de qualquer matrícula, você recebe uma direção clara: sem promessas vazias, sem método genérico e sem pressão para comprar.
              </p>

              <a href="#contato" className="mt-6 inline-flex min-h-10 items-center justify-center rounded-full bg-brand px-5 py-2 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-dark">
                Abrir diagnóstico
              </a>

              <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
                {points.map((point, index) => {
                  const isActive = activePoint === index;

                  return (
                    <div key={point.title} className={isActive ? "text-white" : "text-white/62"}>
                      <button
                        type="button"
                        aria-expanded={isActive}
                        aria-controls={`platform-point-${index}`}
                        onClick={() => setActivePoint(index)}
                        className="flex w-full items-center justify-between gap-4 py-3.5 text-left transition-colors hover:text-white"
                      >
                        <span className="text-sm font-extrabold">{point.title}</span>
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isActive ? "rotate-180 text-highlight" : ""}`}
                        />
                      </button>
                      <div
                        id={`platform-point-${index}`}
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                      >
                        <div className="overflow-hidden">
                          <p className="pb-4 pr-6 text-xs font-medium leading-relaxed text-white/58">{point.text}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </aside>

            <div className="notebook-platform-preview relative min-h-[360px] overflow-hidden rounded-[1.1rem] bg-black lg:min-h-[460px]">
              <img
                src={website}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center opacity-95"
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
