<template>
    <div class="card">
        <div v-if="element.cover_img">
            <img :src="backendUrl + '/storage/' + element.cover_img" alt="" class="card-img-top" />
        </div>
        <div class="card-body pt-5">
            <h5 class="card-title"> {{element.name}}</h5>
            <p class="card-text">{{ element.description }}</p>
            <p class="card-text">{{ element.github_link }}</p>
            <p class="card-text">ID: {{ element.id }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        element: {
            type: Object,
        }
    },
    name: "ProjectsIndexPage",
    data() {
        return {
            backendUrl: "http://127.0.0.1:8000",
        };
    },
}
</script>

<style scoped>
</style>
