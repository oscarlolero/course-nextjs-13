import React from 'react'
import Link from 'next/link'

const fetchPostComments = async (id: number): Promise<Comment[]> => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  // throw new Error('Error al cargar comentarios')
  return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { cache: 'no-store' })
    .then(async response => await response.json())
    .then(json => json)
    .catch(error => {
      console.log(error)
      return undefined
    })
}
export default async function Post ({ params }: any): Promise<React.JSX.Element> {
  const { id } = params

  const comments = await fetchPostComments(id)

  return (
    <div>
      <h1>Post id: {id}</h1>
      <ul>
        {
          comments.map((comment: any) => (
          <li key={comment.id}>
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
          </li>
          ))
        }
      </ul>

      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
    </div>
  )
}
