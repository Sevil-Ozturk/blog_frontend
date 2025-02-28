<script setup lang="ts">
import { usePostsStore } from '~/stores/posts'

const postsStore = usePostsStore()
onMounted(async () => {
  await postsStore.fetchPosts()
})

</script>

<template>
 anasayfa hazırla
</template>
