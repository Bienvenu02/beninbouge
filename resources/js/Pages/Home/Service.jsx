import { Link } from "@inertiajs/react";
import { FaCog, FaGlobe } from "react-icons/fa";
import { MdEvent } from "react-icons/md";

const items = [
    {
        icon: <FaCog className="w-8 h-8" />,
        title: "Projets Privés et Publics",
        description: "Des initiatives locales qui font bouger le Bénin.",
        href: "/projets",
        active: false,
    },
    {
        icon: <MdEvent className="w-8 h-8" />,
        title: "Évènements",
        description: "Les rendez-vous qui rassemblent et font vibrer le Bénin.",
        href: "/events",
        active: false,
    },
    {
        icon: <FaGlobe className="w-8 h-8" />,
        title: "Actualités",
        description: "Le quotidien du béninois raconté par nous.",
        href: "/actualites",
        active: false,
    },
];

export default function AboutSection() {
    return (
        <section className="relative pt-14 overflow-hidden bg-gradient-to-br from-[#004d2e] via-[#006b3e] to-[#009a55] dark:bg-slate-800 dark:bg-none pb-20">

            {/* Cercles décoratifs en arrière-plan */}
            <div className="absolute top-[-80px] right-[-80px] w-72 h-72 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-[-60px] left-[-60px] w-56 h-56 bg-white/10 rounded-full blur-2xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Titre */}
                <h2
                    className="text-2xl md:text-3xl font-extrabold text-white text-center mb-8 italic"
                    data-aos="fade-down"
                >
                    Le média du Bénin qui se transforme et qui bouge
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* Image gauche */}
                    <div
                        className="w-full md:w-1/2"
                        data-aos="fade-right"
                        data-aos-delay="100"
                    >
                        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                            <img
                                src="/images/benin.webp"
                                alt="Bénin Bouge"
                                loading="lazy"
                                className="w-full h-[400px] object-cover"
                            />
                        </div>
                    </div>

                    {/* Items droite */}
                    <div className="w-full md:w-1/2 flex flex-col gap-5">
                        {items.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                data-aos="fade-left"
                                data-aos-delay={index * 150}
                                className={`flex items-start gap-5 px-6 py-5 rounded-2xl transition-all duration-300 group ${
                                    item.active
                                        ? "bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg"
                                        : "hover:bg-white/10"
                                }`}
                            >
                                {/* Icône */}
                                <div className="text-white mt-1 shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>

                                {/* Texte */}
                                <div>
                                    <h3 className="text-white font-extrabold text-lg uppercase tracking-wide mb-1 italic">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/80 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}