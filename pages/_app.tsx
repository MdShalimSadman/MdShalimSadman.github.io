import '@/styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import type { AppProps } from 'next/app'

import { CSSProperties } from 'react';




export default function App({ Component, pageProps }: AppProps) {

  return <>
     <Head>
        <title>MD Shalim Sadman</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo1.png" />
      </Head>
    <Component {...pageProps} />

  </>
}
