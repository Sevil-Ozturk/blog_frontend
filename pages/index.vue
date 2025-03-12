<!-- <script setup lang="ts">
import { usePostsStore } from '~/stores/posts'

const postsStore = usePostsStore()
onMounted(async () => {
  await postsStore.fetchPosts()
})

</script>

<template>
 anasayfa hazırla
</template> -->


düzenlenecekkk!!!

<script setup lang="ts">
const socialLinks = [
  { name: "GitHub", url: "https://github.com/Sevil-Ozturk", icon: "🐱" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/sevil-%C3%B6zt%C3%BCrk-0a51252a1/", icon: "🔗" },
  { name: "Instagram", url: "https://www.instagram.com/sevillozturk0/", icon: "<3" }
];

const skills = ["Vue.js", "Nuxt.js", "TypeScript", "Tailwind CSS", "Pinia", "API Entegrasyonu"];
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">
    <!-- Profil Alanı -->
    <div class="text-center">
      <img src="" alt="Profil Resmi" class="w-32 h-32 rounded-full mx-auto shadow-lg">
      <h1 class="text-3xl font-bold mt-4">Merhaba, Ben SEVİL 👋</h1>
      <p class="text-gray-300 mt-2">Vue.js ve Nuxt.js geliştiricisiyim. Modern web projeleri geliştiriyorum. 🚀</p>
    </div>

    <!-- Sosyal Medya Linkleri -->
    <div class="flex space-x-4 mt-4">
      <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" class="text-lg hover:text-blue-400 transition">
        {{ link.icon }} {{ link.name }}
      </a>
    </div>

    <!-- Beceriler -->
    <div class="mt-6 text-center">
      <h2 class="text-xl font-semibold">Becerilerim</h2>
      <div class="flex flex-wrap justify-center mt-3 gap-3">
        <span v-for="skill in skills" :key="skill" class="bg-blue-500 px-3 py-1 text-sm rounded-full">
          {{ skill }}
        </span>
      </div>
    </div>

    <!-- Projeler -->
    <div class="mt-8 text-center">
      <h2 class="text-xl font-semibold">Projelerim</h2>
      <p class="text-gray-400 mt-2">Yakında burada bazı projelerimi paylaşacağım! ✨</p>
    </div>
  </div>
</template>
