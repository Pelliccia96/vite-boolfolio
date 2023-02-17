<template>
    <div class="container my-5">
        <div class="text-center pb-5">
            <h1 class="text-white">Lista Progetti</h1>
        </div>
        <div class="row g-4">
            <div v-for="project in projects" :key="project.id" class="col-2">
                <ProjectCard :element="project"></ProjectCard>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { store } from "../../store";
import ProjectCard from "../../components/ProjectCard.vue";
export default {
    components: { ProjectCard },
    name: "ProjectsIndex",
    data() {
        return {
            store,
            /**
             * @type {{name: string, description: string, cover_img: string, github_link: string, category_id: number, tags: array, id: number}[]}
            */
            projects: [],
        };
    },
    methods: {
        fetchProjects() {
            axios.get(this.store.backendUrl + "/api/projects").then((resp) => {
                this.projects = resp.data;
                console.log(this.projects);
            });
        },
    },
    mounted() {
        this.fetchProjects();
    },
};
</script>

<style scoped>
</style>
