// resources/js/Pages/Admin/Dashboard.jsx
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";
import { usePage } from "@inertiajs/react";
import AdminLayout from "../../../Layouts/AdminLayout";

const stats = [
    {
        label: "Événements",
        value: "24",
        change: "+3 ce mois",
        up: true,
        color: "from-green-400 to-green-600",
        icon: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
            </svg>
        ),
    },
    {
        label: "Utilisateurs",
        value: "1 240",
        change: "+128 ce mois",
        up: true,
        color: "from-blue-400 to-blue-600",
        icon: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </svg>
        ),
    },
    {
        label: "Abonnés newsletter",
        value: "3 580",
        change: "+47 cette semaine",
        up: true,
        color: "from-purple-400 to-purple-600",
        icon: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
            </svg>
        ),
    },
    {
        label: "Actualités publiées",
        value: "86",
        change: "-2 vs mois dernier",
        up: false,
        color: "from-orange-400 to-orange-600",
        icon: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
            </svg>
        ),
    },
];

const recentEvents = [
    {
        title: "Festival International de Cotonou",
        date: "15-20 Déc 2024",
        category: "Musique",
        status: "À venir",
    },
    {
        title: "Conférence Tech Africa",
        date: "10-12 Jan 2025",
        category: "Technologie",
        status: "À venir",
    },
    {
        title: "Exposition d'Art Contemporain",
        date: "5-20 Fév 2025",
        category: "Art",
        status: "Brouillon",
    },
    {
        title: "Marché des Saveurs du Bénin",
        date: "25-28 Mar 2025",
        category: "Gastronomie",
        status: "Publié",
    },
    {
        title: "Marathon de Cotonou",
        date: "2 Avr 2025",
        category: "Sport",
        status: "À venir",
    },
];

const statusColors = {
    "À venir":
        "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    Publié: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    Brouillon:
        "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400",
    Terminé: "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-500",
};

const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
    },
});

export default function Dashboard() {
    const { auth } = usePage().props;

    return (
        <AdminLayout title="Dashboard">
            <Head title="Admin Dashboard" />

            <div className="space-y-6">
                {/* Bienvenue */}
                <motion.div
                    variants={fadeUp(0)}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                            Bonjour, {auth?.user?.name ?? "Admin"} 👋
                        </h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                            Voici un aperçu de votre plateforme aujourd'hui.
                        </p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-2 px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-green-500/25 transition-colors"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                        Nouvel événement
                    </motion.button>
                </motion.div>

                {/* Stats cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            variants={fadeUp(i * 0.08)}
                            initial="hidden"
                            animate="visible"
                            className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div
                                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-lg`}
                                >
                                    {stat.icon}
                                </div>
                                <span
                                    className={`flex items-center gap-1 text-xs font-semibold ${stat.up ? "text-green-600 dark:text-green-400" : "text-red-500"}`}
                                >
                                    <svg
                                        className={`w-3 h-3 ${!stat.up && "rotate-180"}`}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={3}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                                        />
                                    </svg>
                                    {stat.change}
                                </span>
                            </div>
                            <p className="text-2xl font-extrabold text-gray-900 dark:text-white">
                                {stat.value}
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Tableau événements récents */}
                <motion.div
                    variants={fadeUp(0.35)}
                    initial="hidden"
                    animate="visible"
                    className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 shadow-sm overflow-hidden"
                >
                    <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700/60">
                        <h3 className="font-bold text-gray-900 dark:text-white text-sm">
                            Événements récents
                        </h3>
                        <a
                            href="/admin/events"
                            className="text-xs font-semibold text-green-600 dark:text-green-400 hover:text-green-700 transition-colors"
                        >
                            Voir tout →
                        </a>
                    </div>

                    {/* Desktop table */}
                    <div className="hidden sm:block overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-slate-100 dark:border-slate-800">
                                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                        Titre
                                    </th>
                                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                        Catégorie
                                    </th>
                                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                        Statut
                                    </th>
                                    <th className="text-right px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {recentEvents.map((event, i) => (
                                    <motion.tr
                                        key={event.title}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 + i * 0.07 }}
                                        className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                                    >
                                        <td className="px-6 py-3.5 font-medium text-gray-900 dark:text-white">
                                            {event.title}
                                        </td>
                                        <td className="px-6 py-3.5 text-slate-500 dark:text-slate-400">
                                            {event.date}
                                        </td>
                                        <td className="px-6 py-3.5 text-slate-500 dark:text-slate-400">
                                            {event.category}
                                        </td>
                                        <td className="px-6 py-3.5">
                                            <span
                                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusColors[event.status]}`}
                                            >
                                                {event.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-3.5 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="p-1.5 text-slate-400 hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-colors">
                                                    <svg
                                                        className="w-4 h-4"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                        />
                                                    </svg>
                                                </button>
                                                <button className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                                                    <svg
                                                        className="w-4 h-4"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile cards */}
                    <div className="sm:hidden divide-y divide-slate-100 dark:divide-slate-800">
                        {recentEvents.map((event, i) => (
                            <div key={event.title} className="px-4 py-3.5">
                                <div className="flex items-start justify-between gap-2">
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white text-sm">
                                            {event.title}
                                        </p>
                                        <p className="text-xs text-slate-400 mt-0.5">
                                            {event.date} · {event.category}
                                        </p>
                                    </div>
                                    <span
                                        className={`shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${statusColors[event.status]}`}
                                    >
                                        {event.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </AdminLayout>
    );
}
