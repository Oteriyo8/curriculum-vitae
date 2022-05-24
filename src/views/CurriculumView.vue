<template>
<div class="container">
    Curriculum Vitae
    <ul>
        <li v-for="(valor,index) in store.curriculum" :key="index">
        {{index}} {{valor}}</li>
    </ul>
</div>
</template>

<script setup>
// Importación del store de Pinia o variables centralizada de nuestra app
import {useStoreDatosPersonales} from "../stores/datosPersonales";
// Cargamos el store
const store = useStoreDatosPersonales();
store.setDatosCurriculum();
</script>