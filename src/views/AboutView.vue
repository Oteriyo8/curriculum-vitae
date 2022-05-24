<template>
  <div class="about">
    <ObtenerDatos></ObtenerDatos>
  </div>
    
</template>

<script setup>
import ObtenerDatos from '../components/ObtenerDatos.vue';
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
