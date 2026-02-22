import { Head, Link } from "@inertiajs/react";
import AppLayout from "../../Layouts/AppLayout";
import { useEffect } from "react";
import { animate } from "animejs";
import HeroSection from "./HeroSection";
import RechercheSection from "./RechercheSection";
import EvenementPasse from "./EvenementPasse";
import Service from "./Service";
import NewsletterSection from "./Newsletter";
import FormContact from "./FormContact";

export default function Home() {

    useEffect(() => {
        animate(".mon-element", {
            translateY: 10,
            duration: 1000,
        });
    }, []);

    return (
        <AppLayout>
            <Head title="Accueil - EventMaster" />

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
