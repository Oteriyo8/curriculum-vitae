<template>
    <header class="main-header">
        <h1>Currículum</h1>
        {{correo}} {{logged}}
        

    </header>
<div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Currículum</a>
        <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> -->
        <div class="navbar-collapse" id="navbarNav">
        <ul class="nav">
          <li class="nav-item">
            <RouterLink to="/" class="btn btn-dark mr-2">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="btn btn-dark mr-2">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/grid" class="btn btn-dark mr-2">Grid</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/cards" class="btn btn-dark mr-2">Cards</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/datospersonales" class="btn btn-dark mr-2">Datos personales</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/sign-in">Logout</RouterLink>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  </div>

</template>

<script setup>
// @click="userStore.logout" en el boton
defineProps({
   correo:{
       type: String,
       default: 'd'
   },
   logged: {
       type: Boolean,
       default: false
   }
});

</script>

<style scoped>
.main-header{
    display: flex;
    justify-content: space-between;
    background-color: orange;
}
</style>