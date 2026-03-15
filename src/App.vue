<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="bg-green-50/15 h-screen flex flex-col">
    <NavBar />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped></style>
