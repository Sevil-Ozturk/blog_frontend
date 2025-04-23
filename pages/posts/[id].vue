<script setup lang="ts">
import type { Post } from '~/types';

const postsStore=usePostsStore();
const route = useRoute() 

definePageMeta({
  name: 'posts-id',
})

onMounted(async()=>{
    await postsStore.fetchPosts();
})

const post = computed(() => {
  return postsStore.posts.find((p: Post) => p._id === route.params.id)
})
</script>

<template>
     <div v-if="post" class="p-6">
      <div class="flex ">
        <h1 class="text-3xl font-bold text-purple-600 mb-4">{{ post.title }}</h1>
        <div class="fixed right-0 mx-7 absolute">
          <ButtonDeletepost/>
        </div>
      </div>
    <img v-if="post.image" :src="post.image" alt="Post image" class="w-full rounded mb-4" />
    <p class="text-white-700 whitespace-pre-line">{{ post.content }}</p>
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

  <div v-else class="p-6 text-gray-400">
    Gönderi bulunamadı.
  </div>
</template>