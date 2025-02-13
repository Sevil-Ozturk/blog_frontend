<script setup lang="ts">
const postsStore = usePostsStore()

onMounted(async () => {
  await postsStore.fetchPosts()
})


const router = useRouter();

const goToAddPostPage = () => {
  router.push({ name: 'AddPost' }); // 'AddPost' rotasına yönlendirme yapıyoruz
};
</script>

<template>
  <div class="m-2">
    <h1 class="">
      Posts
    </h1>

    <!-- <div v-if="postsStore.posts">
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
    </div> -->
    <!-- <div v-if="postsStore.loading">
      <p>Yazılar yükleniyor...</p>
    </div> -->

    <div v-if="postsStore.posts.length">
      <CardPost
      v-for="post in postsStore.posts"
      :key="post._id"
      :post="post"
      />
    </div>

    <div v-else>
      <p>Hiç yazı bulunamadı.</p>
    </div>
  </div>
  <div>
    <UButton @click="goToAddPostPage" class="bg-pink-900 m-5 p-5 border radius-[%50]">ekle</UButton>
  </div>
</template>