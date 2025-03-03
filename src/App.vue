<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <main class="max-w-6xl mx-auto mt-10">
    <RouterView />
  </main>
</template>
