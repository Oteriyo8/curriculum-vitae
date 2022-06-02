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
            <button>Login</button>
            <input @click="desconectar" type="button" value="Logout">
        </form>


    </div>

</template>

<script setup>
// Librerias
import { useStoreUsers } from '../stores/users';
import { reactive } from 'vue';
// Inicializar store pinia
const store = useStoreUsers();

const form = reactive({
    email: 'fruicou.sansus3@gmail.com',
    password: '12345a'
});

const autentificar = () => {
    store.signIn(form);
}
const desconectar = () => {
    store.logout()
}
</script>