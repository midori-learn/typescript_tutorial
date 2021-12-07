import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div style = {styles.container}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/todo">
          <a>Todo</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
    </footer>
  </div>
)

export default Layout
