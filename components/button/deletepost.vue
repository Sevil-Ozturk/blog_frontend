<script setup lang="ts">
const isOpen =ref(false)
</script>

<template>
       <UButton label="Postu sil" @click="isOpen = true" :style="{backgroundColor:'#A855F7', color: '#313840' }"/>
     <UModal v-model="isOpen" prevent-close >
       <UCard>
         <template #header>
           <div class="flex items-center justify-between">
             <h3 class="text-base font-semibold">Bu postu silmek istediğinizden emin misiniz?</h3>
             <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" @click="isOpen = false" />
           </div>

         </template>
         <div class="flex mx-0 gap-5">
            <UButton label="Evet" color="red"  @click="isOpen = true" />
            <UButton label="Hayır"  @click="isOpen = true"/>
          </div>
       </UCard>
     </UModal>
     
 </template>

 <!-- <template>
  <UModal
    title="Bu postu silmek istediğinize emin misiniz?"
  >
    <UButton label="Postu sil" @click="isOpen = true" :style="{backgroundColor:'#A855F7', color: '#313840' }"/>

   
  </UModal>
</template> -->

<!-- 

<script setup lang="ts">
const isOpen =ref(false)
</script>

<template>
       <UButton label="Postu sil" @click="isOpen = true" :style="{backgroundColor:'#A855F7', color: '#313840' }"/>
     <UModal v-model="isOpen" prevent-close >
       <UCard>
         <template #header>
           <div class="flex items-center justify-between">
             <h3 class="text-base font-semibold">Bu postu silmek istediğinizden emin misiniz?</h3>
             <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" @click="isOpen = false" />
           </div>

         </template>
         <div class="flex mx-0 gap-5">
            <UButton label="Evet" color="red"  @click="isOpen = true" />
            <UButton label="Hayır"  @click="isOpen = true"/>
          </div>
       </UCard>
     </UModal>
     
 </template>

 <!-- <template>
  <UModal
    title="Bu postu silmek istediğinize emin misiniz?"
  >
    <UButton label="Postu sil" @click="isOpen = true" :style="{backgroundColor:'#A855F7', color: '#313840' }"/>

   
  </UModal>
</template> --> -->
