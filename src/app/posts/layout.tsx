import React from 'react'
import { Counter } from '@/app/posts/Counter'

export default function PostsLayout ({ children }: any): React.JSX.Element {
  return (
    <div>
      <Counter/>
      <h1>Posts Layout</h1>
      {children}
    </div>
  )
}
