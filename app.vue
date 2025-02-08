<!-- <script setup lang="ts">
const postsStore = usePostsStore()

onMounted(async () => {
  await postsStore.fetchPosts()
})
</script>

<template>
  <div class="container montserrat">
    <h1 class="title">
      Posts
    </h1>

    <div v-if="postsStore.posts">
      <div v-for="(post, index) in postsStore.posts" :key="index" class="post-card">
        <h2 class="post-title">
          {{ post.title }}
        </h2>

        <div class="tags">
          <span v-for="(tag, key) in post.tags" :key="key" class="tag">
            {{ tag }}
          </span>
        </div>

        <p class="post-body">
          {{ post.content }}
        </p>
      </div>
    </div>

    <div v-else class="loading">
      <p>Yazılar yükleniyor...</p>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
.montserrat {
  font-family: "Montserrat", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.post-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.post-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 10px;
}

.post-body {
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
}

.tags {
  margin-bottom: 10px;
}

.tag {
  display: inline-block;
  background: #e0f7fa;
  color: #00796b;
  font-size: 0.875rem;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 50px;
  margin-right: 5px;
}

.loading p {
  text-align: center;
  color: #777;
  font-size: 1rem;
}
</style> -->

<script setup>
import { usePostsStore } from '~/stores/posts'
import { onMounted } from 'vue'

const postsStore = usePostsStore()

onMounted(() => {
  postsStore.fetchPosts() // Sayfa yüklendiğinde verileri çek
})
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Blog Postları ({{ postsStore.postCount }})</h1>
    <div v-if="postsStore.posts.length">
      <div
        v-for="post in postsStore.posts"
        :key="post._id"
        class="bg-white p-4 rounded shadow mb-4"
      >
        <h2 class="text-xl font-semibold">{{ post.title }}</h2>
        <p class="text-gray-600">{{ post.subtitle }}</p>
        <p class="mt-2">{{ post.content }}</p>
      </div>
    </div>
    <p v-else>Yükleniyor...</p>
  </div>
</template>

