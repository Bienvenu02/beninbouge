import { Head } from "@inertiajs/react";
import AppLayout from "../../Layouts/AppLayout";
import HeroSection from "./components/HeroSection";
import RechercheSection from "./components/RechercheSection";
import EvenementPasse from "./components/EvenementPasse";
import Service from "./components/Service";
import NewsletterSection from "./components/Newsletter";
import FormContact from "./components/FormContact";

export default function Home() {
    return (
        <AppLayout>
            <Head title="Accueil - Benin Bouge" />

            {/* Hero Section */}
            <HeroSection />

            {/* Categories Section */}
            <RechercheSection />

            {/* Featured Events */}
            <EvenementPasse />

            {/* Service */}
            <Service />

            {/* Newsletter */}
            <NewsletterSection />

            {/* Formulaire de contact */}
            <FormContact />
        </AppLayout>
    );
}
