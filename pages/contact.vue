<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const successMessage = ref('')
const errorMessage = ref('')

const sendMail = async () => {
  try {
    const { error, data } = await useFetch('http://localhost:3000/contact', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        message: message.value
      }
    })

    if (error.value) {
      throw new Error(error.value.message)
    }

    successMessage.value = data.value.message
    errorMessage.value = ''
    name.value = email.value = message.value = ''
  } catch (err) {
    errorMessage.value = 'Hata oluştu: ' + err.message
    successMessage.value = ''
  }
}
</script>


<template>
  <div class="p-6 max-w-xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">İletişim Formu</h1>
    <form @submit.prevent="sendMail">
      <input v-model="name" type="text" placeholder="Adınız" class="input" required />
      <input v-model="email" type="email" placeholder="Email" class="input" required />
      <textarea v-model="message" placeholder="Mesajınız" class="textarea" required></textarea>
      <button type="submit" class="btn">Gönder</button>
    </form>

    <p v-if="successMessage" class="text-green-500 mt-4">{{ successMessage }}</p>
    <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
  </div>
</template>



<style scoped>
.input {
  display: block;
  margin-bottom: 1rem;
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
}
.textarea {
  display: block;
  margin-bottom: 1rem;
  padding: 10px;
  width: 100%;
  height: 120px;
  border: 1px solid #ccc;
}
.btn {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
