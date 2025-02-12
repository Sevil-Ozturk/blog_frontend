<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>

<template>
    <div>
      <Navbar />
      <main class="container pt-[80px]">
        <slot />
      </main>
    </div>
  </template>
  
  <style scoped>
  .container {
    margin:0 auto;
    padding: 0,80px,0,0;
  }
  </style>
  