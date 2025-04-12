<script setup lang="ts">
import { usePostsStore } from '~/stores/posts'
import Contact from './contact.vue'

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
      <h1 class="font-header p-3 text-6xl font-sans bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Merhaba,Ben Sevil </h1>
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

  <!--hakkımda -->
  <div class="h-screen flex flex-row bg-gray-900 items-center p-5  gap-5">

      <!--resim -->
    <div class=" h-3/4 w-1/2 justify-start">
      <img class="size-[400px] rounded-full border-4 border-gray-300 justify-center w-full h-full" 
      src="/hakkımda.png" alt="code photo">
    </div>

    <!--içerik-->
    <div class="p-10 h-3/4 max-w-full w-3/4 items-center justify-end ml-auto"  >
      <h2 class="font-header text-6xl  font-sans items-center justify-cener bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Hakkımda:</h2>
      <p class="text-xl font-sans">
       <br> Merhaba! Ben <strong>Sevil Öztürk</strong>, yazılım geliştirme dünyasında kendimi sürekli geliştiren bir Full Stack Developerım. Vue.js, Nuxt.js, TypeScript ve Pinia gibi modern teknolojilerle dinamik ve performanslı web uygulamaları geliştiriyorum. Backend tarafında ise Nodejs ve C# ile projeler geliştiriyorum.

Kod yazarken en çok temiz kod, ölçeklenebilirlik ve kullanıcı deneyimine önem veriyorum. Şu anda Web alanında kendimi daha da geliştirmek ve yenilikçi projelerde yer almak için çalışıyorum.

Boş zamanlarımda yeni teknolojileri keşfetmeyi, açık kaynak projelere katkı sağlamayı ve teknik bloglar okumayı seviyorum. Eğer projelerim veya iş birliği hakkında konuşmak istersen, bana ulaşabilirsin!
      </p>
    </div>
    
  </div>

 <!-- Projelerim Bölümü -->
<div class="h-screen bg-gray-800 flex flex-col items-center justify-center p-15 w-full gap-10">
  <!-- Başlık -->
  <h2 class="font-header text-6xl font-sans bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent p-3">
    Projelerim:
  </h2>

  <!-- Yatay Kaydırma İçin Konteyner -->
  <div class="w-full overflow-x-auto scrollbar-none  ">
    <div class="flex flex-row flex-nowrap justify-start gap-10 p-5">
      <!-- 1. Kart -->
      <div class="bg-blue-900 rounded-[25px]  border-4 w-[500px] h-auto p-5 flex flex-col items-center text-center flex-shrink-0">
        <img class="w-48 h-48 rounded-full mb-4"
             src="/github.avif" alt="code photo">
        <p class="text-xl font-sans text-white">
          Bu projem şu anda içerisinde gezinmiş olduğunuz portfolio projemin, blog kısmına ait Backend kısmını kapsar.
          Hatırlatmakta fayda var, bu projemin hem backend hem de frontend kısmı bana aittir.
        </p>
      </div>  

      <!-- 2. Kart -->
      <div class="bg-blue-900 rounded-[25px] border-gray-300 border-4 w-[500px] h-auto p-5 flex flex-col items-center text-center flex-shrink-0">
        <img class="w-48 h-48 rounded-full mb-4"
             src="https://avatars.githubusercontent.com/u/170648779?v=4" alt="code photo">
        <p class="text-xl font-sans text-white">
          Şu anda bulunmuş olduğunuz projem Nuxt.js (Vue.js) ile yapmış olduğum portfolio projemin yazılım kısmını kapsar. İncelemek isterseniz mutluluk duyarım.
        </p>
      </div>

      <!-- 3. Kart -->
      <div class="bg-blue-900 rounded-[25px] border-gray-300 border-4 w-[500px] h-auto p-5 flex flex-col items-center text-center flex-shrink-0">
        <img class="w-48 h-48 rounded-full mb-4"
             src="/tmdb.jpeg" alt="code photo">
        <p class="text-xl font-sans text-white">
          Staj dönemimde yapmış olduğum küçük bir movie app projesidir. Nuxt.js (Vue.js) ile yapmış olduğum ilk projelerimdendir.
        </p>
      </div>
    </div>
  </div>

  <!-- Devam Mesajı -->
  <p class="text-lg font-semibold text-gray-900">...Devamı gelecek. Lütfen beklemede kalın 😃</p>
</div>


  <div class="h-screen bg-gray-900 flex flex-col items-center justify-center p-15 w-full gap-10">
    <h2 class="font-header text-6xl font-sans bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent p-3">
      Benimle İletişim Kurmak İster Misin?
    </h2>
    <div class="flex flex-row h-screen w-full">
      <div class=" bg-gray-800 items-center justify-center p-5 w-1/2 mx-10 border-[3px] rounded-[20px]">

        <h3 class="font-header text-6xl m-10 font-sans bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent p-3">
          İletişim Bilgilerim:
        </h3>

            <div class="flex flex-row m-10 gap-5">
              <UIcon name="material-symbols:mail-outline-rounded" class="size-16"/>
              <div class="flex flex-col gap-1"  >
                <h2 class="text-2xl font-bold"> Email</h2>
                <p>ozsevil730@gmail.com</p>
              </div>
            </div>

            <div class="flex flex-row m-10 gap-5"  >
              <UIcon name="material-symbols:call" class="size-16"/>
              <div class="flex flex-col gap-1"  >
                <h2  class="text-2xl font-bold">Telefon</h2>
                <p>(istenilen durumda paylaşabilirim)</p>
              </div>
            </div>

            <div class="flex flex-row m-10 gap-5">
              <UIcon name="material-symbols:location-on-outline" class="size-16"/>
              <div class="flex flex-col gap-1"  >
                <h2  class="text-2xl font-bold">Konum</h2>
                <p>Türkiye/Bursa</p>
              </div>
            </div>

            
            <h2 class="text-2xl font-bold mx-20 mt-10"> Sosyal Medya</h2>

            <div class="flex flex-row justify-start items-center gap-10 mt-5 mx-20 ">

              <a href="https://www.linkedin.com/in/sevil-%C3%B6zt%C3%BCrk-0a51252a1/" target="_blank" rel="noopener noreferrer">
                <UIcon name="mdi:linkedin" class="text-white size-10 hover:text-blue-500 transition duration-300" />
              </a>

              <a href="https://www.instagram.com/sevillozturk0/" target="_blank" rel="noopener noreferrer">
                <UIcon name="mdi:instagram" class="text-white size-10 hover:text-pink-500 transition duration-300" />
              </a>

              <a href="https://github.com/sevillozturk0" target="_blank" rel="noopener noreferrer">
                <UIcon name="mdi:github" class="text-white size-10 hover:text-gray-400 transition duration-300" />
              </a>

            </div>

      </div>

      <div class=" bg-gray-800 flex flex-col items-center justify-center p-5 w-1/2 mx-10 border-[3px] rounded-[20px]">
        <h3 class="font-header text-6xl font-sans bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent p-3">
          İletişim Formum:
        </h3>
        <Contact class="w-full"/>
      </div>
    </div>
  </div>
</div>


</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
.font-header {
  font-family: 'Dancing Script', cursive;
}

 /* Tüm tarayıcılarda kaydırma çubuğunu gizle */
 .scrollbar-none::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
  .scrollbar-none {
    -ms-overflow-style: none;  /* IE ve Edge */
    scrollbar-width: none;  /* Firefox */
  }
</style>
