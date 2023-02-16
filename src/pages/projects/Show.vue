<template>
    <div class="container my-5">
        <div class="text-white">
            <h1>Pagina dettagli progetti {{ $route.params.id }}</h1>
            <h2>{{ project.title }}</h2>
        </div>

        <div v-if="project.cover_img">
            <img :src="backendUrl + '/storage/' + project.cover_img" alt="" class="img-fluid" />
        </div>

        <p class="lead">{{ project.description }}</p>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "ProjectsShow",
    data() {
        return {
            backendUrl: "http://127.0.0.1:8000",
            /**
             * @type {{name: string, description: string, cover_img: string, github_link: string, category_id: number, tags: array, id: number}[]}
            */
            project: {},
        };
    },
    mounted() {
        axios
            .get(this.backendUrl + "/api/projects/" + this.$route.params.id)
            // .get(`${ this.backendUrl }/api/posts/${ this.$route.params.id }`)
            .then((resp) => {
                this.project = resp.data;
            })
            .catch((er) => {
                // in caso di errore non ha senso che l'utente rimanga qui
                // faccio un redirect su posts.index
                this.$router.push({ name: "projects.index" });
            });
    },
};
</script>

<style scoped>
</style>
