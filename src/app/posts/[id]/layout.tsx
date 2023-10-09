import React from 'react'
import Link from 'next/link'

const fetchPost = async (id: number): Promise<Post> => {
  return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' })
    .then(async response => await response.json())
    .then(json => json)
    .catch(error => {
      console.log(error)
      return []
    })
}
export default async function PostLayout ({ children, params }: any): Promise<React.JSX.Element> {
  const { id } = params

  const post = await fetchPost(id)

  return (
    <div>
      <h1>Post id: {id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </div>
  )
}
