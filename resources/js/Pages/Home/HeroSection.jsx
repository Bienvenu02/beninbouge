import { useState, useEffect } from "react";

const images = [
    "/images/accueil/image1.webp",
    "/images/accueil/image2.webp",
    "/images/accueil/image3.webp",
    "/images/accueil/image4.webp",
];

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const promises = images.map((src) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = resolve;
            });
        });
        Promise.all(promises).then(() => setImagesLoaded(true));
    }, []);

    useEffect(() => {
        if (!imagesLoaded) return; // on démarre le slider seulement après chargement
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [imagesLoaded]);

    return (
        // hauteur fixe sur la section, sinon les absolute n'ont pas de référence
        <section className="relative bg-white dark:bg-slate-900 text-white overflow-hidden min-h-[600px] md:min-h-[700px] md:pt-20 p-8">

            {/* Skeleton — fond sombre pendant le chargement */}
            <div className={`absolute inset-0 bg-gray-900 transition-opacity duration-700 z-10 ${
                    imagesLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
            >
                {/* Shimmer en inline style pour éviter les problèmes Tailwind */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
                        animation: "shimmer 2s infinite",
                    }}
                />
            </div>

            {/* Images en fondu */}
            {images.map((img, index) => (
                <div
                    key={img}
                    loading="lazy"
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                    style={{
                        backgroundImage: `url(${img})`,
                        opacity: imagesLoaded && index === currentIndex ? 1 : 0,
                    }}
                />
            ))}

            {/* Overlay sombre */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* Contenu */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                <div className="text-center" data-aos="fade-down" data-aos-delay="200">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Découvrez les Meilleurs Événements au Bénin
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 text-gray-200">
                        Concerts, Conférences, Expositions et plus encore
                    </p>
                    
                </div>

                {/* Indicateurs (points) */}
                <div className="flex justify-center gap-2 mt-10" data-aos="fade-down" data-aos-delay="200">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${
                                index === currentIndex
                                    ? "bg-white w-6"
                                    : "bg-white/40 w-2.5"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}