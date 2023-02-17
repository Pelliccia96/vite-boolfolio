<template>
    <div class="container my-5">
        <div class="text-white">
            <h1 class="text-center my-5">Pagina dettagli progetti</h1>
            <h2 class="mb-5">Progetto #{{ $route.params.id }}</h2>
            <h3 class="mb-3">{{ project.name }}</h3>
        </div>

        <div v-if="project.cover_img" class="mb-3">
            <img :src="this.store.backendUrl + '/storage/' + project.cover_img" alt="" class="img-fluid" />
        </div>

        <p class="text-white mb-3">{{ project.description }}</p>

        <router-link :to="{ name:'projects.index', params:{id:project} }">Torna ai progetti</router-link>
    </div>
</template>

<script>
import axios from "axios";
import { store } from "../../store";
export default {
    name: "ProjectsShow",
    data() {
        return {
            store,
            /**
             * @type {{name: string, description: string, cover_img: string, github_link: string, category_id: number, tags: array, id: number}[]}
            */
            project: {},
        };
    },
    mounted() {
        axios
            .get(this.store.backendUrl + "/api/projects/" + this.$route.params.id)
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
