<script setup lang="ts">
const postsStore = usePostsStore()

onMounted(async () => {
  await postsStore.fetchPosts()
})
</script>

<template>
  <div class="m-2">
    <h1 class="">
      Posts
    </h1>

    <div v-if="postsStore.posts">
      <div v-for="(post, index) in postsStore.posts" :key="index" >
        <h2 class="post-title">
          {{ post.title }}
        </h2>

        <div >
          <span v-for="(tag, key) in post.tags" :key="key" >
            {{ tag }}
          </span>
        </div>

        <p>
          {{ post.content }}
        </p>
      </div>
    </div>

    <div>
      <p>Yazılar yükleniyor...</p>
    </div>
  </div>
</template>