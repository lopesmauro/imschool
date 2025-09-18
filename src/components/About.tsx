import {
    Brain,
    Target,
    Zap,
    Users,
    Award,
    TrendingUp,
} from 'lucide-react';

const About2 = () => {
    return (
        <div className="py-24 pt-20 relative container mx-auto px-20 max-w-7xl" >
            < div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-50/30 to-transparent rounded-3xl" ></div >

            <div className="relative text-center mb-16">
                <p className="text-gray-500 uppercase tracking-wide font-semibold">Comece agora</p>

                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    O que nos torna diferentess
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Não seguimos fórmulas prontas. Criamos uma experiência única que transforma
                    a maneira como você aprende e vive o inglês.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 relative">
                <div className="group relative">
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-amber-100 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100/50 to-yellow-100/30 rounded-full -translate-y-16 translate-x-16"></div>

                        <div className="relative">
                            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <Zap className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Aprendizado Acelerado</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Técnicas neurocientíficas que otimizam a retenção e aceleram
                                o processo natural de aquisição do idioma.
                            </p>

                            <div className="flex items-center gap-4 pt-4 border-t border-amber-100">
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-amber-600" />
                                    <span className="text-sm font-semibold text-gray-700">3x mais rápido</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Brain className="w-4 h-4 text-amber-600" />
                                    <span className="text-sm font-semibold text-gray-700">95% retenção</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="group relative lg:-mt-8">
                    <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-yellow-400/10 rounded-full -translate-y-16 translate-x-16"></div>

                        <div className="absolute top-6 right-6 bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                            DESTAQUE
                        </div>

                        <div className="relative">
                            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <Target className="w-10 h-10 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Foco no Seu Objetivo</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Currículo personalizado baseado no seu perfil: negócios,
                                viagem, intercâmbio ou crescimento profissional.
                            </p>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                                    <span className="text-sm text-gray-300">Análise de perfil personalizada</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                                    <span className="text-sm text-gray-300">Conteúdo adaptado ao seu setor</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                                    <span className="text-sm text-gray-300">Simulações de situações reais</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="group relative">
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-amber-100 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100/50 to-yellow-100/30 rounded-full -translate-y-16 translate-x-16"></div>

                        <div className="relative">
                            <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <Brain className="w-10 h-10 text-amber-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mentalidade Global</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Desenvolvemos não apenas fluência, mas confiança para
                                se comunicar em qualquer contexto internacional.
                            </p>

                            <div className="flex flex-wrap gap-2 pt-4 border-t border-amber-100">
                                <div className="flex items-center gap-1 bg-amber-100 px-3 py-1 rounded-full">
                                    <Award className="w-3 h-3 text-amber-600" />
                                    <span className="text-xs font-medium text-amber-800">Certificação Internacional</span>
                                </div>
                                <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                                    <Users className="w-3 h-3 text-gray-600" />
                                    <span className="text-xs font-medium text-gray-700">Network Global</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>)
}
//Adicionar elementos do base44 abaixo desses
export default About2