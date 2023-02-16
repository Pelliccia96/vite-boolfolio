<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="(link, i) in linksNavbar" :key="i">
                        <router-link :to="{ name: link.routeName }" class="nav-link">
                            {{ link.label }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
  
<script>
export default {
    data() {
        return {
            linksNavbar: [
                {
                    label: "Home",
                    routeName: "home",
                },
                {
                    label: "Progetti",
                    routeName: "projects.index",
                },
            ],
        };
    },
};
</script>
  
<style scoped>
</style>
