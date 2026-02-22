import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = [
    "Musique",
    "Sport",
    "Art",
    "Business",
    "Gastronomie",
    "Technologie",
];

const featuredEvents = [
    {
        id: 1,
        title: "Festival International de Cotonou",
        date: "15-20 Décembre 2024",
        location: "Cotonou, Bénin",
        price: "À partir de 5000 FCFA",
        category: "Musique",
        image: "/images/evenements/event1.webp",
    },
    {
        id: 2,
        title: "Conférence Tech Africa",
        date: "10-12 Janvier 2025",
        location: "Cotonou, Bénin",
        price: "15000 FCFA",
        category: "Technologie",
        image: "/images/evenements/event2.webp",
    },
    {
        id: 3,
        title: "Exposition d'Art Contemporain",
        date: "5-20 Février 2025",
        location: "Ouidah, Bénin",
        price: "Gratuit",
        category: "Art",
        image: "/images/evenements/event3.webp",
    },
    {
        id: 4,
        title: "Marché des Saveurs du Bénin",
        date: "25-28 Mars 2025",
        location: "Porto-Novo, Bénin",
        price: "2000 FCFA",
        category: "Gastronomie",
        image: "/images/evenements/event4.webp",
    },
];

export default function EventsFilter() {
    const [keyword, setKeyword] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: true,
        });
    }, []);

    const filteredEvents = featuredEvents.filter((event) => {
        const matchKeyword = event.title
            .toLowerCase()
            .includes(keyword.toLowerCase());
        const matchCategory =
            selectedCategory === "" || event.category === selectedCategory;
        return matchKeyword && matchCategory;
    });

    return (
        <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 pb-16">
                {/* Titre */}
                <h2
                    className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white transition-colors duration-300"
                    data-aos="fade-down"
                    data-aos-delay="100"
                >
                    Évènements à venir
                </h2>

                {/* Barre de filtres */}
                <div
                    className="flex flex-col md:flex-row gap-3 mb-12 max-w-3xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <input
                        type="text"
                        placeholder="Rechercher un événement..."
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600
                               bg-white dark:bg-gray-800
                               text-gray-800 dark:text-gray-100
                               placeholder-gray-400 dark:placeholder-gray-500
                               focus:outline-none focus:ring-2 focus:ring-[#008651] dark:focus:ring-[#4ade80]
                               transition-colors duration-300"
                    />
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600
                               bg-white dark:bg-gray-800
                               text-gray-800 dark:text-gray-100
                               focus:outline-none focus:ring-2 focus:ring-[#008651] dark:focus:ring-[#4ade80]
                               transition-colors duration-300"
                    >
                        <option value="">Toutes les catégories</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                    <button
                        className="px-6 py-3 bg-[#008651] dark:bg-[#16a34a] text-white rounded-lg font-medium
                                   hover:bg-[#229951] dark:hover:bg-[#15803d] transition-colors duration-200"
                    >
                        Rechercher
                    </button>
                </div>

                {/* Grille d'événements */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((event, index) => (
                            <Link
                                key={event.id}
                                href="#"
                                className="bg-white dark:bg-gray-800
                                       border border-transparent dark:border-gray-700
                                       rounded-xl overflow-hidden shadow-lg hover:shadow-xl
                                       dark:shadow-gray-900/40 dark:hover:shadow-gray-900/60
                                       transition-all duration-300 group"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {/* Image */}
                                <div className="h-48 relative overflow-hidden">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Overlay sombre au hover en dark mode */}
                                    <div className="absolute inset-0 bg-black/0 dark:bg-black/10 group-hover:bg-black/10 dark:group-hover:bg-black/25 transition-all duration-300" />

                                    {/* Badge catégorie */}
                                    <div className="absolute top-4 right-4 bg-[#008651] dark:bg-[#16a34a] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                                        {event.category}
                                    </div>
                                </div>

                                {/* Contenu */}
                                <div className="p-5">
                                    <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white transition-colors duration-300">
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 mb-2 text-sm transition-colors duration-300">
                                        📅 {event.date}
                                    </p>
                                    <p className="text-gray-500 dark:text-gray-400 mb-3 text-sm transition-colors duration-300">
                                        📍 {event.location}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <p className="text-[#008651] dark:text-[#4ade80] font-semibold text-sm transition-colors duration-300">
                                            {event.price}
                                        </p>
                                        <span className="text-xs text-gray-400 dark:text-gray-500 group-hover:text-[#008651] dark:group-hover:text-[#4ade80] transition-colors duration-200 font-medium">
                                            Voir →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div
                            className="col-span-4 text-center py-16 text-gray-400 dark:text-gray-500"
                            data-aos="zoom-in"
                        >
                            <p className="text-5xl mb-4">🔍</p>
                            <p className="text-lg">Aucun événement trouvé</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
