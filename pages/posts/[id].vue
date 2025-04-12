<script setup lang="ts">
import type { Post } from '~/types';

const postsStore=usePostsStore();
const route = useRoute() 

const props = defineProps<{
  post: Post
}>()

onMounted(async()=>{
    await postsStore.fetchPosts();
})

</script>

<template>
    
    <div class="p-6">
      <h1 class="text-3xl font-bold text-purple-600 mb-4">{{ post.title }}</h1>
      <img v-if="post.image" :src="post.image" alt="Post image" class="w-full rounded mb-4" />
      <p class="text-gray-700">{{ post.content }}</p>
      <div class="mt-4 flex gap-2">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="bg-blue-800 text-white text-xs px-2 py-1 rounded"
        >
          {{ tag }}
        </span>
      </div>
  </div>

</template>