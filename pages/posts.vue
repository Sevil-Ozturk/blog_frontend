<script setup lang="ts">
const postsStore = usePostsStore();

onMounted(async () => {
  await postsStore.fetchPosts()
})

const isOpen = ref(false);

const title = ref('');
const content = ref('');
const image = ref<File | null>(null);
const tags = ref<string[]>([]);

const tagOptions = ['Vue.js', 'JavaScript', 'Frontend', 'Backend', 'UI/UX','Node.JS'];

// Resmi Base64 formatına dönüştürme fonksiyonu
const convertImageToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

// Yeni post ekleme fonksiyonu
const handleAddPost = async () => {
  const newPost = {
    title: title.value,
    content: content.value,
    image: image.value ? await convertImageToBase64(image.value) : "",
    tags: tags.value,
  };
  // console.log("Gönderilen Post:", newPost);
  //postStore daki addPost fonksiyonuna gönderiyorum :D             Not: Gün gelir buraya bakarsan... Aferin sana iyi başa çıktın :) <3
  await postsStore.addPost(newPost);

  // Form temizleme
  title.value = '';
  content.value = '';
  image.value = null;
  tags.value = [];
  isOpen.value = false;
};

// Resim seçme işlemi
const handleImageChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    image.value = input.files[0];
  }
};
</script>

<template>
  <div class="p-6">

    <UButton label="Yeni Post Ekle" @click="isOpen = true" />

    <UModal v-model="isOpen" prevent-close class="w-5/6">
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold">Yeni Post Ekle</h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" @click="isOpen = false" />
          </div>
        </template>

        <form @submit.prevent="handleAddPost" class="inline-block align-middle">
          <div>
            <label for="image">Resim:</label>
            <input id="image" type="file" accept="image/*" @change="handleImageChange" />

            <label for="title">Başlık:</label>
            <input id="title" type="text" v-model="title" placeholder="Lütfen başlık girin." required />

            <label for="content">İçerik:</label>
            <textarea id="content" v-model="content" placeholder="Lütfen içeriği girin." required></textarea>

            <label for="tags">Etiketler:</label>
            <UInputMenu id="tags" v-model="tags" :options="tagOptions" multiple />

            <UButton type="submit" label="Ekle" class="" />
          </div>
        </form>
      </UCard>
    </UModal>
  </div>


  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Tüm Gönderiler</h1>

    <div v-if="postsStore.posts.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <CardPost v-for="post in postsStore.posts" :key="post._id" :post="post" />
    </div>

    <div v-else>
      <p class="text-gray-500">Henüz gönderi bulunmuyor.</p>
    </div>
  </div>
</template>
