<script setup lang="ts">
const isOpen =ref(false)
</script>

<template>
       <UButton label="Post sil" @click="isOpen = true" :style="{backgroundColor:'#dd91f4', color: '#313840' }"/>
     <UModal v-model="isOpen" prevent-close >
       <UCard>
         <template #header>
           <div class="flex items-center justify-between">
             <h3 class="text-base font-semibold">Post Sil</h3>
             <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" @click="isOpen = false" />
           </div>
         </template>
 dsvadfsjgisdbjodsjsidbsidşkbşdfjbi
 fdlkdbnşfldilbmidfş
         <!-- <form @submit.prevent="handleAddPost" class="space-y-4 p-4">
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
         </form> -->
       </UCard>
     </UModal>
     
 </template>