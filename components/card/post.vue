<script setup lang="ts">
import type { Post } from '~/types'

const props = defineProps<{
  post: Post
}>()

const gotoPostDetail= () =>{
navigateTo({
  name:'posts-id',
  params:{id:props.post._id}
})


}

</script>

<template>
  <UCard 
  @click="gotoPostDetail"
  class="relative dark:bg-gray-800 shadow-md rounded-lg overflow-hidden justify-center w-6/7 h-auto flex flex-col"  >
    <template #default>
      <img 
        v-if="post.image" 
        :src="post.image" 
        alt="Post Image" 
        class="w-full h-64 object-cover mx-auto block rounded-[7px] "
      />
      <div class="p-4 flex-1">
        <h2 class="text-lg text-purple-500 font-semibold line-clamp-2">{{ post.title }}</h2>
        <p class="text-gray-600 dark:text-gray-300 mt-2 line-clamp-3 whitespace-pre-line ">
          {{ post.content }}
        </p>
      </div>
    </template>

    <template #footer>
      <div class="flex flex-wrap gap-2 p-4 justify-start absolute left-0 bottom-0">
        <span  
          v-for="tag in post.tags"
          :key="tag" 
          class="bg-blue-800 text-white text-xs px-2 py-1 rounded "
        >
          {{ tag }}
        </span>
      </div>
    </template>
  </UCard>
</template>
