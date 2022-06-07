<template>
    <div class="container" v-if="isLoaded">
        <h1>Datos Personales</h1>

         <h2>{{store.datosPersonales.nombre}}</h2>
    </div>
         <div 
         style="background-color: red; color: white;"
         v-if="error">
            {{error.message}}
         </div>
</template>

<script setup>
import { useStorePerfil } from '../stores/perfil';
import { useStoreDatosPersonales } from '../stores/datosPersonales';
import { ref } from 'vue';

const store = useStorePerfil();
const isLoaded = ref (false);
const error = ref(false);

const lanzar = async () => {
    try {
        error.value = false;
        await store.setDatosPersonales();
        isLoaded.value = true;
    } catch (e) {
        error.value = e
        console.log(e);
        
    }
};

lanzar();


</script>