import { Users, Award } from 'lucide-react';
import aboutImage from '../assets/aboutus.jpeg';

const AboutUs = () => {
    const highlights = [
        {
            icon: Users,
            label: 'Compromisso com os alunos',
            text: 'Quase uma década dedicada a apoiar estudantes na conquista de seus objetivos pessoais e profissionais através da educação de qualidade.',
        },
        {
            icon: Award,
            label: 'Excelência reconhecida',
            text: 'Nossa metodologia inovadora já foi premiada diversas vezes e continua transformando vidas ao oferecer aprendizado eficaz e duradouro.',
        },
    ];

    return (
        <section className="relative py-24 bg-gradient-to-b from-white via-amber-50/30 to-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side - Mockup da plataforma */}
                    <div className="relative flex justify-center items-center">
                        {/* Fundo flutuante com gradiente e sombra igual aos cards do Flow */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-3xl shadow-2xl transform rotate-2 scale-105"></div>
                        
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl ">
                            <img
                                src={aboutImage}
                                alt="Nossa história e método de ensino"
                                className="w-full h-full object-contain object-top transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                                    <Award className="w-5 h-5 text-black" />
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-gray-900">7+</p>
                                    <p className="text-xs text-gray-600">Anos de experiência</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Conteúdo */}
                    <div className="flex flex-col justify-center">
                        <p className="text-yellow-600 uppercase tracking-wide font-semibold mb-3">
                            Sobre Nós
                        </p>

                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Transformando vidas através da educação
                        </h2>

                        <div className="flex flex-col gap-6 mb-8">
                            {highlights.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div key={index} className="flex items-start gap-4">
                                        <Icon className="w-12 h-12 text-yellow-500 mt-1" />
                                        <div>
                                            <p className="text-xl font-bold text-gray-900">{item.label}</p>
                                            <p className="text-sm text-gray-600">{item.text}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <button className="group w-fit bg-yellow-500 text-black font-semibold px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                            Conheça nossa história
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
