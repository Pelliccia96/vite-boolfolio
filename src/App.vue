<template>
  <TheHeader></TheHeader>
  <router-view></router-view>
</template>

<script>
import axios from "axios";
import { store } from "./store";
import ProjectCard from "./components/ProjectCard.vue";
import TheHeader from "./components/TheHeader.vue";
import TheMain from './components/TheMain.vue';

export default {
  components: { TheMain, ProjectCard, TheHeader },
  data() {
    return {
      store,
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
}
</script>

<style lang="scss">
  @use "styles/main";
</style>
