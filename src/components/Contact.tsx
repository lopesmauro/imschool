import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, Send } from "lucide-react";

const Contact = () => {
    const phoneNumber = "+559294921844";
    const googleFormUrl = "";
    const fieldClass = "w-full rounded-[.60rem] border border-brand/24 bg-white px-4 py-3 text-stone-900 shadow-[inset_0_1px_0_rgba(255,255,255,.75)] outline-none transition placeholder:text-stone-400 focus:border-brand focus:bg-white focus:shadow-[0_0_0_4px_rgba(184,82,40,.10)]";
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        goal: "",
        challenge: "",
    });

    const updateField = (field: keyof typeof form, value: string) => {
        setForm((current) => ({ ...current, [field]: value }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const message = [
            "Oi! Quero começar meu diagnóstico gratuito de inglês.",
            "",
            `Nome: ${form.name}`,
            `Email: ${form.email}`,
            `Telefone: ${form.phone}`,
            `Objetivo: ${form.goal}`,
            `Maior dificuldade: ${form.challenge}`,
        ].join("\n");

        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    };

    return (
        <section
            id="contato"
            className="notebook-section relative z-30 overflow-hidden bg-paper py-16 sm:py-20 lg:py-18"
        >
            <div className="absolute left-0 top-0 h-28 w-full " />
            <div className="paper-dot absolute right-[-3rem] top-24 h-44 w-44 rounded-full opacity-50" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand/16 via-highlight/14 to-transparent" />
            <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-8 lg:px-10">
                <div className="fade-in mb-8 grid gap-5 lg:grid-cols-[.72fr_1fr] lg:items-end">
                    <div>
                        <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-brand">
                            Começar
                        </p>
                        <h2 className="notebook-heading-large font-heading text-4xl font-medium leading-none text-black sm:text-5xl lg:text-[3.1rem]">
                            Comece seu <span className="font-editorial-italic">diagnóstico</span> de inglês agora.
                        </h2>
                    </div>
                </div>

                <div className="grid gap-5 lg:grid-cols-[.75fr_1.25fr] lg:items-start">
                    <div className="fade-in-soft fade-delay-1 rounded-card bg-brand p-5 text-white">

                        <h3 className="text-[1.65rem] font-extrabold leading-none">Gratuito. Sem compromisso.</h3>
                        <div className="mt-6 space-y-3 text-sm text-white/70">
                            <div className="flex gap-3 border-t border-white/10 pt-4">
                                <span className="font-extrabold text-white">01</span>
                                <p>Sem pagamento e sem pressão de venda.</p>
                            </div>
                            <div className="flex gap-3 border-t border-white/10 pt-4">
                                <span className="font-extrabold text-white">02</span>
                                <p>Você não escolhe plano nesta etapa.</p>
                            </div>
                            <div className="flex gap-3 border-t border-white/10 pt-4">
                                <span className="font-extrabold text-white">03</span>
                                <p>O envio abre automaticamente o WhatsApp com suas respostas.</p>
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
                                <ArrowUpRight className="h-4 w-4 text-highlight" />
                            </a>
                        )}
                    </div>

                    <form id="consultoria-form" onSubmit={handleSubmit} className="fade-in-soft fade-delay-2 relative min-w-0 overflow-hidden rounded-[1.35rem] border border-brand/30 bg-paper p-4 sm:p-5">
                        <div className="absolute inset-x-0 top-0 h-1 bg-[var(--gradient-highlight)]" />
                        <div className="paper-dot pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-45" />

                        <div className="relative grid sm:grid-cols-2 gap-4">
                            <label className="space-y-2">
                                <span className="text-sm font-extrabold text-brand-dark">Nome</span>
                                <input
                                    required
                                    value={form.name}
                                    onChange={(event) => updateField("name", event.target.value)}
                                    className={fieldClass}
                                    placeholder="Seu nome"
                                />
                            </label>

                            <label className="space-y-2">
                                <span className="text-sm font-extrabold text-brand-dark">Telefone</span>
                                <input
                                    required
                                    value={form.phone}
                                    onChange={(event) => updateField("phone", event.target.value)}
                                    className={fieldClass}
                                    placeholder="WhatsApp"
                                />
                            </label>
                        </div>

                        <label className="relative block space-y-2 mt-4">
                            <span className="text-sm font-extrabold text-brand-dark">Email</span>
                            <input
                                required
                                type="email"
                                value={form.email}
                                onChange={(event) => updateField("email", event.target.value)}
                                className={fieldClass}
                                placeholder="voce@email.com"
                            />
                        </label>

                        <label className="relative block space-y-2 mt-4">
                            <span className="text-sm font-extrabold text-brand-dark">Qual seu objetivo com o inglês?</span>
                            <select
                                required
                                value={form.goal}
                                onChange={(event) => updateField("goal", event.target.value)}
                                className={fieldClass}
                            >
                                <option value="">Selecione uma opção</option>
                                <option>Conversar com mais segurança</option>
                                <option>Trabalho e reuniões</option>
                                <option>Viagem ou mudança de país</option>
                                <option>Retomar do básico</option>
                                <option>Outro objetivo</option>
                            </select>
                        </label>

                        <label className="relative block space-y-2 mt-4">
                            <span className="text-sm font-extrabold text-brand-dark">O que mais te trava hoje?</span>
                            <textarea
                                required
                                rows={4}
                                value={form.challenge}
                                onChange={(event) => updateField("challenge", event.target.value)}
                                className={`${fieldClass} resize-none`}
                                placeholder="Conte rapidamente sua dificuldade principal"
                            />
                        </label>

                        <div className="relative mt-6">
                            <button
                                type="submit"
                                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-highlight px-6 py-3 font-extrabold text-brand-dark shadow-[0_10px_26px_rgba(255,220,88,.22)] transition-all hover:-translate-y-0.5 hover:bg-[var(--highlight-dark)] sm:w-auto"
                            >
                                Iniciar diagnóstico
                                <Send className="h-4 w-4 text-brand" />
                            </button>
                        </div>

                        <p className="relative mt-4 text-xs font-medium text-stone-500">
                            Depois da análise, você recebe a recomendação mais adequada para evoluir no inglês.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
