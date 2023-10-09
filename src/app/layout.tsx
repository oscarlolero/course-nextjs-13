import '../styles/globals.css'
import React from 'react'
import { Navigation } from '@/components/Navigation'
import { font } from '@/app/font'

export default function RootLayout ({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html lang="en">
    <head>
      <title>FIRST NEXT JS APP</title>
    </head>
    <body className={font.className}>
    <Navigation/>
    {children}
    </body>
    </html>
  )
}
