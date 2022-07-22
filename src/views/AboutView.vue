<template>
  <div class="about container">
    <h1>This is an about page</h1>
    <img :src="url" alt="No hay imagen">
    <!-- <h2>Cargar imagen</h2>
    <input accept="image/*" type="file" @change="configurarSubida"> -->
    <p>
      {{ storeC.datosCurriculum[1].description }}
    </p>
  </div>
    
</template>

<script setup>
import ObtenerDatos from '../components/ObtenerDatos.vue';
import { getURL } from '../firebase.cloud.storage';
import { ref } from 'vue';
// Librerías
import { useStorePerfil } from "../stores/perfil";
import { useStoreCurric } from "../stores/curriculum"
// Arrancamos store
const store = useStorePerfil();
const storeC = useStoreCurric();

// Cargamos datos
store.setDatosPersonales();
storeC.setDatosCurric();
// console.log(typeof getURL)

const url = ref("")
const cargarFoto = async () => {
  url.value = await getURL();
}

cargarFoto();

const configurarSubida = evento => {
  console.log(evento.target.files[0])
}
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
