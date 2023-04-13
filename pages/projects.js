import {useState} from 'react';
import Head from 'next/head'

import Blog from '../components/Blog';
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'
import { getProjects } from '../lib/api'

export async function getStaticProps() {
  const projects = await getProjects()
  return { props: { projects }, revalidate: 10, }
}

const MAX_DISPLAY = 100

export default function Projects({ projects }) {

  return (
    <div>
      <Head>        
        <title>Projects - Frej Andreassen</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="description" content="Frej Andreassen website"/>
        <meta name="author" content="Frej Andreassen"/>
      </Head>
      <div>
        <TopNav/>

        <section className="py-26 bg-white dark:bg-gray-900">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <span className="text-lg font-extrabold text-indigo-500 dark:text-gray-400">Projects</span>
              <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-2 mb-4">All projects</h1>
              <p className="text-xl font-extrabold leading-8 mb-12">Browse through all projects within web development, web3 and startups </p>
            </div>
            <Blog projects={projects} MAX_DISPLAY={MAX_DISPLAY}/>
          </div>
        </section>

        <Footer/>
      </div>
    </div>
  )
}
