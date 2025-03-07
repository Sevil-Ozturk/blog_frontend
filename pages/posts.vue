<script setup lang="ts">

const postsStore = usePostsStore();

onMounted(async () => {
  await postsStore.fetchPosts()
})

</script>

<template>
  <div class="relative p-6">
    
    <ModalNewpost/>

    <div class="p-4">
      <h1 class="text-2xl font-bold mb-4">Tüm Gönderiler</h1>

      <div v-if="postsStore.posts.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardPost v-for="post in postsStore.posts" :key="post._id" :post="post"   class=""/>
      </div>

      <div v-else>
        <p class="text-gray-500">Henüz gönderi bulunmuyor.</p>
      </div>
      
    </div>
  </div>
</template>
