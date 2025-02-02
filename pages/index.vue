 <script lang="ts">
import { usePostsStore } from '~/stores/posts';
import { onMounted } from 'vue';

const postsStore = usePostsStore(); 

onMounted(() => {
  postsStore.fetchPosts(); 
});
</script>

<template>
  <div v-if="postsStore.posts.length > 0">
    <div v-for="(post, index) in postsStore.posts" :key="index">
      <h2>{{ post.title }}</h2>
      <p>{{ post.subtitle }}</p>
      <p>{{ post.content }}</p>
    </div>
  </div>
  <div v-else>
    <p>Yazılar yükleniyor...</p>
  </div>
</template>