import { Link } from "@inertiajs/react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dark, setDark] = useState(false);
    const navRef = useRef(null);

    // Init dark mode depuis localStorage
    useEffect(() => {
        const saved = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
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

    const menuVariants = {
        hidden: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } },
        visible: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeInOut" } },
    };

    const itemVariants = {
        hidden: (custom) => ({ opacity: 0, x: -20, transition: { duration: 0.2 } }),
        visible: (custom) => ({ opacity: 1, x: 0, transition: { delay: custom * 0.1, duration: 0.3 } }),
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }
        if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isMenuOpen]);

    return (
        <nav ref={navRef} className="bg-white dark:bg-slate-800 shadow-sm dark:shadow-gray-800/50 fixed w-full z-50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="flex justify-between h-16">

                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/">
                            <img
                                src="/images/logo_beninbouge.png"
                                alt="BeninBouge Logo"
                                className="h-10 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Menu desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        {[
                            { href: "/events", label: "Projets Structurels" },
                            { href: "/categories", label: "Actualités" },
                            { href: "/about", label: "Événements" },
                        ].map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="text-gray-700 dark:text-gray-300 hover:text-[#229951] dark:hover:text-[#4ade80] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                                {label}
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            className="bg-[#008651] dark:bg-[#16a34a] text-white px-4 py-2 rounded-lg hover:bg-[#229951] dark:hover:bg-[#15803d] transition-colors text-sm font-medium"
                        >
                            Contact
                        </Link>

                        {/* Toggle dark mode */}
                        <motion.button
                            onClick={toggleDark}
                            whileTap={{ scale: 0.88 }}
                            whileHover={{ scale: 1.08 }}
                            className="ml-2 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-yellow-300 transition-colors duration-300"
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
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14A7 7 0 0012 5z" />
                                    </motion.svg>
                                ) : (
                                    <motion.svg
                                        key="moon"
                                        initial={{ opacity: 0, rotate: 60, scale: 0.6 }}
                                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                        exit={{ opacity: 0, rotate: -60, scale: 0.6 }}
                                        transition={{ duration: 0.25 }}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                                    </motion.svg>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>

                    {/* Boutons mobile : dark toggle + hamburger */}
                    <div className="md:hidden flex items-center gap-2">
                        <motion.button
                            onClick={toggleDark}
                            whileTap={{ scale: 0.88 }}
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-yellow-300 transition-colors duration-300"
                            aria-label="Basculer le mode sombre"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {dark ? (
                                    <motion.svg key="sun-m" initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} transition={{ duration: 0.2 }}
                                        className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14A7 7 0 0012 5z" />
                                    </motion.svg>
                                ) : (
                                    <motion.svg key="moon-m" initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} transition={{ duration: 0.2 }}
                                        className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                                    </motion.svg>
                                )}
                            </AnimatePresence>
                        </motion.button>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-[#229951] hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition-colors"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Ouvrir le menu</span>
                            <motion.svg
                                className="h-6 w-6"
                                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </motion.svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu mobile */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-300"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {[
                                { href: "/events", label: "Projets Structurels" },
                                { href: "/categories", label: "Actualités" },
                                { href: "/about", label: "Événements" },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.href}
                                    custom={index}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                >
                                    <Link
                                        href={item.href}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-[#229951] dark:hover:text-[#4ade80] hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div custom={3} variants={itemVariants} initial="hidden" animate="visible" exit="hidden" className="pt-4">
                                <Link
                                    href="/contact"
                                    className="block w-full text-center bg-[#008651] dark:bg-[#16a34a] text-white px-4 py-2 rounded-lg hover:bg-[#229951] dark:hover:bg-[#15803d] transition-colors text-base font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}