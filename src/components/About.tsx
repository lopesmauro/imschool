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
      <div className="paper-dot absolute -left-8 top-20 z-0 h-36 w-36 rounded-full opacity-20" />
      <div className="container relative z-30 mx-auto max-w-6xl px-4 sm:px-8 lg:px-10">
        <div className="fade-in-soft fade-delay-2 grid gap-10 lg:grid-cols-[.42fr_.58fr] lg:items-stretch">
          <div className="relative z-10 max-w-md py-2">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-brand">
              Método ImSchool
            </p>
            <h2 className="notebook-heading-large font-editorial text-4xl leading-[0.95] text-white sm:text-5xl lg:text-[3.55rem]">
              Inglês na <span className="font-editorial-italic">prática</span>, sem complicação.
            </h2>

            <p className="mt-10 max-w-xs text-sm font-medium leading-relaxed text-white/58">
              Antes de qualquer matrícula, você recebe uma direção clara: sem promessas vazias, sem método genérico e sem pressão para comprar.
            </p>

            <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
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
          </div>

          <div className="notebook-platform-preview relative min-h-[360px] overflow-hidden rounded-[1.1rem] bg-black lg:min-h-[560px]">
            <img
              src={website}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/16 via-transparent to-white/4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
