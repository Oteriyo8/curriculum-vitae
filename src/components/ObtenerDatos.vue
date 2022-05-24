<template>
  <div>
      <h1>Curriculum Vitae de </h1>
       {{data}}
  </div>
</template>

<script setup>
import {ref} from "vue";
let data = ref(null);

const leerDatos = async () => {
    const respuesta = await fetch("https://raw.githubusercontent.com/Frucou/lectura-json/main/curriculum");
    data.value = await respuesta.json();
    // console.log(data);
}

leerDatos();



</script>

<style>

</style>