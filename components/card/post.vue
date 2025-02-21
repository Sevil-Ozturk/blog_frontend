<!-- <script setup lang="ts" >
import type { Post } from '~/types';

const postsStore = usePostsStore()

onMounted(async () => {
  await postsStore.fetchPosts()
})

const props = defineProps<{
  post: Post
}>() ;
</script>

<template>
<div>
    <UCard class=" bg-primary-900">
      <template #default>
        <img :src="props.post.image " alt="post image" class="w-64">
      </template>
      <template #footer>
        {{ props.post.title }}<br>
        {{ props.post.subtitle }}
      </template>
    </UCard>
</div>

</template>

<style>

</style> -->

<script setup lang="ts">
import type { Post } from '~/types'

const props = defineProps<{
  post: Post
}>()
</script>

<template>
  <UCard class="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
    <template #default>
      <img 
        v-if="post.image" 
        :src="post.image" 
        alt="Post Image" 
        class="w-full h-40 object-cover"
      />
      <div class="p-4">
        <h2 class="text-lg font-semibold">{{ post.title }}</h2>
        <p class="text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
          {{ post.content }}
        </p>
      </div>
    </template>

    <template #footer>
      <div class="flex flex-wrap gap-2 p-4">
        <span 
          v-for="tag in post.tags" 
          :key="tag" 
          class="bg-blue-500 text-white text-xs px-2 py-1 rounded"
        >
          {{ tag }}
        </span>
      </div>
    </template>
  </UCard>
</template>
