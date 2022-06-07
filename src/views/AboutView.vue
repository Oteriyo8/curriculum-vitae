<template>
  <div class="about container">
    <h1>This is an about page</h1>
    <img :src="url" alt="No hay imagen">
  </div>
    
</template>

<script setup>
import ObtenerDatos from '../components/ObtenerDatos.vue';
import { getURL } from '../firebase.cloud.storage';
import { ref } from 'vue';
// console.log(typeof getURL)

const url = ref("")
const cargarFoto = async () => {
  url.value = await getURL();
}

cargarFoto();
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
