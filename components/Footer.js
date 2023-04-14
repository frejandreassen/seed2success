import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const d = new Date()
  const year = d.getFullYear()
  return (
    <section>
      <div className="pt-26 border-3 border-l-0 border-r-0 border-indigo-900 dark:border-green-500  dark:bg-gray-900 print:hidden">
        <div className="pb-16 border-b-3 border-indigo-900 dark:border-green-500">
          <div className="container px-4 mx-auto text-center">
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full lg:w-auto mb-12 lg:mb-0">
                <a className="inline-block mx-auto" href="#">
                  <img className="h-12" src="/favicon.png" alt=""/>
                </a>
              </div>
              <div className="w-full lg:w-auto mb-12 lg:mb-0">
                <div className="flex flex-wrap items-center justify-center">
                <Link href="/blog"><a className="inline-block mr-4 md:mr-16 2xl:mr-20 text-lg font-extrabold hover:text-indigo-800 dark:hover:text-green-600">
                    Blog
                  </a></Link>
                  <Link href="/projects"><a className="inline-block mr-4 md:mr-16 2xl:mr-20 text-lg font-extrabold hover:text-indigo-800 dark:hover:text-green-600" >
                    Projects
                  </a></Link>
                  <Link href="/about"><a className="inline-block mr-4 md:mr-16 2xl:mr-20 text-lg font-extrabold hover:text-indigo-800 dark:hover:text-green-600" >
                    About
                  </a></Link>
                  <Link href="/contact"><a className="inline-block text-lg font-extrabold hover:text-indigo-800 dark:hover:text-green-600" >
                    Contact
                  </a></Link>
                </div>
              </div>
                         </div>
          </div>
        </div>
        <div className="container px-4 pt-16 pb-24 mx-auto">
          <p className="text-center text-lg font-extrabold">Seed2Success</p>
          <p className="text-center text-md">Stiftelsen för Hållbar Tillväxt och Teknisk Omställning i Halland</p>
          <p className="text-center text-xs">© {year}</p>
        </div>
      </div>
    </section>
  )
}

export default Footer