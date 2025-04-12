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

const convertImageToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

const handleAddPost = async () => {
  const newPost = {
    title: title.value,
    content: content.value,
    image: image.value ? await convertImageToBase64(image.value) : "",
    tags: tags.value,
  };
  // console.log("Gönderilen Post:", newPost);
  //postStore daki addPost fonksiyonuna gönderiyorum :D             
  await postsStore.addPost(newPost);

  title.value = '';
  content.value = '';
  image.value = null;
  tags.value = [];
  isOpen.value = false;
};

const handleImageChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    image.value = input.files[0];
  }
};
</script>

<template>
      <UButton label="Yeni Post Ekle" @click="isOpen = true" :style="{backgroundColor:'#A855F7', color: 'white' }"/>
    <UModal v-model="isOpen" prevent-close   class="">
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <UCard class=" w-[800px]">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold">Yeni Post Ekle</h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" @click="isOpen = false" />
          </div>
        </template>

        <form @submit.prevent="handleAddPost" class="space-y-4 p-4">
          <div >
            <label for="image" class="block text-sm font-medium text-[#FDDD88] my-2">Resim:</label>
            <input id="image" type="file" accept="image/*" @change="handleImageChange"  class="mt-1 p-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-[#F2E9EB]"/>

            <label for="title" class="block text-sm font-medium text-[#FDDD88] my-2">Başlık:</label>
            <input id="title" type="text" v-model="title" placeholder="Lütfen başlık girin." required class="bg-[#F2E9EB] w-full border rounded p-1 text-black"/>

            <label for="content" class="block text-sm font-medium text-[#FDDD88] my-2">İçerik:</label>
            <textarea id="content" v-model="content" placeholder="Lütfen içeriği girin." required class="bg-[#F2E9EB] w-full border rounded p-1 h-[250px] text-black whitespace-pre"></textarea>

            <label for="tags" class="block text-sm font-medium text-[#FDDD88] my-2">Etiketler:</label>
            <USelectMenu id="tags" v-model="tags" :options="tagOptions" multiple  />

            <div class="container justify-end items-end my-3">
            <UButton type="submit" label="Ekle" :style="{ backgroundColor: '#DD8EA3', color: 'white' }" />
              </div>
          </div>
        </form>
      </UCard>
    </div>
    </UModal>
    
</template>