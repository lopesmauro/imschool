import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="grain-overlay relative min-h-[820px] overflow-hidden bg-black text-white sm:min-h-[880px] lg:min-h-[calc(100svh+140px)]">
      <img
        src="/bg-hero.jpg"
        alt="Aluno estudando inglês durante uma rotina de aprendizado"
        className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-[67%_center]"
      />
      <div className="absolute inset-0 bg-[#120f0c]/18" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,15,12,.9)_0%,rgba(18,15,12,.64)_34%,rgba(18,15,12,.16)_68%,rgba(18,15,12,.34)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/88 via-black/18 to-transparent" />
      <div className="paper-dot absolute left-[7%] top-[19%] hidden h-24 w-24 rounded-full opacity-30 md:block" />

      <div className="relative z-10 mx-auto flex min-h-[820px] max-w-7xl flex-col justify-end px-4 pb-28 pt-24 sm:min-h-[880px] sm:px-8 sm:pb-28 lg:min-h-[calc(100svh+140px)] lg:px-12 lg:pb-48">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(420px,500px)] lg:items-end">
          <div className="max-w-2xl">

            <h1 className="hero-reveal font-editorial max-w-[12ch] text-[3.7rem] leading-[0.98] tracking-normal text-white sm:text-7xl lg:text-[5.65rem]">
              <span className="font-editorial-italic gold-reflection">Inglês</span> certo. Sem chute.
            </h1>

            <p className="hero-reveal-delay mt-5 max-w-xl text-base font-medium leading-relaxed text-white/86 sm:text-lg">
              Uma conversa curta para mapear seu nível, destravar o objetivo certo e indicar o caminho antes de qualquer matrícula.
            </p>

            <div className="hero-reveal-delay mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contato"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#cf5f2b] px-6 py-3 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 hover:bg-[#ef7941]"
              >
                Fazer diagnóstico
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
