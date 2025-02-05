import type { Post, PostResponse } from '~/types'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref<Post[]>()
  const postCount = ref<number>(0)

  const fetchPosts = async () => {
    const { data, error } = await useFetch<PostResponse>('http://localhost:5000/posts')

    if (error.value) {
      throw new Error(error.value.message)
    }

    if (data.value) {
      postCount.value = data.value.total || 0
      posts.value = data.value.posts
    }
  }

  return {
    posts,
    fetchPosts,
  }
})
