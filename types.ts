
export interface Post {
  _id?: string; 
  title: string;
  // subtitle: string;
  content: string;
  image: File | null;
  tags: string[];
  createdAt?: string;
  userId?: number; 
}

export interface PostResponse {
  posts: Post[]; 
  total: number;   
}





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
