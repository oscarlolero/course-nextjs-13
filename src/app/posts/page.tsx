import React, { Suspense } from 'react'
import ListOfPosts from '@/app/posts/ListOfPosts'

export default async function Posts (): Promise<React.JSX.Element> {
  return (
    <div>
      <h1>All posts</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ListOfPosts/>
      </Suspense>
    </div>
  )
}
