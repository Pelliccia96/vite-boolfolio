<template>
    <div class="row row-cols-1 row-cols-md-3 g-4 text-dark">
        <div class="col" v-for="project in projects" :key="project.id">
            <ProjectCard :element="project"></ProjectCard>
        </div>
    </div>
</template>
  
<script>
import axios from "axios";
import { store } from "../store";
import ProjectCard from "../components/ProjectCard.vue";
export default {
    name: "ProjectsList",
    components: { ProjectCard },
    data() {
        return {
            store,
            projects: [],
        };
    },
    mounted() {
        // Funzione Index nel ProjectController api del BackEnd:
        // Filtro gli ultimi 6 progetti se richiesto, altrimenti ritorna una chiamata normale
        /* $last6 = $request->input("last6");
        if ($last6) {
            $projects = Project::orderBy("created_at", "DESC")->limit(6)->get();
        } else {
            $projects = Project::all();
        }
        return response()->json($projects); */

        // axios.get(this.store.backendUrl + "/api/project?last6=true")
        axios
            .get(this.store.backendUrl + "/api/projects", {
                params: {
                    last6: true,
                },
            })
            .then((resp) => {
                this.projects = resp.data;
            });
    },
};
</script>

<style scoped>
</style>
