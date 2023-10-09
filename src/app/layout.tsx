import '../styles/globals.css'
import React from 'react'
import { Navigation } from '@/components/Navigation'

export default function RootLayout ({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html lang="en">
    <head>
      <title>FIRST NEXT JS APP</title>
    </head>
    <body>
    <Navigation/>
    {children}
    </body>
    </html>
  )
}
