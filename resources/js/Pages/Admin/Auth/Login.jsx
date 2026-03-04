import { useState, useEffect, useRef } from "react";
import { Link, useForm, Head } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import "../../../../css/admin/auth.css";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    // Reset password field on unmount (sécurité)
    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const [dark, setDark] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [focused, setFocused] = useState(null);
    const blob1 = useRef(null);
    const blob2 = useRef(null);
    const blob3 = useRef(null);

    // Init dark mode
    useEffect(() => {
        const saved = localStorage.getItem("theme");
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches;
        const isDark = saved ? saved === "dark" : prefersDark;
        setDark(isDark);
        document.documentElement.classList.toggle("dark", isDark);
    }, []);

    const toggleDark = () => {
        const next = !dark;
        setDark(next);
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
    };

    // Blobs flottants GSAP
    useEffect(() => {
        if (blob1.current)
            gsap.to(blob1.current, {
                x: 40,
                y: -30,
                duration: 6,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        if (blob2.current)
            gsap.to(blob2.current, {
                x: -30,
                y: 40,
                duration: 8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 1,
            });
        if (blob3.current)
            gsap.to(blob3.current, {
                x: 20,
                y: 20,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 2,
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/login/store", {
            onSuccess: () => {
                // Optionnel: message de succès ou redirection
                console.log("Connexion réussie");
            },
            onError: (errors) => {
                console.log("Erreurs:", errors);
                // Focus sur le premier champ en erreur
                if (errors.email) {
                    document.getElementById("email")?.focus();
                } else if (errors.password) {
                    document.getElementById("password")?.focus();
                }
            },
        });
    };

    // Variants animations
    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
    };

    return (
        <div
            className="min-h-screen relative overflow-hidden bg-gray-50 dark:bg-slate-950 transition-colors duration-500 flex items-center justify-center px-4"
            style={{ fontFamily: "'Sora', sans-serif" }}
        >
            <Head>
                <title>Benin Bouge - Connexion administrateur</title>
                <meta
                    name="description"
                    content="Espace administration Benin Bouge"
                />
                <link rel="icon" href="/images/icon_beninbouge.png" />
            </Head>

            {/* ... (vos blobs et motifs restent identiques) ... */}

            {/* ── Bouton dark mode ── */}
            <motion.button
                onClick={toggleDark}
                whileTap={{ scale: 0.88 }}
                whileHover={{ scale: 1.08 }}
                className="fixed top-5 right-5 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-yellow-300 shadow-sm transition-colors duration-300"
                aria-label="Basculer le mode sombre"
            >
                <AnimatePresence mode="wait" initial={false}>
                    {dark ? (
                        <motion.svg
                            key="sun"
                            initial={{ opacity: 0, rotate: -60, scale: 0.6 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 60, scale: 0.6 }}
                            transition={{ duration: 0.25 }}
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14A7 7 0 0012 5z"
                            />
                        </motion.svg>
                    ) : (
                        <motion.svg
                            key="moon"
                            initial={{ opacity: 0, rotate: 60, scale: 0.6 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: -60, scale: 0.6 }}
                            transition={{ duration: 0.25 }}
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                            />
                        </motion.svg>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* ── Carte principale ── */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full max-w-md"
            >
                <div className="card-glow bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 transition-colors duration-300">
                    {/* Logo + titre */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center mb-8"
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-3 mb-6 group"
                        >
                            <img
                                src="/images/logo_beninbouge.png"
                                alt="Benin Bouge"
                                className="h-10 w-auto"
                            />
                        </Link>

                        <div className="flex items-center justify-center gap-2 mb-2">
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
                                Administration
                            </span>
                        </div>
                    </motion.div>

                    {/* Message d'erreur global (optionnel) */}
                    <AnimatePresence>
                        {Object.keys(errors).length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl"
                            >
                                <p className="text-xs text-red-600 dark:text-red-400">
                                    Veuillez corriger les erreurs ci-dessous
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Formulaire */}
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-5"
                    >
                        {/* Email */}
                        <motion.div variants={itemVariants}>
                            <label
                                className="block text-xs font-semibold text-gray-600 dark:text-slate-400 mb-1.5"
                                htmlFor="email"
                            >
                                Adresse e-mail
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500 pointer-events-none">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </span>
                                <input
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    onFocus={() => setFocused("email")}
                                    onBlur={() => setFocused(null)}
                                    placeholder="admin@beninbouge.com"
                                    className={`login-input pl-11 ${errors.email ? "input-error" : ""}`}
                                    autoComplete="email"
                                    disabled={processing}
                                />
                            </div>
                            <AnimatePresence>
                                {errors.email && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="mt-1.5 text-xs text-red-500 flex items-center gap-1"
                                    >
                                        <span>⚠</span> {errors.email}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Mot de passe */}
                        <motion.div variants={itemVariants}>
                            <div className="flex justify-between items-center mb-1.5">
                                <label
                                    className="text-xs font-semibold text-gray-600 dark:text-slate-400"
                                    htmlFor="password"
                                >
                                    Mot de passe
                                </label>
                                <Link
                                    href="/admin/forgot-password"
                                    className="text-xs font-semibold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors underline underline-offset-2"
                                >
                                    Mot de passe oublié ?
                                </Link>
                            </div>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500 pointer-events-none">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                        />
                                    </svg>
                                </span>
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    onFocus={() => setFocused("password")}
                                    onBlur={() => setFocused(null)}
                                    placeholder="••••••••••"
                                    className={`login-input pl-11 pr-12 ${errors.password ? "input-error" : ""}`}
                                    autoComplete="current-password"
                                    disabled={processing}
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-300 transition-colors"
                                    tabIndex={-1}
                                    aria-label={
                                        showPassword
                                            ? "Masquer le mot de passe"
                                            : "Afficher le mot de passe"
                                    }
                                >
                                    {showPassword ? (
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            <AnimatePresence>
                                {errors.password && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="mt-1.5 text-xs text-red-500 flex items-center gap-1"
                                    >
                                        <span>⚠</span> {errors.password}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Se souvenir */}
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-3"
                        >
                            <button
                                type="button"
                                onClick={() =>
                                    setData("remember", !data.remember)
                                }
                                className={`relative w-11 h-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 ${data.remember ? "bg-green-500" : "bg-gray-200 dark:bg-slate-700"}`}
                                role="switch"
                                aria-checked={data.remember}
                                disabled={processing}
                            >
                                <span
                                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${data.remember ? "translate-x-5" : "translate-x-0"}`}
                                />
                            </button>
                            <span className="text-sm text-gray-600 dark:text-slate-400 select-none">
                                Se souvenir de moi
                            </span>
                        </motion.div>

                        {/* Bouton submit */}
                        <motion.div variants={itemVariants}>
                            <button
                                type="submit"
                                disabled={processing}
                                className="btn-login"
                            >
                                {processing ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg
                                            className="animate-spin h-4 w-4 text-white"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v8z"
                                            />
                                        </svg>
                                        Connexion en cours…
                                    </span>
                                ) : (
                                    <span className="flex items-center justify-center gap-2">
                                        Se connecter
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2.5}
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </span>
                                )}
                            </button>
                        </motion.div>
                    </form>
                </div>

                {/* Lien retour accueil */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center mt-5"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-slate-500 hover:text-green-600 dark:hover:text-green-400 transition-colors font-medium"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        Retour à l'accueil
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}
