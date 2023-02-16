<template>
    <div class="container my-5">
        <div class="text-center">
            <h1 class="text-white">Lista Progetti</h1>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Descrizione</th>
                    <th>Cover_Img</th>
                    <th>GitHub_Link</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="project in projects" :key="project.id" class="text-white">
                    <td>
<!--                         <div v-if="project.cover_img">
                            <img :src="backendUrl + '/storage/' + project.cover_img" alt="" class="img-fluid" />
                        </div> -->
                    </td>
<!--                     <td>
                        <router-link :to="{ name: 'projects.show', params: { id: project.id } }">{{ project.name }}</router-link>
                    </td> -->
                    <td>{{ project.id }}</td>
                    <td>{{ project.name }}</td>
                    <td>{{ project.description }}</td>
                    <td>{{ project.github_link }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios";
export default {
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
