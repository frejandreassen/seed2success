import {useState} from 'react';
import Head from 'next/head'
import Link from 'next/link'

import Blog from '../components/Blog';
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'
import { getPosts } from '../lib/api'

export async function getStaticProps() {
  const posts = await getPosts()
  return { props: { posts }, revalidate: 10, }
}

const MAX_DISPLAY = 4

export default function Home({ posts }) {

  return (
    <div>
      <Head>        
        <title>Seed 2 Success</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="description" content="Stiftelsen för Hållbar Tillväxt  och Teknisk omställning i Halland"/>
        <meta name="author" content="Frej Andreassen"/>
      </Head>
      <div className="dark:bg-gray-900" >
        <TopNav/>

        <div className="container px-4 lg:px-12 flex h-screen mx-auto relative dark:bg-gray-900">
          <div className="lg:flex w-full m-auto">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="lg:max-w-lg">
                <span className="text-xl md:text-2xl font-extrabold text-indigo-500 dark:text-green-500">Seed2Success</span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading mt-1 mb-6">Tillsammans för Hållbar Tillväxt i Halland</h1>
                <p className="text-xl md:text-2xl font-extrabold leading-8 mb-10">Seed2Success är en Stiftelse för Hållbar Tillväxt och Teknisk Omställning i Falkenberg och Halland, under bildande</p>
                
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <img className="block h-128 lg:h-140 w-full xl:max-w-lg object-cover border-3 border-indigo-900 rounded-2xl shadow-lg dark:border-green-500 dark:border-green-500 dark:shadow-green-800" src="Tullbron2,_Falkenberg.jpeg" alt=""/>
            </div>
          </div>
        </div>
        {/* Blog section */}
        <section className="py-26 bg-white dark:bg-gray-900">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <span className="text-lg font-extrabold text-indigo-500 dark:text-gray-400">Seed2Success</span>
              <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-2 mb-4">Stiftelsen för Hållbar Tillväxt och Teknisk Omställning i Falkenberg och Halland</h1>
              <p className="text-xl font-extrabold leading-8 mb-12">En subtitle här</p>
            </div>
            <Blog posts={posts} MAX_DISPLAY={MAX_DISPLAY}/>
            <div className="mt-20 text-center">
              <Link href="/posts">
              <a className="inline-block py-4 px-12 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 dark:bg-green-800 dark:hover:bg-green-900 border-3 border-indigo-900 dark:border-green-500 dark:border-green-500 shadow dark:shadow-green-800 rounded transition duration-200">
                Show more
              </a>
              </Link>
            </div>
          </div>
        </section>

        <Footer/>
      </div>
    </div>
  )
}
