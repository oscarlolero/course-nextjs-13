interface Post {
  id: number
  title: string
  body: string
}

interface Comment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}
