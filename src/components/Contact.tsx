import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, Send } from "lucide-react";

const Contact = () => {
    const phoneNumber = "+5492214098715";
    const googleFormUrl = "";
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        goal: "",
        challenge: "",
        availability: "",
    });

    const updateField = (field: keyof typeof form, value: string) => {
        setForm((current) => ({ ...current, [field]: value }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const message = [
            "Oi! Quero participar da consultoria de inglês.",
            "",
            `Nome: ${form.name}`,
            `Email: ${form.email}`,
            `Telefone: ${form.phone}`,
            `Objetivo: ${form.goal}`,
            `Maior dificuldade: ${form.challenge}`,
            `Melhor horário: ${form.availability}`,
        ].join("\n");

        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    };

    return (
        <section
            id="contato"
            className="relative overflow-hidden bg-[#fbf8f1] py-16 sm:py-20 lg:py-24"
        >
            <div className="absolute left-0 top-0 h-28 w-full " />
            <div className="paper-dot absolute right-[-3rem] top-24 h-44 w-44 rounded-full opacity-50" />
            <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
                <div className="fade-in mb-10 grid gap-5 lg:grid-cols-[.72fr_1fr] lg:items-end">
                    <div>
                        <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-[#b85228]">
                            Começar
                        </p>
                        <h2 className="font-editorial text-4xl leading-none text-black sm:text-5xl lg:text-[3.65rem]">
                            Abra seu <span className="font-editorial-italic">diagnóstico</span> de inglês.
                        </h2>
                    </div>
                </div>

                <div className="grid gap-5 lg:grid-cols-[.75fr_1.25fr] lg:items-start">
                    <div className="fade-in-soft fade-delay-1 sketch-card rounded-[1.5rem] border border-black/10 bg-[#17120d] p-5 text-white">

                        <h3 className="text-3xl font-extrabold leading-none">Sem checkout. Sem pressão.</h3>
                        <div className="mt-7 space-y-4 text-sm text-white/70">
                            <div className="flex gap-3 border-t border-white/10 pt-4">
                                <span className="font-extrabold text-white">01</span>
                                <p>Você não escolhe plano nesta página.</p>
                            </div>
                            <div className="flex gap-3 border-t border-white/10 pt-4">
                                <span className="font-extrabold text-white">02</span>
                                <p>A recomendação vem depois da análise do seu momento.</p>
                            </div>
                            <div className="flex gap-3 border-t border-white/10 pt-4">
                                <span className="font-extrabold text-white">03</span>
                                <p>O envio abre o WhatsApp com tudo preenchido.</p>
                            </div>
                        </div>

                        {googleFormUrl && (
                            <a
                                href={googleFormUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-flex items-center gap-2 border-b border-white pb-1 text-sm font-semibold text-white"
                            >
                                Preencher pelo Google Forms
                                <ArrowUpRight className="w-4 h-4" />
                            </a>
                        )}
                    </div>

                    <form id="consultoria-form" onSubmit={handleSubmit} className="fade-in-soft fade-delay-2 min-w-0 rounded-[1.5rem] border border-black/10 bg-white p-4 sm:p-6">

                        <div className="grid sm:grid-cols-2 gap-4">
                            <label className="space-y-2">
                                <span className="text-sm font-extrabold text-stone-800">Nome</span>
                                <input
                                    required
                                    value={form.name}
                                    onChange={(event) => updateField("name", event.target.value)}
                                    className="w-full rounded-[.9rem] border border-black/10 bg-[#fbf8f1] px-4 py-3 outline-none transition focus:border-[#cf5f2b] focus:bg-white"
                                    placeholder="Seu nome"
                                />
                            </label>

                            <label className="space-y-2">
                                <span className="text-sm font-extrabold text-stone-800">Telefone</span>
                                <input
                                    required
                                    value={form.phone}
                                    onChange={(event) => updateField("phone", event.target.value)}
                                    className="w-full rounded-[.9rem] border border-black/10 bg-[#fbf8f1] px-4 py-3 outline-none transition focus:border-[#cf5f2b] focus:bg-white"
                                    placeholder="WhatsApp"
                                />
                            </label>
                        </div>

                        <label className="block space-y-2 mt-4">
                            <span className="text-sm font-extrabold text-stone-800">Email</span>
                            <input
                                required
                                type="email"
                                value={form.email}
                                onChange={(event) => updateField("email", event.target.value)}
                                className="w-full rounded-[.9rem] border border-black/10 bg-[#fbf8f1] px-4 py-3 outline-none transition focus:border-[#cf5f2b] focus:bg-white"
                                placeholder="voce@email.com"
                            />
                        </label>

                        <label className="block space-y-2 mt-4">
                            <span className="text-sm font-extrabold text-stone-800">Qual seu objetivo com o inglês?</span>
                            <select
                                required
                                value={form.goal}
                                onChange={(event) => updateField("goal", event.target.value)}
                                className="w-full rounded-[.9rem] border border-black/10 bg-[#fbf8f1] px-4 py-3 outline-none transition focus:border-[#cf5f2b] focus:bg-white"
                            >
                                <option value="">Selecione uma opção</option>
                                <option>Conversar com mais segurança</option>
                                <option>Trabalho e reuniões</option>
                                <option>Viagem ou mudança de país</option>
                                <option>Retomar do básico</option>
                                <option>Outro objetivo</option>
                            </select>
                        </label>

                        <label className="block space-y-2 mt-4">
                            <span className="text-sm font-extrabold text-stone-800">O que mais te trava hoje?</span>
                            <textarea
                                required
                                rows={4}
                                value={form.challenge}
                                onChange={(event) => updateField("challenge", event.target.value)}
                                className="w-full resize-none rounded-[.9rem] border border-black/10 bg-[#fbf8f1] px-4 py-3 outline-none transition focus:border-[#cf5f2b] focus:bg-white"
                                placeholder="Conte rapidamente sua dificuldade principal"
                            />
                        </label>

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3 font-extrabold text-white transition-all hover:-translate-y-0.5 hover:bg-stone-800 sm:w-auto"
                            >
                                Enviar cadastro
                                <Send className="w-4 h-4" />
                            </button>
                        </div>

                        <p className="mt-4 text-xs text-stone-500">
                            O envio abre uma conversa no WhatsApp com suas respostas preenchidas.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
