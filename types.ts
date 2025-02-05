export interface Post {
  id: number
  title: string
  subtitle: String
  content: string
  image: String
  userId: number
  // views: number
  // reactions: {
  //   likes: number
  //   dislikes: number
  // }
  tags: string[]
}

export interface PostResponse {
  total: number
  posts: Post[]
}
