import React from 'react'
import { LikeButton } from '@/app/posts/LikeButton'
import Link from 'next/link'

const fetchPosts = async (): Promise<[]> => {
  return await fetch('https://jsonplaceholder.typicode.com/posts', {
    // cache: 'no-store'
    next: {
      revalidate: 60 // hace refresh cada 60 segundos de los datos desde el server
    }
  })
    .then(async response => await response.json())
    .then(json => json)
    .catch(error => {
      console.log(error)
      return []
    })
}

export default async function Posts (): Promise<React.JSX.Element> {
  const posts = await fetchPosts()

  return (
    <div>
      <h1>All posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <LikeButton id={post.id}/>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
