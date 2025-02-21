<!-- <template>
  <div class="m-2">
    <div>
  <h1 class="P-5">POSTS</h1>
 <div>
  
 </div>
</div>
  </div>
</template> -->

<script setup lang="ts">
import { usePostsStore } from '~/stores/posts'

const postsStore = usePostsStore()

onMounted(async () => {
  await postsStore.fetchPosts()
})
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Tüm Gönderiler</h1>

    <div v-if="postsStore.posts.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <CardPost v-for="post in postsStore.posts" :key="post._id" :post="post" />
    </div>

    <div v-else>
      <p class="text-gray-500">Henüz gönderi bulunmuyor.</p>
    </div>
  </div>
</template>
