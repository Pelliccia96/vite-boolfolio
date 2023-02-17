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
        // axios.get(this.store.backendUrl + "/api/post?last6=true")
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
