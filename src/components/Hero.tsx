import { ArrowRight } from "lucide-react";
import { Shimmer } from "@/components/ai/shimmer";
import { scrollToSection } from "@/lib/scrollToSection";

const Hero = () => {
  return (
    <section className="grain-overlay relative min-h-[100svh] overflow-hidden bg-black text-white">
      <img
        src="/wizard.png"
        alt="Colagem de monumentos e referências culturais de diferentes países"
        className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-[67%_center]"
      />
      <div className="absolute inset-0 bg-night-panel/18" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/88 via-black/18 to-transparent" />
      <div className="paper-dot absolute left-[7%] top-[19%] hidden h-24 w-24 rounded-full opacity-30 md:block" />

      <div className="notebook-hero-content relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-10 lg:pb-18">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(420px,500px)] lg:items-end">
          <div className="max-w-2xl">

            <h1 className="notebook-hero-title hero-reveal font-heading max-w-[13ch] text-[3.35rem] font-medium leading-[0.98] tracking-normal text-white sm:text-7xl lg:text-[4.5rem]">
              Aprenda{" "}
              <Shimmer
                as="span"
                duration={1.1}
                repeatDelay={2.2}
                spread={8}
                baseGradient="var(--gradient-highlight)"
                className="font-editorial-italic pb-[0.07em] [--color-background:#fff] drop-shadow-[0_8px_18px_rgba(0,0,0,.2)]"
              >
                inglês
              </Shimmer>{" "}
              do jeito certo. Sem perder tempo.
            </h1>

            <p className="hero-reveal-delay mt-5 max-w-lg text-base font-medium leading-relaxed text-white/86 sm:text-lg lg:text-base">
              Pare de tentar adivinhar o que estudar. Comece com um diagnóstico completo do seu nível de inglês, dos seus objetivos e da sua rotina.
            </p>

            <div className="hero-reveal-delay mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contato"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection("contato");
                }}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                Iniciar diagnóstico
                <ArrowRight className="h-4 w-4 text-highlight" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
