import Navbar from './navbar'
import Footer from './footer'
import Script from 'next/script'
export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/font-awesome-line-awesome/css/all.min.css" />

        </>
    )
}