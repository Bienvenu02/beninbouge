import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import AOS from "aos";
import "aos/dist/aos.css";

// Configuration de l'application Inertia.js
createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return pages[`./Pages/${name}.jsx`].default;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});

// Initialisation globale aos
AOS.init({
    once: true,
});
