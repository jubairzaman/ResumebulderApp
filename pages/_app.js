import '../styles/globals.css'
import Layout from '../components/layout'
import Head from 'next/head'
import { SessionProvider } from "next-auth/react"

function MyApp ({  Component,  pageProps: { session, ...pageProps },}) {
  return (
    <SessionProvider session={session}>
    <Layout>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css" />
      </Head>
      
        <Component {...pageProps} />
      
    </Layout>
    </SessionProvider>
  )
}

export default MyApp
