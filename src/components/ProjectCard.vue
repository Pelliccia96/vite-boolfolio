<template>
    <div class="card">
        <div v-if="element.cover_img">
            <img :src="this.store.backendUrl + '/storage/' + element.cover_img" alt="" class="card-img-top" />
        </div>
        <div class="card-body pt-5">
            <h5 class="card-title"> {{ element.name }}</h5>
            <p class="card-text">{{ element.description }}</p>
            <p class="card-text">{{ element.github_link }}</p>
            <p class="card-text">ID: {{ element.id }}</p>
            <router-link :to="{ name:'projects.show', params:{id:element.id} }">Mostra dettagli</router-link>
        </div>
</div>
</template>

<script>
import { store } from '../store';
export default {
    props: {
        element: {
            type: Object,
            required: true,
        }
    },
    name: "ProjectsIndexPage",
    data() {
        return {
            store,
        };
    },
}
</script>

<style scoped>
</style>
