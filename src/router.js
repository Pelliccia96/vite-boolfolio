import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import ProjectsIndex from "./pages/projects/Index.vue";

const router = createRouter({
    // Serve ad indicare come gestire l'url al cambio pagina
    history: createWebHistory(),
    routes: [
        {
            path: "/", // uri da scrivere nel browser
            name: "home", // nome della rotta da usare per creare un link
            component: Home // componente che ritorna l'html della pagina
        },
        // ... altre rotte
        {
            // lista di tutti i progetti
            path: "/projects",
            name: "projects.index",
            component: ProjectsIndex
        },
    ]
});

export { router };
