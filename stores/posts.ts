import type { Post, PostResponse } from '~/types'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref<Post[]>([])
  const postCount = ref<number>(0)

  const fetchPosts = async () => {
    try {
    const { data, error } = await useFetch<PostResponse>('http://localhost:5000')

    if (error.value) {
      throw new Error(error.value.message)
    }

    if (data.value) {
      postCount.value = data.value.total || 0
      posts.value = data.value.posts
      console.log('Veriler başarıyla çekildi:', posts.value) 
    }}catch (error) {
      console.error("Postları çekerken hata oluştu:", error)
    }
    
  }

  return {
    posts,
    fetchPosts,
  }
})


// import type { Post, PostResponse } from '~/types'

// export const usePostsStore = defineStore('posts', () => {
//   const posts = ref<Post[]>([])

//   const fetchPosts = async () => {
//     try {
//       const { data, error } = await useFetch<PostResponse>('http://localhost:5000')

//       if (error.value) {
//         throw new Error(error.value.message)
//       }

//       if (data.value) {
//         posts.value = data.value.posts // API'den gelen 'posts' dizisine erişim
//         console.log('Veriler başarıyla çekildi:', posts.value)
//       }
//     } catch (error) {
//       console.error("Postları çekerken hata oluştu:", error)
//     }
//   }

//   return {
//     posts,
//     fetchPosts,
//   }
// })
