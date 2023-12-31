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
        <meta name="google-site-verification" content="OzeM1xWgaOz5sMqu5Gu-TjdKIUocxhXXQMyEVLWbLfw" />
        <meta
            name="description"
            content="I am MD Shalim Sadman, a web developer. Welcome to my portfolio website"
          />
        <link rel="icon" href="/logo1.png" />
        
      </Head>
    <Component {...pageProps} />

  </>
}
