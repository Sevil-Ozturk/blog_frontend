<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
</script>

<template>
  <nav class="Bg fixed top-0 left-1/2 transform -translate-x-1/2 flex w-full max-w-[1500px] p-5 rounded-[10px] drop-shadow-lg border-2 border-[#DD8EA3] z-50 justify-between items-center">
    
    <div class="tracking-tight text-3xl">
      <h1 class="font-isim">Sevil Öztürk</h1>
    </div>

    <!-- Menü web masaüstü -->
    <ul class="hidden md:flex space-x-6 text-black font-semibold">
      <li><NuxtLink class="nav-link" to="/">Home</NuxtLink></li>
      <li><NuxtLink class="nav-link" to="/posts">Blog</NuxtLink></li>
      <li><NuxtLink class="nav-link btn" to="/contact">CONTACT ME</NuxtLink></li>
    </ul>

    <!-- Mobil Menü Butonu -->
    <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-white text-2xl">
      ☰
    </button>

    <!-- Mobil Menü -->
    <transition name="slide-fade">
      <ul v-if="isMenuOpen" class="absolute top-16 left-0 w-full bg-[#5E61C8] text-white text-center flex flex-col space-y-4 p-4 md:hidden">
        <li><NuxtLink class="nav-link" to="/">Home</NuxtLink></li>
        <li><NuxtLink class="nav-link" to="/posts">Blog</NuxtLink></li>
        <li><NuxtLink class="nav-link btn" to="/contact">CONTACT ME</NuxtLink></li>
      </ul>
    </transition>

  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

.nav-link {
  padding: 8px 12px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #d73cd2;
}

.btn {
  background-color: white;
  border-radius: 999px;
  padding: 8px 16px;
  color: black;
}

.font-isim {
  font-family: 'Dancing Script', cursive;
  font-size: 36px;
  color: #DD8EA3;
}

.Bg {
  background-color:#F2E9EA;
  color: black;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
