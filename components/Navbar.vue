<template>
  <nav class="Bg fixed m-3 justify-between flex w-full max-w-[1500px] p-5 rounded-[10px] drop-shadow-lg border-2 border-blue-300 z-10">
    <!-- İsim kısmı en sola hizalanmış -->
    <div class="tracking-tight text-4xl">
      <h1 class="font-isim">Sevil Öztürk</h1>
    </div>

    <!-- Menü öğeleri sağa hizalanmış -->
    <ul class="flex space-x-6">
      <li><NuxtLink class="nav-link" to="/">Home</NuxtLink></li>
      <li><NuxtLink class="nav-link" to="/posts">Blog</NuxtLink></li>
      <li><NuxtLink class="nav-link btn" to="/contact">CONTACT ME</NuxtLink></li>
    </ul>
  </nav>
</template>

<style scoped>
/* Google Font: Intel */
@import url('https://fonts.googleapis.com/css2?family=Intel:wght@200;300&display=swap');

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
}

/* .btn:hover {
  background-color: #a855f7;
} */

.font-isim {
  font-family: 'Intel', sans-serif;
  font-style: normal;
}

.Bg{
  background-color: #5E61C8;
  color: black;
}
</style>
