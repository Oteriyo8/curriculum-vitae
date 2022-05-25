<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="container mt-2">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/" class="btn btn-dark mr-2">Home</RouterLink>
        <RouterLink to="/about" class="btn btn-dark mr-2">About</RouterLink>
        <RouterLink to="/grid" class="btn btn-dark mr-2">Grid</RouterLink>
        <RouterLink to="/cards" class="btn btn-dark mr-2">Cards</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>


