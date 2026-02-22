import { useRef } from "react";
import { Link } from "@inertiajs/react";
import { motion, useInView } from "framer-motion";
import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaTiktok,
    FaYoutube,
    FaWhatsapp,
} from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
    { label: "Instagram", href: "https://instagram.com/beninbouge", icon: <FaInstagram className="w-5 h-5" />, color: "hover:bg-pink-600" },
    { label: "Facebook", href: "https://facebook.com/BeninBouge", icon: <FaFacebookF className="w-5 h-5" />, color: "hover:bg-blue-600" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/beninbouge/", icon: <FaLinkedinIn className="w-5 h-5" />, color: "hover:bg-blue-700" },
    { label: "TikTok", href: "https://www.tiktok.com/@beninbouge", icon: <FaTiktok className="w-5 h-5" />, color: "hover:bg-black" },
    { label: "YouTube", href: "https://www.youtube.com/@BeninBouge", icon: <FaYoutube className="w-5 h-5" />, color: "hover:bg-red-600" },
    { label: "WhatsApp", href: "https://www.whatsapp.com/channel/0029VawBRd9Ae5VzCgN1L23i", icon: <FaWhatsapp className="w-5 h-5" />, color: "hover:bg-green-600" },
    { label: "X (Twitter)", href: "https://x.com/BeninBouge", icon: <FaXTwitter className="w-5 h-5" />, color: "hover:bg-gray-700" },
];

const quickLinks = [
    { label: "Projets Structurels", href: "/about" },
    { label: "Actualités", href: "/contact" },
    { label: "Événements", href: "/faq" },
];

const contactInfo = [
    "contact@beninbouge.bj",
    "+229 01 97 67 77 54 / 01 66 61 78 78",
    "Cotonou, Bénin",
];

export default function Footer() {
    const footerRef = useRef(null);
    const isInView = useInView(footerRef, { once: true, margin: "-60px" });

    const fadeUp = (delay = 0) => ({
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1, y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
        },
    });

    const staggerChildren = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
    };

    const itemFade = {
        hidden: { opacity: 0, y: 12 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    };

    const iconPop = (i) => ({
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1, scale: 1,
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.4 + i * 0.06 },
        },
    });

    return (
        <footer ref={footerRef} className="bg-gray-900 text-white py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Grille principale */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Branding */}
                    <motion.div
                        variants={fadeUp(0)}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <motion.h3
                            className="text-xl font-bold mb-4"
                            style={{ color: "#229951" }}
                            whileHover={{ letterSpacing: "0.06em", transition: { duration: 0.3 } }}
                        >
                            BENIN BOUGE
                        </motion.h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Votre plateforme de référence pour la gestion d'événements au Bénin
                        </p>
                    </motion.div>

                    {/* Liens rapides */}
                    <motion.div
                        variants={fadeUp(0.1)}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">
                            Liens rapides
                        </h4>
                        <motion.ul
                            className="space-y-2"
                            variants={staggerChildren}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            {quickLinks.map(({ label, href }) => (
                                <motion.li key={label} variants={itemFade}>
                                    <Link
                                        href={href}
                                        className="text-gray-400 text-sm flex items-center gap-2 group transition-colors duration-200 hover:text-white w-fit"
                                    >
                                        <span
                                            className="inline-block w-3 h-px bg-gray-600 transition-all duration-300 group-hover:w-5 group-hover:bg-green-500"
                                        />
                                        {label}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        variants={fadeUp(0.2)}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">
                            Contact
                        </h4>
                        <motion.ul
                            className="space-y-2"
                            variants={staggerChildren}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            {contactInfo.map((info) => (
                                <motion.li
                                    key={info}
                                    variants={itemFade}
                                    className="text-gray-400 text-sm"
                                >
                                    {info}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>

                {/* Séparateur animé */}
                <motion.div
                    className="border-t border-gray-800 mt-8 pt-8"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <motion.p
                        className="text-center text-gray-500 text-xs uppercase tracking-widest mb-5"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.35 }}
                    >
                        Suivez-nous
                    </motion.p>

                    {/* Icônes sociales */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {socialLinks.map(({ label, href, icon, color }, i) => (
                            <motion.a
                                key={label}
                                href={href}
                                title={label}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={iconPop(i)}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.92 }}
                                className={`bg-gray-800 ${color} p-3 rounded-full transition-colors duration-200 text-white`}
                            >
                                {icon}
                            </motion.a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <motion.p
                        className="text-center text-gray-500 text-sm mt-6"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.9 }}
                    >
                        &copy; {new Date().getFullYear()} Benin Bouge. Tous droits réservés.
                    </motion.p>
                </motion.div>
            </div>
        </footer>
    );
}