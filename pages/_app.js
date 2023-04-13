import React from 'react'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function App({ Component, pageProps }) {
  return <React.Fragment>
    <ThemeProvider attribute="class" >
      <Component {...pageProps} />
    </ThemeProvider>
  </React.Fragment>
  
}

export default App
