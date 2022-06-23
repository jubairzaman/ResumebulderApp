import '../styles/globals.css'
import Layout from '../components/layout'
import Head from 'next/head'
import { SessionProvider } from "next-auth/react"
import { AuthDataProvider } from '../components/common/AuthDataProvider'


function MyApp({ Component, pageProps: { session, providers,csrfToken, ...pageProps },}) {
  

  const getLayout =
    Component.getLayout || ((page) => page)
  const temp = function (page) {
    if (Component.getLayout != null) {
      return <AuthDataProvider providers=
      {providers} csrfToken={csrfToken}>
        <SessionProvider session={session}>
          {Component.getLayout(page)}
        </SessionProvider>
      </AuthDataProvider>
    } else {
      return <AuthDataProvider providers=
      {providers} csrfToken={csrfToken}><SessionProvider session={session}>
        <Layout>
          {page}
        </Layout>
      </SessionProvider></AuthDataProvider>;
    }
  }

  return temp(
    <Component {...pageProps} />
  )
}



export default MyApp