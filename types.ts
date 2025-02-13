// export interface Post {
//   id: number
//   title: string
//   subtitle: string
//   content: string
//   image: string
//   userId: number
//   // views: number
//   // reactions: {
//   //   likes: number
//   //   dislikes: number
//   // }
//   tags: string[]
//   total:number
// }

// export interface PostResponse {
//   total: number
//   posts: Post[]
// }

export interface Post {
  _id: string; // MongoDB ObjectId formatı
  title: string;
  subtitle: string;
  content: string;
  image: string;
  tags: string[];
  createdAt: string; // Tarih formatı string (ISO 8601)
  userId?: number; // Eğer varsa kullanıcı ID
}

export interface PostResponse {
  posts: Post[];  // Post verilerinin dizisi
  total: number;   // Toplam post sayısı
}

