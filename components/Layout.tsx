import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { yellow } from '@material-ui/core/colors'

type Props = {
  children?: ReactNode
  title?: string
}

const styles = {
  container: {
    flex:1,
    backgroundColor: "#fff",
  },
  itemNavigation: {
    textDecoration: "none",
    margin:10,
    fontWeight:"bold",
    textAlign: "center"
  }
}
const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div style = {styles.container}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header style = {{
      width: '100vw',
      justifyContent:'center',
      alignItems: 'center',
      paddingBottom: 10,
      borderBottom: "2px solid gray",
    }}>
      <nav style = {{
        justifyContent:"center",
        alignItems:'center'
      }}>
        {/* <Link href="/">
          <a style = {styles.itemNavigation}>Home</a>
        </Link> */}
        {/* <Link href="/todo">
          <a  style = {styles.itemNavigation}>Todo</a>
        </Link> */}
        <p style = {{fontWeight: "bold", width: "100%", textAlign:'center'}}> Todo List With TypeScript</p>
      </nav>
    </header>
    {children}
    <footer>
    </footer>
  </div>
)

export default Layout
