import React from 'react'
import Link from 'next/link'
import { LikeButton } from '@/app/posts/LikeButton'

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

export default async function ListOfPosts (): Promise<React.JSX.Element> {
  const posts = await fetchPosts()

  return (
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
  )
}
