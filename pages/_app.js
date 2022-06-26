import '../styles/globals.css'
import Layout from '../components/layout'
import Head from 'next/head'
import { SessionProvider } from "next-auth/react"


function MyApp({ Component, pageProps: { session, providers, csrfToken, ...pageProps }, }) {


  const temp = function (page) {
    if (Component.shouldSkipDefaultLayout != null && Component.shouldSkipDefaultLayout == true) {
      return <>
        <SessionProvider session={session}>
          {page}
        </SessionProvider>
      </>
    } else {
      return <><SessionProvider session={session}>
        <Layout>
          {page}
        </Layout>
      </SessionProvider></>;
    }
  }

  return temp(
    <Component {...pageProps} />
  )
}



export default MyApp