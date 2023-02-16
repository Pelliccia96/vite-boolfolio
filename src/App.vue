<template>
  <router-view></router-view>
</template>

<script>
import axios from "axios";
import TheMain from './components/TheMain.vue';

export default {
  components: { TheMain },
  data() {
    return {
      backendUrl: "http://127.0.0.1:8000",
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

<style lang="scss">
  @use "styles/main";
</style>
