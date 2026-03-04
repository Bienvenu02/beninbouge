// resources/js/Layouts/AppLayout.jsx
import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function AppLayout({ children }) {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Head>
                <title>
                    Benin Bouge - Votre plateforme d'événements au Bénin
                </title>
                <meta
                    name="description"
                    content="Découvrez et créez des événements au Bénin avec Benin Bouge, votre plateforme d'événements incontournable."
                />
                <link rel="icon" href="/images/icon_beninbouge.png" />
            </Head>

            {/* Navigation */}
            <Navbar />

            {/* Contenu principal avec padding-top pour éviter que la navbar fixed ne cache le contenu */}
            <main className="pt-16">{children}</main>

            {/* Footer simple pour compléter */}
            <Footer />
        </div>
    );
}
