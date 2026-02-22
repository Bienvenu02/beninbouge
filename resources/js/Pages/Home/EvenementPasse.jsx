import { Link } from "@inertiajs/react";

const pastEvents = [
    {
        id: 1,
        title: "Festival International de Cotonou",
        date: "15-20 Décembre 2023",
        location: "Cotonou, Bénin",
        price: "À partir de 5000 FCFA",
        category: "Musique",
        image: "/images/evenements/eventp1.webp",
    },
    {
        id: 2,
        title: "Conférence Tech Africa",
        date: "10-12 Janvier 2024",
        location: "Cotonou, Bénin",
        price: "15000 FCFA",
        category: "Technologie",
        image: "/images/evenements/eventp2.webp",
    },
    {
        id: 3,
        title: "Exposition d'Art Contemporain",
        date: "5-20 Février 2024",
        location: "Ouidah, Bénin",
        price: "Gratuit",
        category: "Art",
        image: "/images/evenements/eventp3.webp",
    },
    {
        id: 4,
        title: "Marché des Saveurs du Bénin",
        date: "25-28 Mars 2024",
        location: "Porto-Novo, Bénin",
        price: "2000 FCFA",
        category: "Gastronomie",
        image: "/images/evenements/eventp4.webp",
    },
];

export default function EvenementPasse() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-24 bg-white dark:bg-slate-900 transition-colors duration-300 rounded-xl shadow-lg p-8">

            {/* En-tête */}
            <div
                className="flex justify-between items-center mb-8"
                data-aos="fade-up"
            >
                <h2 className="text-xl md:text-2xl font-bold">
                    Événements Récents
                </h2>
                <Link
                    href="/events"
                    className="text-[#008651] hover:text-[#229951] font-semibold transition-colors"
                >
                    Voir tout →
                </Link>
            </div>

            {/* Grille */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pastEvents.map((event, index) => (
                    <Link
                        key={event.id}
                        href={`/events/${event.id}`}
                        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        {/* Image avec overlay grisé pour indiquer "passé" */}
                        <div className="h-48 relative overflow-hidden">
                            <img
                                src={event.image}
                                alt={event.title}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            {/* Badge "Terminé" */}
                            <div className="absolute top-4 left-4 bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                                Terminé
                            </div>
                            <div className="absolute top-4 right-4 bg-[#008651] text-white px-3 py-1 rounded-full text-sm">
                                {event.category}
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="font-bold text-lg mb-2">
                                {event.title}
                            </h3>
                            <p className="text-gray-600 mb-2">
                                📅 {event.date}
                            </p>
                            <p className="text-gray-600 mb-2">
                                📍 {event.location}
                            </p>
                            <p className="text-[#008651] font-semibold">
                                {event.price}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}