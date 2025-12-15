import { ArrowRight } from "lucide-react";

const Hero = () => {
  const phoneNumber = "+5492216045067";
  const message = "🚀 Oi! Vi o site e quero começar agora minhas aulas de inglês. Quais são os próximos passos?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative min-h-screen bg-white flex items-center overflow-hidden">
      {/* Imagem de fundo - Responsividade melhorada */}
      <img
        src="/bg-hero.jpg"
        alt="Hero background"
        className="absolute top-0 left-0 w-full h-full object-cover lg:w-1/2 lg:right-0 lg:left-auto transition-all duration-500"
      />

      {/* Overlay escuro suave apenas no mobile */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent lg:hidden" />

      {/* Gradiente branco no desktop para suavizar transição */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent hidden lg:block" />

      {/* Conteúdo */}
      <div className="container mx-auto px-6 sm:px-10 lg:px-20 py-16 sm:py-24 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna de Texto */}
          <div className="space-y-6 text-left lg:text-left text-white lg:text-black drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.35)] lg:drop-shadow-none">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight tracking-tight">
              Aprenda <span className="text-yellow-500">Inglês</span> de forma natural e eficiente
            </h1>

            <p className="sm:text-white/85 lg:text-gray-500 sm:text-lg lg:text-lg leading-relaxed max-w-xl lg:mx-0">
              Metodologia comprovada, aulas personalizadas e acompanhamento individual para você alcançar a fluência.
            </p>

            {/* Botão de WhatsApp - Ajuste para ser mais acessível no celular */}
            <div className="flex flex-col sm:flex-row justify-left lg:justify-start gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 text-sm sm:text-base font-light text-black bg-yellow-400 rounded-md shadow-md hover:bg-yellow-300 transition-all hover:shadow-lg"
              >
                Comece agora
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Estatísticas - Organizado para o mobile com mais espaçamento */}
            <div className="flex flex-wrap sm:flex-nowrap justify-left lg:justify-start gap-8 sm:gap-12 pt-12 mt-12 border-t border-black/10">
              <div className="text-center">
                <p className="text-xl sm:text-3xl font-semibold">2.500+</p>
                <p className="text-xs sm:text-sm sm:text-white/85 lg:text-gray-500 mt-1">Alunos formados</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-3xl font-semibold">98%</p>
                <p className="text-xs sm:text-sm sm:text-white/85 lg:text-gray-500 mt-1">Taxa de aprovação</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-3xl font-semibold">8 anos</p>
                <p className="text-xs sm:text-sm sm:text-white/85 lg:text-gray-500 mt-1">De experiência</p>
              </div>
            </div>
          </div>

          {/* Coluna de Imagem - Ajuste para mobile */}
          <div className="hidden lg:block">
            {/* Colocar a imagem ou ilustração que se encaixe bem */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
