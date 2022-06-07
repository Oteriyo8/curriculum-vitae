<template>
    <div class="container">
        <h1 class="title">Página de acceso</h1>
        {{store.getEmailUser}}
        <form @submit.prevent="autentificar" action="#" id="myForm">
            <div class="control">
                <label for="email" >Correo electrónico</label>
                <input v-model="form.email" type="email" id="email" required>
            </div>

            <div class="control">
                <label for="password">Contraseña</label>
                <input v-model="form.password" type="password" id="password" required>
            </div>
            <button v-show="store.user === null?true:false">Login</button>
            <input @click="desconectar" type="button" value="Logout">
            <input type="button" @click="cargarFoto" value="Cargar foto">
            <!-- <strong>{{store.errores}}</strong> -->
            <div v-if="validacionError" class="error" style="background-color: red; color:white">Error: {{validacionError}}
            </div>
        </form>
        <img v-if="src.length>0" class="imagen" :src="src" alt="No hay foto">

    </div>

</template>

<script setup>
// Librerias
import { useStoreUsers } from '../stores/users';
import { reactive,ref } from 'vue';
import { getURL } from '../firebase.cloud.storage';
// Inicializar store pinia
const store = useStoreUsers();

const form = reactive({
    email: 'fruicou.sansus3@gmail.com',
    password: '12345a'
});

const disabled = ref(false);

const validacionError = ref(false);

const autentificar = async () => {

    try {
        validacionError.value = false;
        await store.signIn(form);
        disabled.value = true;
        
    } catch (error) {
        validacionError.value = error.message;
        console.log("El error", error);
    }
}
const desconectar = () => {
    store.logout()
    disabled.value = false
}
const src = ref("");
const cargarFoto = async () => {
    src.value = await getURL();
}
</script>

<style>
.imagen {
    object-fit: cover;
    width: 300px;
    height: 100px;
}
</style>