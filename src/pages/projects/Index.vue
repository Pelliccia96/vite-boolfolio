<template>
    <div class="container my-5">
        <div class="text-center pb-5">
            <h1 class="text-white">Lista Progetti</h1>
        </div>
        <div class="row g-4">
            <div v-for="project in projects" :key="project.id" class="col">
                <ProjectCard :element="project"></ProjectCard>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import ProjectCard from "../../components/ProjectCard.vue";
export default {
    components: { ProjectCard },
    name: "ProjectsIndex",
    data() {
        return {
            backendUrl: "http://127.0.0.1:8000",
            /**
             * @type {{name: string, description: string, cover_img: string, github_link: string, category_id: number, tags: array, id: number}[]}
            */
            projects: [],
        };
    },
    methods: {
        fetchProjects() {
            axios.get(this.backendUrl + "/api/projects").then((resp) => {
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
