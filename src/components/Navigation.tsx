import Link from 'next/link'
import React from 'react'
import styles from './Navigation.module.css'

const links = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Posts',
    href: '/posts'
  }
]

export function Navigation (): React.JSX.Element {
  return (
    <nav className={styles.navigation}>
      <ul>
        {links.map(({ label, href }) =>
          <li key={label}>
            <Link href={href}>
              {label}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
