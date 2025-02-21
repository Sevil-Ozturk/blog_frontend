<!-- <script setup lang="ts">

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

const convertImageToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file); // Resmi Base64 formatına oku
    reader.onload = () => resolve(reader.result as string);  // Başarılı olursa Base64 string olarak döner
    reader.onerror = (error) => reject(error);  // Hata durumunda
  });
};


const handleAddPost = async () => {
  const newPost = {
    title: title.value,
    content: content.value,
    image: image.value  ? await convertImageToBase64(image.value) : "",
    tags: tags.value,   
  }

  await postsStore.addPost(newPost)
  

  title.value = ''
  content.value = ''
  image.value = null  
  tags.value = []    

  isOpen.value = false
}

const tagOptions = ['Vue.js', 'Java Script', 'Frontend', 'Backend', 'UI/UX']

// Resim yükleme olayını ele alıyoruz
const handleImageChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    image.value = input.files[0];  // Seçilen dosyayı image değişkenine atıyoruz
  }
}

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
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800  ' }">
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
          @change="handleImageChange"

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
             <UInputMenu id="tags" v-model="tags" :options="tagOptions" multiple :popper="{ placement: 'right-start' }" />
          </div>

          <UButton type="submit" label="Ekle" />


        </div>
       </form>
      </UCard>
    </UModal>
  </div>
</template>
 -->



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



    <script setup lang="ts">
const postsStore = usePostsStore();

const isOpen = ref(false);
const title = ref('');
const content = ref('');
const image = ref<File | null>(null);
const tags = ref<string[]>([]);

// Seçilebilir etiketler
const tagOptions = ['Vue.js', 'JavaScript', 'Frontend', 'Backend', 'UI/UX'];

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
  console.log("Gönderilen Post:", newPost);/// hatalar var onlar düzeltilecek !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
  await postsStore.addPost(newPost);

  // Formu temizleme
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
  <div>
    <UButton label="Yeni Post Ekle" @click="isOpen = true" />

    <UModal v-model="isOpen" prevent-close>
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold">Yeni Post Ekle</h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" @click="isOpen = false" />
          </div>
        </template>

        <form @submit.prevent="handleAddPost">
          <div>
            <label for="image">Resim:</label>
            <input id="image" type="file" accept="image/*" @change="handleImageChange" />

            <label for="title">Başlık:</label>
            <input id="title" type="text" v-model="title" placeholder="Lütfen başlık girin." required />

            <label for="content">İçerik:</label>
            <textarea id="content" v-model="content" placeholder="Lütfen içeriği girin." required></textarea>

            <label for="tags">Etiketler:</label>
            <UInputMenu id="tags" v-model="tags" :options="tagOptions" multiple />

            <UButton type="submit" label="Ekle" />
          </div>
        </form>
      </UCard>
    </UModal>
  </div>
</template>
