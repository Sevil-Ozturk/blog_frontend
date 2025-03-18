<script setup lang="ts">

const postsStore = usePostsStore();

onMounted(async () => {
  await postsStore.fetchPosts()
})

</script>

<template>
  <div class="relative p-6">
    <div class="fixed right-0 m-7 absolute gap-x-5">
      <ButtonNewpost/>
      <ButtonDeletepost/>
    </div>

    <div class="p-4">
      <h1 class="text-2xl font-bold mb-4">Tüm Gönderiler</h1>

      <div v-if="postsStore.posts.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardPost v-for="post in postsStore.posts" :key="post._id" :post="post"   class=""/>
      </div> 
      <div v-else>
        <p class="text-gray-500">Henüz gönderi bulunmuyor.</p>
      </div>
      
    </div>
  </div>
</template>
<!-- 
<script setup lang="ts">
const postsStore = usePostsStore();

onMounted(async () => {
  await postsStore.fetchPosts();
});
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Tüm Gönderiler</h1>

    <div v-if="postsStore.posts.length">
      <KoiTable :rows="postsStore.posts" sticky zebraRows :size="'md'">
        <template #title-header>
          <span class="font-semibold">Yazı Başlığı</span>
        </template>

        <template #subtitle-header>
          <span class="font-semibold">Açıklama</span>
        </template>

        <template #tags-header>
          <span class="font-semibold">Etiketler</span>
        </template>

        <template #title-cell="{ row }">
          <a :href="'/' + row.title" class="text-blue-400 hover:text-blue-600">{{ row.title }}</a>
        </template>

        <template #subtitle-cell="{ row }">
          <span class="text-gray-400">{{ row.subtitle }}</span>
        </template>

        <template #tags-cell="{ row }">
          <div class="flex gap-2">
            <span v-for="tag in row.tags" :key="tag" class="bg-blue-500 text-white text-xs px-2 py-1 rounded">
              {{ tag }}
            </span>
          </div>
        </template>
      </KoiTable>
    </div>

    <div v-else>
      <p class="text-gray-500">Henüz gönderi bulunmuyor.</p>
    </div>
  </div>
</template> -->
