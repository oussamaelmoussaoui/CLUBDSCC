import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | DSCC` : 'Data Science Club'}</title>
        <meta name="description" content="Data Science Club ENSA" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  )
}
