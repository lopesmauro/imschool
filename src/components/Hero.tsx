import { ArrowRight } from "lucide-react";

const Hero = () => {
  const phoneNumber = "+5492216045067";
  const message = "🚀 Oi! Vi o site e quero começar agora minhas aulas de inglês. Quais são os próximos passos?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="sm:rounded-b-2xl relative min-h-screen bg-white flex items-center overflow-hidden">
      {/* Imagem de fundo */}
      <img
        src="/bg-hero.jpg"
        alt="Hero background"
        className="absolute top-0 left-0 w-full h-full object-cover lg:w-1/2 lg:right-0 lg:left-auto transition-all duration-500"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent lg:hidden" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent hidden lg:block" />

      <div className="container mx-auto px-6 sm:px-10 lg:px-20 py-16 sm:py-24 max-w-7xl relative z-10 h-full min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna de Texto */}
          <div className="space-y-6 text-left mb-20 lg:mb-0">
            <h1 className="text-5xl sm:text-5xl lg:text-6xl text-white lg:text-black font-semibold leading-tight tracking-tight">
              Aprenda <span className="text-yellow-500 shimmer-text">Inglês</span> de forma natural e eficiente<span className="text-yellow-500">.</span>
            </h1>

            <p className="text-white/85 lg:text-gray-500 text-lg leading-relaxed max-w-xl">
              Metodologia comprovada, aulas personalizadas e acompanhamento individual para você alcançar a fluência.
            </p>

            <div className="flex justify-left lg:justify-start gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-black bg-yellow-400 rounded-md shadow-sm hover:bg-yellow-300 transition-all hover:shadow-lg"
              >
                Comece agora
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* ESTATÍSTICAS - Ajustadas para colar embaixo no mobile */}
        <div className="
    /* Mobile: Colado no fundo */
    absolute bottom-0 left-0 w-full px-6 pb-8 
    /* Desktop: Volta para o fluxo normal abaixo do texto */
    lg:relative lg:bottom-auto lg:left-auto lg:w-auto lg:px-0 lg:pb-0 lg:mt-16
    
    text-white lg:text-black
">
          {/* Borda como elemento separado (visível apenas em Desktop) */}
          <div className="hidden lg:block h-[1px] bg-black/10 w-2/4" />

          <div className="flex justify-between lg:justify-start gap-4 sm:gap-12 mt-8">
            <div>
              <p className="text-xl sm:text-3xl font-semibold">2.500+</p>
              <p className="text-[10px] sm:text-sm text-white/70 lg:text-gray-500 uppercase tracking-wider">Alunos</p>
            </div>
            <div>
              <p className="text-xl sm:text-3xl font-semibold">98%</p>
              <p className="text-[10px] sm:text-sm text-white/70 lg:text-gray-500 uppercase tracking-wider">Aprovação</p>
            </div>
            <div>
              <p className="text-xl sm:text-3xl font-semibold">8 anos</p>
              <p className="text-[10px] sm:text-sm text-white/70 lg:text-gray-500 uppercase tracking-wider">Experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;