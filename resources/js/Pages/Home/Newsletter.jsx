import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";

export default function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const sectionRef = useRef(null);
    const blobRef1 = useRef(null);
    const blobRef2 = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    // GSAP floating blobs animation
    useEffect(() => {
        if (blobRef1.current && blobRef2.current) {
            gsap.to(blobRef1.current, {
                x: 30,
                y: -20,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
            gsap.to(blobRef2.current, {
                x: -20,
                y: 25,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 1,
            });
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1200));
        setLoading(false);
        setSubmitted(true);
    };

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.18 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-white py-24 px-6"
            style={{ fontFamily: "'Sora', sans-serif" }}
        >
            {/* Google Font Import */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&display=swap');

                .newsletter-input::placeholder { color: #a3b8a3; }
                .newsletter-input:focus { outline: none; box-shadow: 0 0 0 3px rgba(34,197,94,0.25); }

                .btn-inscription {
                    position: relative;
                    overflow: hidden;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }
                .btn-inscription::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: rgba(255,255,255,0.15);
                    transform: translateX(-100%);
                    transition: transform 0.35s ease;
                }
                .btn-inscription:hover::after { transform: translateX(0); }
                .btn-inscription:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(22,163,74,0.35); }
                .btn-inscription:active { transform: translateY(0); }

                .policy-link {
                    color: #16a34a;
                    font-weight: 700;
                    font-style: italic;
                    text-decoration: underline;
                    text-underline-offset: 3px;
                }
                .policy-link:hover { color: #15803d; }
            `}</style>

            {/* Decorative blobs */}
            <div
                ref={blobRef1}
                className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, #4ade80, #16a34a)" }}
            />
            <div
                ref={blobRef2}
                className="pointer-events-none absolute -bottom-20 right-0 w-96 h-96 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, #86efac, #22c55e)" }}
            />

            {/* Thin green top border accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-green-500 to-emerald-400" />

            <div className="relative max-w-6xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex flex-col lg:flex-row items-center gap-16"
                >
                    {/* Left: Text block */}
                    <div className="flex-1 max-w-xl">
                        {/* Pill badge */}
                        <motion.div variants={itemVariants}>
                            <span
                                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
                                style={{ background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0" }}
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
                                Newsletter
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={itemVariants}
                            className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 mb-5"
                            style={{ letterSpacing: "-0.02em" }}
                        >
                            Restez connectés au{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #16a34a, #4ade80)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Bénin
                            </span>{" "}
                            qui se transforme et qui Bouge
                        </motion.h2>

                        <motion.p
                            variants={itemVariants}
                            className="text-base font-semibold text-gray-700 mb-3"
                        >
                            Inscrivez-vous pour recevoir chaque mois des informations liées au Bénin qui Bouge
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-sm text-gray-400 italic"
                        >
                            Nous ne spammons pas ! Consultez notre{" "}
                            <a href="/politique-confidentialite" className="policy-link">
                                politique de confidentialité
                            </a>{" "}
                            pour plus d'informations.
                        </motion.p>
                    </div>

                    {/* Right: Form block */}
                    <motion.div variants={itemVariants} className="w-full lg:w-96">
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="text-center py-10 px-8 rounded-2xl"
                                style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}
                            >
                                <div className="text-5xl mb-4">🎉</div>
                                <h3 className="text-xl font-bold text-green-700 mb-2">Vous êtes inscrit(e) !</h3>
                                <p className="text-green-600 text-sm">
                                    Bienvenue dans la communauté du Bénin qui Bouge.
                                </p>
                            </motion.div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-4"
                            >
                                <div className="relative">
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Entrez votre adresse e-mail *"
                                        className="newsletter-input w-full px-5 py-4 rounded-2xl text-sm text-gray-800 bg-white transition-all duration-200"
                                        style={{
                                            border: "1.5px solid #d1fae5",
                                            boxShadow: "0 2px 12px rgba(34,197,94,0.08)",
                                            fontFamily: "'Sora', sans-serif",
                                        }}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="btn-inscription w-full py-4 rounded-2xl text-white font-bold text-sm tracking-wide"
                                    style={{
                                        background: loading
                                            ? "#4ade80"
                                            : "linear-gradient(135deg, #16a34a 0%, #22c55e 100%)",
                                        fontFamily: "'Sora', sans-serif",
                                        letterSpacing: "0.04em",
                                        cursor: loading ? "not-allowed" : "pointer",
                                    }}
                                >
                                    {loading ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                            </svg>
                                            Inscription en cours…
                                        </span>
                                    ) : (
                                        "Inscription ici"
                                    )}
                                </button>
                            </form>
                        )}

                        {/* Trust badges */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-6 flex items-center gap-6 justify-center"
                        >
                            {[
                                { icon: "🔒", text: "Données sécurisées" },
                                { icon: "📭", text: "Sans spam" },
                                { icon: "✉️", text: "1x / mois" },
                            ].map(({ icon, text }) => (
                                <div key={text} className="flex flex-col items-center gap-1">
                                    <span className="text-base">{icon}</span>
                                    <span className="text-xs text-gray-400 font-medium whitespace-nowrap">{text}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}