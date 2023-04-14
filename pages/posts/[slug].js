import React from 'react'
import Head from 'next/head'
import Moment from 'react-moment'
import ReactMarkdown from 'react-markdown'

import TopNav from '../../components/TopNav'
import Footer from '../../components/Footer'
import { getPosts } from '../../lib/api'

export async function getStaticPaths() {
  const Posts = await getPosts()
  const paths = Posts.map((post) => ({
      params: { slug: post.slug}
  }))
  return { paths, fallback: 'blocking'}
}
export async function getStaticProps({params}) {
  const Posts = await getPosts()
  const post = Posts.find(post => post.slug == params.slug)
  return {
      props: {
        post: post
      },
      // - At most once every 10 seconds
      revalidate: 10, // In seconds
  }
}

const post = ({ post }) => {
  return (
    <div>
      <Head>        
        <title>Posts - Seed2Success</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="description" content="Seed2Success"/>
        <meta name="author" content="Frej Andreassen"/>
      </Head>
      <div>
        <TopNav/>

        <section className="py-26 bg-white dark:bg-gray-900">
          <div className="container md:px-4 mx-auto">
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <p className="text-xl font-bold text-gray-400 mb-2">{post.author} • <Moment locale="sv" format="DD MMM YYYY">{post.created}</Moment></p>
              <h1 className="text-3xl md:text-4xl font-extrabold font-heading mb-4">{post.title}</h1>
              <p className="text-xl font-extrabold leading-8 mb-6">{post.description}</p>
              {post.categories.map((category,i) => (
                <span key={i} className="inline-flex mb-6 mr-3 h-6 items-center justify-center text-xs font-extrabold px-2 text-indigo-900 rounded border-2 border-indigo-900 dark:border-green-500  bg-green-200 uppercase shadow-sm">{category}</span>
              ))}
            </div>
            <img className="block w-full mb-12 h-112 lg:h-140 object-cover border-3 border-indigo-900 dark:border-green-500  rounded-2xl shadow-lg" src={`https://falkenberg.andreassens.se/assets/${post.cover_image}`} alt={post.cover_image_alt_text}/>
            <div className="max-w-4xl mx-auto">
              <div className="pt-10 pb-8 prose 
                dark:text-gray-200
                prose-headings:text-indigo-900 dark:prose-headings:text-white
                prose-blockquote:text-indigo-900 dark:prose-blockquote:text-gray-200
                prose-a:text-indigo-900 dark:prose-a:text-gray-200
                max-w-none mx-4">
                <ReactMarkdown>
                  {post.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </section>


        <Footer/>
      </div>
    </div>
  )
}

export default post