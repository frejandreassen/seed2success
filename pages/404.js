import React from 'react'
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'
import Head from 'next/head'
import Link from 'next/link'

const Custom404 = () => {
  return (
    <div>
      <Head>        
        <title>404 - Seed2Success</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="description" content="Page not found"/>
        <meta name="author" content="Frej Andreassen"/>
      </Head>
      <TopNav/>

      <section className="py-26 md:py-48 min-h-screen md:min-h-0 bg-white dark:bg-gray-900 relative overflow-hidden">
        <img className="absolute bottom-0 md:top-0 right-0 w-1/2 md:w-1/3 md:h-full" src="/nigodo-assets/background-elements/pattern-two-smashes-orange-right.svg" alt=""/>
        <img className="absolute top-0 left-0 w-2/3 md:h-full" src="/nigodo-assets/background-elements/pattern-dots-big-orange-left.svg" alt=""/>
        <div className="container px-4 mx-auto relative">
          <div className="max-w-xl mx-auto text-center">
            <span className="inline-flex mb-6 h-6 items-center justify-center text-xs font-extrabold px-2 text-indigo-900 rounded border-2 border-indigo-900 dark:border-green-500  bg-green-200 uppercase shadow-sm">Error 404</span>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold font-heading mb-3">Page not found</h1>
            <p className="text-xl font-extrabold leading-7 mb-6">Something went wrong, so this page is broken.</p>
            <div className="flex flex-wrap items-center justify-center">
              <Link href="/">
                <a className="inline-block w-full md:w-auto py-4 px-6 mb-4 md:mb-0 md:mr-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 dark:bg-green-800 dark:hover:bg-green-900 border-3 border-indigo-900 dark:border-green-500  shadow dark:shadow-green-800 rounded transition duration-200">
                  Go back to Homepage
                </a>
              </Link>
              <Link href="">
                <a className="inline-block w-full md:w-auto py-4 px-6 text-center leading-6 text-lg text-indigo-900 hover:text-white font-extrabold bg-white hover:bg-indigo-800 border-3 border-indigo-900 dark:border-green-500  dark:bg-green-400 dark:hover:bg-green-500 shadow dark:shadow-green-800 rounded transition duration-200">
                  Try Again
                </a>
              </Link>
            </div>
          </div>
        </div>
        <img src="/nigodo-assets/background-elements/pattern-two-smashes-orange-right.svg" alt=""/>
      </section>
      

      <Footer/>
    </div>
  )
}

export default Custom404