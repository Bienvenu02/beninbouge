import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ContactSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

    const fadeUp = (delay = 0) => ({
        hidden: { opacity: 0, y: 28 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
        },
    });

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="relative bg-gray-50 dark:bg-gray-950 py-16 px-4 sm:px-6 md:px-12 transition-colors duration-300"
            style={{ fontFamily: "'Sora', sans-serif" }}
        >
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');

                .contact-input {
                    width: 100%;
                    padding: 10px 14px;
                    border-radius: 12px;
                    border: 2px solid #e5e7eb;
                    background: #f9fafb;
                    font-family: 'Sora', sans-serif;
                    font-size: 14px;
                    color: #111827;
                    outline: none;
                    transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
                }
                .contact-input::placeholder { color: #9ca3af; }
                .contact-input:focus {
                    border-color: #22c55e;
                    background: #fff;
                    box-shadow: 0 0 0 4px rgba(34,197,94,0.10);
                }

                .dark .contact-input {
                    background: #1e293b;
                    border-color: #334155;
                    color: #f1f5f9;
                }
                .dark .contact-input::placeholder { color: #64748b; }
                .dark .contact-input:focus {
                    border-color: #4ade80;
                    background: #1e293b;
                    box-shadow: 0 0 0 4px rgba(74,222,128,0.12);
                }

                .info-card {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    padding: 16px;
                    background: #fff;
                    border-radius: 18px;
                    border: 1.5px solid #f3f4f6;
                    box-shadow: 0 2px 16px rgba(0,0,0,0.05);
                    transition: box-shadow 0.25s, transform 0.25s, background 0.3s, border-color 0.3s;
                    text-decoration: none;
                }
                .info-card:hover {
                    box-shadow: 0 8px 32px rgba(34,197,94,0.13);
                    transform: translateY(-2px);
                }
                .dark .info-card {
                    background: #1e293b;
                    border-color: #334155;
                    box-shadow: 0 2px 16px rgba(0,0,0,0.3);
                }
                .dark .info-card:hover {
                    box-shadow: 0 8px 32px rgba(74,222,128,0.10);
                }

                .submit-btn {
                    width: 100%;
                    padding: 11px;
                    border-radius: 12px;
                    border: none;
                    background: linear-gradient(135deg, #16a34a, #22c55e);
                    color: #fff;
                    font-family: 'Sora', sans-serif;
                    font-size: 14px;
                    font-weight: 700;
                    letter-spacing: 0.03em;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .submit-btn::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: rgba(255,255,255,0.15);
                    transform: translateX(-100%);
                    transition: transform 0.35s ease;
                }
                .submit-btn:hover::after { transform: translateX(0); }
                .submit-btn:hover { transform: translateY(-1px); box-shadow: 0 10px 28px rgba(22,163,74,0.3); }
            `}</style>

            <div className="max-w-4xl mx-auto">
                {/* En-tête */}
                <motion.div
                    variants={fadeUp(0)}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mb-10"
                >
                    <h2
                        className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300"
                        style={{ letterSpacing: "-0.02em" }}
                    >
                        Travaillons{" "}
                        <span
                            style={{
                                background:
                                    "linear-gradient(135deg, #16a34a, #4ade80)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            ensemble
                        </span>
                    </h2>
                    <p
                        className="text-sm text-gray-500 dark:text-slate-400 transition-colors duration-300"
                        style={{ maxWidth: 480, margin: "0 auto" }}
                    >
                        Une question, une suggestion ou un partenariat ? Notre
                        équipe est à votre écoute et vous répond en moins de
                        48h.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* ── Colonne gauche : infos ── */}
                    <div className="flex flex-col gap-4">
                        {/* WhatsApp */}
                        <motion.a
                            variants={fadeUp(0.1)}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            href="https://wa.me/2290196127764"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="info-card"
                        >
                            <div
                                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                                style={{ background: "#22c55e" }}
                            >
                                <svg
                                    className="w-7 h-7 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-gray-900 dark:text-white text-sm mb-0.5 transition-colors duration-300">
                                    WhatsApp
                                </p>
                                <p className="text-xs text-gray-400 dark:text-slate-500">
                                    Réponse rapide garantie
                                </p>
                            </div>
                            <svg
                                className="w-5 h-5 text-gray-300 dark:text-slate-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </motion.a>

                        {/* Email */}
                        <motion.a
                            variants={fadeUp(0.2)}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            href="mailto:bienvenuhounye05@gmail.com"
                            className="info-card"
                        >
                            <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="#16a34a"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-gray-900 dark:text-white text-sm mb-0.5 transition-colors duration-300">
                                    Email
                                </p>
                                <p className="text-xs text-gray-400 dark:text-slate-500">
                                    contact@beninquibouge.bj
                                </p>
                            </div>
                            <svg
                                className="w-5 h-5 text-gray-300 dark:text-slate-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </motion.a>

                        {/* Localisation */}
                        <motion.div
                            variants={fadeUp(0.3)}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="info-card"
                            style={{ cursor: "default" }}
                        >
                            <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="#16a34a"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-gray-900 dark:text-white text-sm mb-0.5 transition-colors duration-300">
                                    Adresse
                                </p>
                                <p className="text-xs text-gray-400 dark:text-slate-500">
                                    Cotonou, Bénin
                                </p>
                            </div>
                        </motion.div>

                        {/* Note politique */}
                        <motion.p
                            variants={fadeUp(0.4)}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="text-xs text-gray-400 dark:text-slate-500 italic px-1 transition-colors duration-300"
                        >
                            Nous ne spammons pas ! Consultez notre{" "}
                            <a
                                href="#"
                                className="text-green-600 dark:text-green-400 font-bold underline underline-offset-[3px] hover:text-green-700 dark:hover:text-green-300 transition-colors"
                            >
                                politique de confidentialité
                            </a>
                            .
                        </motion.p>
                    </div>

                    {/* ── Colonne droite : formulaire ── */}
                    <motion.div
                        variants={fadeUp(0.2)}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="rounded-2xl p-5 sm:p-6 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 transition-colors duration-300"
                        style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.07)" }}
                    >
                        <form noValidate className="flex flex-col gap-4">
                            {/* Nom + Prénom */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label
                                        className="block text-xs font-semibold text-gray-600 dark:text-slate-400 mb-1.5 transition-colors duration-300"
                                        htmlFor="nom"
                                    >
                                        Nom
                                    </label>
                                    <input
                                        type="text"
                                        id="nom"
                                        name="nom"
                                        placeholder="Doe"
                                        className="contact-input"
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-xs font-semibold text-gray-600 dark:text-slate-400 mb-1.5 transition-colors duration-300"
                                        htmlFor="prenom"
                                    >
                                        Prénom
                                    </label>
                                    <input
                                        type="text"
                                        id="prenom"
                                        name="prenom"
                                        placeholder="John"
                                        className="contact-input"
                                    />
                                </div>
                            </div>

                            {/* Téléphone */}
                            <div>
                                <label
                                    className="block text-xs font-semibold text-gray-600 dark:text-slate-400 mb-1.5 transition-colors duration-300"
                                    htmlFor="numero"
                                >
                                    Téléphone
                                </label>
                                <input
                                    type="tel"
                                    id="numero"
                                    name="numero"
                                    placeholder="+229 01 XX XX XX"
                                    className="contact-input"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    className="block text-xs font-semibold text-gray-600 dark:text-slate-400 mb-1.5 transition-colors duration-300"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john.doe@example.com"
                                    className="contact-input"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    className="block text-xs font-semibold text-gray-600 dark:text-slate-400 mb-1.5 transition-colors duration-300"
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Parlez-nous de votre projet ou de votre question…"
                                    className="contact-input"
                                    style={{ resize: "none" }}
                                />
                            </div>

                            {/* Bouton */}
                            <button type="submit" className="submit-btn">
                                Envoyer le message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
