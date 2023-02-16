<template>
<div class="container my-5">
    <div class="text-center pb-5">
        <h1 class="text-white">Componente Card Progetti</h1>
    </div>
    <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col" v-for="project in projects" :key="project.id">
            <div class="card">
                <img :src="backendUrl + '/storage/' + project.cover_img" alt="" class="card-img-top" />
                <div class="card-body pt-5">
                    <h5 class="card-title"> {{project.name}}</h5>
                    <p class="card-text">{{ project.description }}</p>
                    <p class="card-text">{{ project.github_link }}</p>
                    <p class="card-text">ID: {{ project.id }}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    name: "ProjectsIndexPage",
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
}
</script>

<style scoped>
</style>
