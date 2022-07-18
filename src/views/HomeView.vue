<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <RouterLink v-for="i in 12" :to="`/principle${i}`" :key="i">{{
      i
    }}</RouterLink>
  </header>
</template>

<style scoped>
header {
  margin: 20vh auto;
  width: 400px;
  display: flex;
  justify-content: space-around;
}
</style>
