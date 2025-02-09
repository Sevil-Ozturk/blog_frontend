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


// import { defineStore } from 'pinia'
// import { ref } from 'vue'

// export const usePostsStore = defineStore('posts', () => {
//   const posts = ref<any[]>([])
//   const postCount = ref<number>(0)

//   // Post verisini al
//   const fetchPosts = async () => {
//     const { data, error } = await useFetch('http://localhost:5000')
//     if (error.value) {
//       throw new Error(error.value.message)
//     }

//   }

  // Yeni post ekle
  // const addPost = async (newPost: any) => {
  //   try {
  //     const response = await useFetch('http://localhost:5000/', {
  //       method: 'POST',
  //       body: JSON.stringify(newPost),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //     if (response.data.value) {
  //       posts.value.push(response.data.value) // Yeni postu listeye ekle
  //     }
  //   } catch (error) {
  //     console.error('Yeni post eklerken hata oluştu:', error)
  //   }
  // }

//   return {
//     posts,
//     fetchPosts,
//     // addPost,
//   }
// })
