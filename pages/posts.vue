<script setup lang="ts">

// image düzeltilecek !!!!!!!!!!!!!

const postsStore = usePostsStore()

onMounted(async () => {
  await postsStore.fetchPosts();
})

const isOpen = ref(false)
const title = ref('')
const content = ref('')
const image = ref <File | null>(null)
const tags = ref <string[]>([])


const handleAddPost = async () => {
  const newPost = {
    title: title.value,
    content: content.value,
    image: image.value,  
    tags: tags.value,   
  }

  await postsStore.addPost(newPost)
  

  title.value = ''
  content.value = ''
  image.value = null  
  tags.value = []    

  // isOpen.value = false
}

const tagOptions = ['Vue.js', 'Java Script', 'Frontend', 'Backend', 'UI/UX']

</script>

<template>
  <div class="m-2">
    <h1 class="">
      Posts
    </h1>

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
    <UButton label="Open" @click="isOpen = true" />

    <UModal v-model="isOpen" prevent-close>
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Lütfen Post Ekleyin
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>

        <form @submit.prevent="handleAddPost">
          <div>
        <div>

        </div>
          <label for="image" >Resim:</label>
          <input 
            id="image" 
            type="file" 
          />
        <div>
          <label for="title">BAŞLIK:</label>
          <input
           type="text"
           id="title"
           v-model="title"
          placeholder="Lütfen başlık girin."
           >
          </div>

          <div>
            <label for="content">İÇERİK:</label>
            <textarea
            id="content"
            v-model="content" 
            placeholder="Lütfen yayınlayacağınız içeriği yazınız"
            >
          </textarea>
          </div>

          <div>
            <label for="tags">Etiketler:</label>

             <!-- BURADA DÜZENLEME YAPILACAK  -->
             <UInputMenu id="tags" v-model="tags" :options="tagOptions" multiple :popper="{ placement: 'right-start' }" />
          </div>

          <UButton type="submit" label="Ekle" />


        </div>
       </form>
      </UCard>
    </UModal>
  </div>
</template>




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