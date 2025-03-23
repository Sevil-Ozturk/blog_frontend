<script setup lang="ts">
import { usePostsStore } from '~/stores/posts'

const postsStore = usePostsStore()
onMounted(async () => {
  await postsStore.fetchPosts()
})

</script>

<template>
  <div class="h-screen w-full">
  <!-- profil -->
  <div class="h-screen flex flex-row bg-gray-900 items-center p-5  gap-5">

    <!-- içerik -->
    <div class="flex flex-col items-start max-w-lg">
      <h1 class="text-[50px] font-sans bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Merhaba,Ben Sevil </h1>
      <p class="text-xl font-sans "> Modern ve performans odaklı web uygulamaları geliştiren bir Full Stack Developer'ım.
        Yenilikçi çözümler üretmeyi ve kullanıcı dostu arayüzler tasarlamayı seviyorum. 
        Vue.js, Nuxt.js ve Tailwind CSS gibi güçlü teknolojilerle projeler geliştiriyorum.
      </p>
    </div>

    <!-- resim -->
    <div class="ml-auto mx-32">
      <img class="size-[400px] rounded-full border-4 border-gray-300 justify-end" 
      src="https://avatars.githubusercontent.com/u/170648779?v=4" alt="Profile">
    </div>

  </div>

  <div class="h-screen flex flex-row bg-gray-500 items-center justify-end p-5  gap-5">
    <h2 class="text-[50px] font-sans">Hakkımda</h2>
    <p>
      
    </p>
  </div>

  <div class="bg-gray-300">
    sadgsdg
  </div>

</div>
</template>






  <!-- <div class="min-h-screen bg-[#fff8f3] p-6 flex justify-center">
    <div class="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
       -->
      <!-- SOL PANEL -->
      <!-- <div class="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
        <img class="w-28 h-28 rounded-full border-4 border-red-300" 
             src="https://avatars.githubusercontent.com/u/170648779?v=4" alt="Profile">
        <h2 class="text-2xl font-bold mt-4">Sevil Öztürk</h2>
        <p class="text-red-500 font-medium">Web Developer</p>
        <p class="text-gray-600 italic text-center mt-2">
          "Merhaba! Ben Sevil, modern ve performans odaklı web uygulamaları geliştiren bir Full Stack Developer'ım. Yenilikçi çözümler üretmeyi ve kullanıcı dostu arayüzler tasarlamayı seviyorum. Vue.js, Nuxt.js ve Tailwind CSS gibi güçlü teknolojilerle projeler geliştiriyorum."
        </p> -->

        <!-- Bilgiler -->
        <!-- <div class="mt-4 text-sm text-gray-700">
          <p><strong>Yaş:</strong> 21</p>
          <p><strong>Medeni Durum:</strong> Bekar</p>
          <p><strong>Konum:</strong> Bursa</p> -->
          <!-- <p><strong>Archetype:</strong> Frequent Flyer</p> -->
        <!-- </div> -->

        <!-- Etiketler -->
        <!-- <div class="mt-4 flex flex-wrap gap-2">
          <span class="bg-red-200 text-red-700 px-3 py-1 rounded-full text-xs">Planlı</span>
          <span class="bg-red-200 text-red-700 px-3 py-1 rounded-full text-xs">Çalışkan</span>
          <span class="bg-red-200 text-red-700 px-3 py-1 rounded-full text-xs">Takım çalışmasına yatkın</span>
        </div>
      </div> -->

      <!-- SAĞ PANEL -->
      <!-- <div class="md:col-span-2 space-y-6"> -->
        
        <!-- Bio -->
        <!-- <div class="bg-white shadow-lg rounded-2xl p-6">
          <h3 class="text-xl font-bold text-gray-700">Bio</h3>
          <p class="text-gray-700 text-sm mt-2">
           Ben Bursa Uludağ Üniversitesi Bilgisayar Programcılığı mezunuyum.Şu anda yazılım alanında kendimi geliştirmekte olup aktif olarak iş arayışımı sürdürmekteyim.
          </p>
        </div> -->

        <!-- Motivations -->
        <!-- <div class="bg-white text-gray-700 shadow-lg rounded-2xl p-6">
          <h3 class="text-xl font-bold">Uzmanlık Alanlarım</h3>
          <div class="mt-2">
            <p class="text-sm">Nuxt(vue)</p>
            <div class="w-full bg-gray-200 h-2 rounded-md"><div class="w-2/3 bg-red-500 h-full"></div></div>
            <p class="text-sm">JavaScript & TypeScript</p>
            <div class="w-full bg-gray-200 h-2 rounded-md"><div class="w-2/3 bg-red-500 h-full"></div></div>
            <p class="text-sm">Nodejs</p>
            <div class="w-full bg-gray-200 h-2 rounded-md"><div class="w-1/3 bg-red-500 h-full"></div></div>
            <p class="text-sm">Mongo Db</p>
            <div class="w-full bg-gray-200 h-2 rounded-md"><div class="w-1/3 bg-red-500 h-full"></div></div>
          </div>
        </div> -->
        <!-- Favorite Brands -->
        <!-- <div class="bg-white shadow-lg rounded-2xl p-6 text-gray-700">
          <h3 class="text-xl font-bold">Projelerim</h3>
          <div class="flex gap-4 mt-2 text-red-300">
            <a class="w-1/3" href="https://github.com/Sevil-Ozturk/dis-klinik-proje"> . Diş Klinik Otomasyonu</a>
            <a class="w-1/3" href="https://github.com/Sevil-Ozturk/blog_frontend" > . Portfolio Frontend</a>
            <a class="w-1/3" href="https://github.com/Sevil-Ozturk/blog-backend"> . Portfolio Backend</a>
          </div>
        </div>

      </div>

    </div>
  </div> -->