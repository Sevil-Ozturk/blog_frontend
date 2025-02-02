import { defineStore } from 'pinia';
import type { Post } from '~/types';
import { useNuxtApp } from '#app';

export const usePostsStore = defineStore('postsStore', () => {
  const posts = ref<Post[]>([]);

  const { $axios } = useNuxtApp();

  const fetchPosts = async () => {
    try {
      const response = await $axios.get('/api/posts');
      posts.value = response.data;
      console.log('Veriler:', response.data);
    } catch (error) {
      console.error('Hata:', error);
    }
  };

  return {
    posts,
    fetchPosts,
  };
});
