import type { Post, PostResponse } from '~/types'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref<Post[]>([])
  const postCount = ref<number>(0)

  const fetchPosts = async () => {
    try {
    const response = await fetch('http://localhost:7000')
    
    const data: PostResponse = await response.json();


      postCount.value = data.total || 0
      posts.value = data.posts

    }catch (error) {
      console.error("Postları çekerken hata oluştu:", error)
    }
    
  }

  const addPost = async (newPost : Post) => {
    const toast =useToast();
try{
    const response = await fetch('http://localhost:7000/', {
      method:'POST',
      headers:{
        "Content-Type":"Application/json",
      },
      body:JSON.stringify(newPost)
    });

    const data = await response.json(); 

    if(data.value){
      posts.value.push(data.value)
      postCount.value++
      toast.add({
        title: 'Başarılı!',
        description: 'Yeni post başarıyla eklendi.',
        color: 'green',
        icon: 'i-heroicons-check-circle',
        timeout: 3000 
      })
      await fetchPosts();
    }

  }catch(error){

    console.error('Post oluşturulurken hata meydana geldi!!!',error);
    toast.add({
      title: 'Hata!',
      description: 'Post eklenirken bir hata oluştu.',
      color: 'red',
      icon: 'i-heroicons-x-mark-20-solid',
      timeout: 3000,
    });
  }

  // const deletePost = async(id) => {
  //   const response = await fetch(`http://localhost:7000/${id}`,{
  //     method:'DELETE',

  //   });

  //   if(!error.value){}

  // }



  const deletePost = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:7000/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error("Post silinemedi!");
      }

      // Başarıyla silindiyse, listeden çıkar
      posts.value = posts.value.filter(post => post._id !== id);
      postCount.value--;

      toast.add({
        title: 'Silindi!',
        description: 'Post başarıyla silindi.',
        color: 'green',
        icon: 'i-heroicons-trash',
        timeout: 3000
      });

    } catch (error) {
      console.error('Post silinirken hata oluştu:', error);
      toast.add({
        title: 'Hata!',
        description: 'Post silinirken bir hata meydana geldi.',
        color: 'red',
        icon: 'i-heroicons-x-mark-20-solid',
        timeout: 3000
      });
    }
  }

  }

  return {
    posts,
    fetchPosts,
    addPost,
   
  }

})