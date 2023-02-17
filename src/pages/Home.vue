<template>
    <main>
        <div class="jumbotron"/>
        <section>
            <div class="container mt-3 mb-5">
                <div class="text-white">
                    <div class="text-center">
                        <h1>Pagina Home</h1>
                    </div>
                    <!-- Componente ultimi progetti aggiunti -->
                    <div class="my-5">
                        <h2>Ultimi progetti aggiunti:</h2>
                    </div>
                    <div>
                        <ProjectList></ProjectList>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import ProjectList from '../components/ProjectList.vue';

export default {
    name: "Home",
    components: { ProjectList }
}
</script>

<style scoped>
.jumbotron {
  background-image: url("https://www.filepicker.io/api/file/PrjQ7ZxTQye3aR2Tzt3N");
  background-size: cover;
  background-position: center;
  min-height: 400px;
  display: flex;
}

</style>
