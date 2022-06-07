<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useStoreUsers } from "./stores/users";
import TheHeader from "./components/TheHeader.vue";

const userStore = useStoreUsers()

const almacen = useStoreUsers();
almacen.logged();

</script>

<template>
<TheHeader :correo="almacen.getEmailUser" :logged="almacen.user?true:false"></TheHeader>
  
  <RouterView />

</template>

<style>
@import '@/assets/base.css'

/* #app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0;
  
} */
</style>
