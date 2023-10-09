'use client'
// counter with state
import React, { useState } from 'react'

export function Counter (): React.JSX.Element {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => { setCount(count + 1) }}>Increment</button>
    </div>
  )
}
