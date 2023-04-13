import {useState} from 'react';
import Head from 'next/head'
import Link from 'next/link'

import Blog from '../components/Blog';
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'
import { getProjects } from '../lib/api'

export async function getStaticProps() {
  const projects = await getProjects()
  return { props: { projects }, revalidate: 10, }
}

const MAX_DISPLAY = 4

export default function Home({ projects }) {

  return (
    <div>
      <Head>        
        <title>Seed 2 Success</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="description" content="Stiftelsen för Hållbar Tillväxt  och Teknisk omställning i Halland"/>
        <meta name="author" content="Frej Andreassen"/>
      </Head>
      <div>
        <TopNav/>

        <section className="py-26 bg-white dark:bg-gray-900">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <span className="text-lg font-extrabold text-indigo-500 dark:text-gray-400">Frej Andreassen Web</span>
              <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-2 mb-4">My passion is to learn and build for the dezentralized future</h1>
              <p className="text-xl font-extrabold leading-8 mb-12">Learning projects and portfolio within web development, web3 and startups </p>
            </div>
            <Blog projects={projects} MAX_DISPLAY={MAX_DISPLAY}/>
            <div className="mt-20 text-center">
              <Link href="/projects">
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
