import aboutImage from "../assets/aboutus.jpeg";
import { ChevronLeft, ChevronRight, RotateCw, Lock } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-amber-50/30 to-white overflow-hidden">
      <div className="container mx-auto px-6 sm:px-10 lg:px-20 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Side - Conteúdo */}
          <div className="order-1 lg:order-1 text-center lg:text-left flex flex-col justify-center">
            <p className="text-yellow-600 uppercase tracking-wide font-semibold mb-3 text-sm sm:text-base">
              Sobre Nós
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-snug sm:leading-tight">
              Transformando vidas através da educação
            </h2>

            <div className="flex flex-col gap-3 mb-8 sm:mb-10">
              <div className="flex items-start gap-4 sm:gap-5 text-left">
                <div>
                  <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                    A imschool nasceu da vontade de transformar o ensino de inglês no Brasil. Acreditamos que aprender um idioma deve ser uma experiência natural, envolvente e adaptada às necessidades de cada aluno.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-5 text-left">
                <div>
                  <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                    Nossa plataforma combina tecnologia de ponta com metodologias pedagógicas comprovadas, oferecendo aulas ao vivo, materiais interativos e acompanhamento personalizado.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-5 text-left">
                <div>
                  <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                    Com professores qualificados e uma comunidade ativa de estudantes, criamos o ambiente ideal para você conquistar a fluência.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Imagem dentro do navegador */}
          <div className="relative flex justify-center items-center order-2 lg:order-2">
            <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-3xl shadow-2xl transform rotate-1 sm:rotate-2 scale-105"></div>

            {/* Navegador simulado estilo Chrome macOS */}
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-900">
              {/* Barra superior: Botões de controle + Aba */}
              <div className="flex items-center gap-3 px-4 py-2.5 bg-gray-100 border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-700">
                {/* Botões de Controle do macOS */}
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" />
                </div>

                {/* Aba ativa */}
                <div className="flex-1 flex items-center gap-2 bg-white rounded-t-lg px-4 py-1.5 max-w-xs shadow-sm dark:bg-gray-900 dark:text-white">
                  <Lock className="w-3 h-3 text-gray-500 dark:text-gray-300" />
                  <span className="text-xs text-gray-700 truncate dark:text-white">imschool</span>
                </div>
              </div>

              {/* Barra de endereço */}
              <div className="flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                {/* Botões de navegação */}
                <div className="flex items-center gap-1">
                  <button className="p-1.5 rounded-full hover:bg-gray-100 transition-colors dark:hover:bg-gray-700">
                    <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  </button>
                  <button className="p-1.5 rounded-full hover:bg-gray-100 transition-colors dark:hover:bg-gray-700">
                    <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                  </button>
                  <button className="p-1.5 rounded-full hover:bg-gray-100 transition-colors ml-1 dark:hover:bg-gray-700">
                    <RotateCw className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  </button>
                </div>

                {/* Barra de URL */}
                <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 hover:bg-gray-200 transition-colors dark:bg-gray-800 dark:hover:bg-gray-700">
                  <Lock className="w-4 h-4 text-gray-500 dark:text-gray-300" />
                  <span className="text-sm text-gray-700 dark:text-gray-400">app.imschool.com.br</span>
                </div>
              </div>

              {/* Conteúdo - Imagem */}
              <div className="relative w-full h-[calc(100%-88px)] overflow-hidden">
                <img
                  src={aboutImage}
                  alt="Nossa história e método de ensino"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
