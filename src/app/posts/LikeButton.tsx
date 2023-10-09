'use client'

import React, { useState } from 'react'

export function LikeButton ({ id }: any): React.JSX.Element {
  const [liked, setLiked] = useState(false)
  return (
    <button onClick={() => { setLiked(!liked) }}>
      {liked ? 'Unlike' : 'Like'}
    </button>
  )
}
