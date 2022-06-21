import '../styles/globals.css'
import Layout from '../components/layout'
import Head from 'next/head'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {


  const getLayout =
    Component.getLayout || ((page) => page)
  const temp = function (page) {
    if (Component.getLayout != null) {
      return <SessionProvider session={session}>
        {Component.getLayout(page)}
      </SessionProvider>
    } else {
      return <SessionProvider session={session}>
        <Layout>
          {page}
        </Layout>
      </SessionProvider>;
    }
  }

  return temp(
    <Component {...pageProps} />
  )
}

export default MyApp
