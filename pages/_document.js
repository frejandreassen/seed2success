import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  
  return (
    <Html className='dark'>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@700;800&display=swap"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased bg-body text-body dark:text-white font-body">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}