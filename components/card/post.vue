<script setup lang="ts" >
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

</style>