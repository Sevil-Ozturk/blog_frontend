import axios from 'axios';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig();
  const axiosInstance = axios.create({
    baseURL: config.public.BACKEND_URL,
    timeout: 5000,
  });

  // Hataları yakalamak için interceptor ekleyin
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error('API Hatası:', error.response?.data || error.message);
      return Promise.reject(error);
    }
  );

  // Nuxt uygulamasına axios örneğini sağlayın
  nuxtApp.provide('axios', axiosInstance);
});
