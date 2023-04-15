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
            <div className="w-full lg:w-1/2 px-4 mb-12">
              <div className="lg:max-w-xl">
                <span className="text-xl md:text-2xl font-extrabold text-indigo-500 dark:text-green-500">Seed2Success</span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading mt-1 mb-6">Nya idéer, teknik och innovation för hållbar tillväxt</h1>
                <p className="text-xl md:text-2xl font-extrabold leading-8 mb-10">Seed2Success är en Stiftelse för Hållbar Tillväxt och Teknisk Omställning i Falkenberg och Halland, under bildande</p>
                
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <img className="block h-128 lg:h-140 w-full xl:max-w-lg object-cover border-3 border-indigo-900 rounded-2xl shadow-lg dark:border-green-500 dark:border-green-500 dark:shadow-green-800" src="Tullbron2,_Falkenberg.jpeg" alt=""/>
            </div>
          </div>
        </div>
        {/* Blog section */}
        <section className="py-26 px-4 bg-white dark:bg-gray-900">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <span className="text-lg font-extrabold text-indigo-500 dark:text-green-600">Blog</span>
              <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-2 mb-4">Utvalda artiklar</h1>
              <p className="text-xl font-extrabold leading-8 mb-12">En subtitle här</p>
            </div>
            <Blog posts={posts} MAX_DISPLAY={MAX_DISPLAY}/>
            <div className="mt-20 text-center">
              <Link href="/posts">
              <a className="inline-block py-4 px-12 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 dark:bg-green-800 dark:hover:bg-green-900 border-3 border-indigo-900 dark:border-green-500 shadow dark:shadow-green-800 rounded transition duration-200">
                Alla artiklar
              </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section className="py-26 bg-white dark:bg-gray-900">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/3 px-4 mb-20 lg:mb-0">
                <div className="relative h-full px-6 pb-12 pt-20 border-3 border-indigo-900 dark:border-green-500 dark:shadow-green-800 rounded-2xl shadow-md text-center">
                  <div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center w-24 h-24 bg-white dark:bg-gray-900 rounded-full border-3 border-indigo-900 dark:border-green-500 dark:shadow-md-green-800text-indigo-900">
                    <svg width="30" height="34" viewbox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M28.6833 11.7L18.3333 1.63331C17.4566 0.799736 16.2931 0.3349 15.0833 0.3349C13.8736 0.3349 12.7101 0.799736 11.8333 1.63331L1.48333 11.6333C1.02347 12.0348 0.653608 12.5288 0.397983 13.0832C0.142357 13.6375 0.00673439 14.2396 0 14.85V29.15C0.0175674 30.3627 0.515073 31.519 1.38353 32.3656C2.25199 33.2121 3.42059 33.68 4.63333 33.6666H25.3667C26.5794 33.68 27.748 33.2121 28.6165 32.3656C29.4849 31.519 29.9824 30.3627 30 29.15V14.85C29.9987 14.2641 29.8817 13.6842 29.6558 13.1437C29.4298 12.6031 29.0994 12.1125 28.6833 11.7V11.7ZM14.0667 4.03331C14.3216 3.80025 14.6546 3.67101 15 3.67101C15.3454 3.67101 15.6784 3.80025 15.9333 4.03331L25 12.8333L15.8833 21.6333C15.6284 21.8664 15.2954 21.9956 14.95 21.9956C14.6046 21.9956 14.2716 21.8664 14.0167 21.6333L5 12.8333L14.0667 4.03331ZM26.6667 29.15C26.6452 29.4771 26.4978 29.7832 26.2554 30.0039C26.0129 30.2246 25.6944 30.3426 25.3667 30.3333H4.63333C4.30563 30.3426 3.98708 30.2246 3.74464 30.0039C3.5022 29.7832 3.35477 29.4771 3.33333 29.15V15.9166L10.0833 22.4166L7.31667 25.0833C7.00625 25.3956 6.83201 25.818 6.83201 26.2583C6.83201 26.6986 7.00625 27.121 7.31667 27.4333C7.47158 27.5958 7.65772 27.7253 7.86393 27.8141C8.07014 27.9029 8.29216 27.9491 8.51667 27.95C8.94578 27.9483 9.3577 27.7811 9.66667 27.4833L12.6167 24.65C13.3493 25.0977 14.1914 25.3346 15.05 25.3346C15.9086 25.3346 16.7507 25.0977 17.4833 24.65L20.4333 27.4833C20.7423 27.7811 21.1542 27.9483 21.5833 27.95C21.8078 27.9491 22.0299 27.9029 22.2361 27.8141C22.4423 27.7253 22.6284 27.5958 22.7833 27.4333C23.0938 27.121 23.268 26.6986 23.268 26.2583C23.268 25.818 23.0938 25.3956 22.7833 25.0833L20 22.4166L26.6667 15.9166V29.15Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-3">Email</h3>
                  <h4 className="sm:text-xl font-extrabold mb-6">Lorem ipsum dolor sit amet</h4>
                  <p className="text-xl sm:text-2xl text-gray-400">hej@seed2success.se</p>
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-4 mb-20 lg:mb-0">
                <div className="relative h-full px-6 pb-12 pt-20 border-3 border-indigo-900 dark:border-green-500 dark:shadow-green-800 rounded-2xl shadow-md text-center">
                  <div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center w-24 h-24 bg-white dark:bg-gray-900  rounded-full border-3 border-indigo-900 dark:border-green-500 dark:shadow-md-green-800text-indigo-900">
                    <svg width="40" height="40" viewbox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M32.35 21.6666C31.9834 21.6666 31.6 21.55 31.2334 21.4666C30.4914 21.3007 29.7619 21.0836 29.05 20.8166C28.2769 20.5354 27.427 20.55 26.6639 20.8577C25.9008 21.1653 25.2785 21.7444 24.9167 22.4833L24.55 23.25C22.9314 22.332 21.4361 21.2119 20.1 19.9166C18.8048 18.5806 17.6847 17.0853 16.7667 15.4666L17.5334 15.1166C18.2723 14.7548 18.8513 14.1325 19.159 13.3695C19.4667 12.6064 19.4813 11.7565 19.2 10.9833C18.9354 10.265 18.7182 9.53011 18.55 8.78331C18.4667 8.41665 18.4 8.03331 18.35 7.66665C18.1477 6.49268 17.5328 5.42955 16.6161 4.66871C15.6994 3.90787 14.5412 3.49933 13.35 3.51665H8.33338C7.62879 3.51572 6.93196 3.66373 6.28857 3.95095C5.64519 4.23818 5.06977 4.65814 4.60004 5.18331C4.12058 5.72274 3.76357 6.35956 3.55355 7.05004C3.34353 7.74052 3.28547 8.46827 3.38338 9.18331C4.28935 16.1202 7.45873 22.5644 12.4 27.5166C17.3523 32.458 23.7965 35.6273 30.7334 36.5333C30.9497 36.5498 31.167 36.5498 31.3834 36.5333C32.6124 36.5351 33.799 36.0842 34.7167 35.2666C35.2419 34.7969 35.6618 34.2215 35.9491 33.5781C36.2363 32.9347 36.3843 32.2379 36.3834 31.5333V26.5333C36.3744 25.3817 35.9681 24.2685 35.2333 23.3818C34.4984 22.4951 33.48 21.8893 32.35 21.6666ZM33.1667 31.6666C33.1662 31.8992 33.1169 32.1291 33.0222 32.3415C32.9275 32.5539 32.7894 32.7442 32.6167 32.9C32.434 33.0664 32.2167 33.1901 31.9803 33.2622C31.7439 33.3343 31.4945 33.3529 31.25 33.3166C25.0305 32.5044 19.2505 29.67 14.8 25.25C10.3458 20.7958 7.48676 14.9956 6.66671 8.74998C6.6305 8.50554 6.6491 8.2561 6.72117 8.01973C6.79323 7.78336 6.91695 7.56598 7.08338 7.38331C7.24108 7.20857 7.43401 7.06921 7.64946 6.97441C7.86491 6.87961 8.098 6.83152 8.33338 6.83331H13.3334C13.7186 6.8239 14.0953 6.94829 14.3992 7.18531C14.703 7.42234 14.9154 7.75734 15 8.13331C15 8.58331 15.15 9.04998 15.25 9.49998C15.4427 10.3731 15.6989 11.2309 16.0167 12.0666L13.6834 13.1666C13.2823 13.3508 12.9706 13.6864 12.8167 14.1C12.65 14.5057 12.65 14.9609 12.8167 15.3666C15.2154 20.5046 19.3454 24.6346 24.4834 27.0333C24.8891 27.2 25.3443 27.2 25.75 27.0333C26.1636 26.8794 26.4993 26.5677 26.6834 26.1666L27.7334 23.8333C28.5932 24.1468 29.4729 24.403 30.3667 24.6C30.8 24.7 31.2667 24.7833 31.7167 24.85C32.0927 24.9346 32.4277 25.147 32.6647 25.4509C32.9017 25.7547 33.0261 26.1314 33.0167 26.5166L33.1667 31.6666ZM23.3334 3.33331C22.95 3.33331 22.55 3.33331 22.1667 3.33331C21.7247 3.37089 21.3157 3.58251 21.0297 3.92164C20.7437 4.26077 20.6041 4.69962 20.6417 5.14165C20.6793 5.58367 20.8909 5.99267 21.23 6.27866C21.5692 6.56466 22.008 6.70422 22.45 6.66665H23.3334C25.9855 6.66665 28.5291 7.72021 30.4044 9.59558C32.2798 11.4709 33.3334 14.0145 33.3334 16.6666C33.3334 16.9666 33.3334 17.25 33.3334 17.55C33.2964 17.9897 33.4353 18.4261 33.7196 18.7635C34.004 19.1009 34.4105 19.3118 34.85 19.35H34.9834C35.4006 19.3517 35.8033 19.1968 36.1119 18.916C36.4205 18.6352 36.6125 18.2488 36.65 17.8333C36.65 17.45 36.65 17.05 36.65 16.6666C36.65 13.1333 35.2476 9.74445 32.7507 7.24444C30.2538 4.74444 26.8667 3.33773 23.3334 3.33331ZM26.6667 16.6666C26.6667 17.1087 26.8423 17.5326 27.1549 17.8452C27.4674 18.1577 27.8913 18.3333 28.3334 18.3333C28.7754 18.3333 29.1993 18.1577 29.5119 17.8452C29.8244 17.5326 30 17.1087 30 16.6666C30 14.8985 29.2977 13.2028 28.0474 11.9526C26.7972 10.7024 25.1015 9.99998 23.3334 9.99998C22.8913 9.99998 22.4674 10.1756 22.1549 10.4881C21.8423 10.8007 21.6667 11.2246 21.6667 11.6666C21.6667 12.1087 21.8423 12.5326 22.1549 12.8452C22.4674 13.1577 22.8913 13.3333 23.3334 13.3333C24.2174 13.3333 25.0653 13.6845 25.6904 14.3096C26.3155 14.9347 26.6667 15.7826 26.6667 16.6666Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-3">Telefon</h3>
                  <h4 className="sm:text-xl font-extrabold mb-6">Lorem ipsum dolor sit amet</h4>
                  <p className="text-xl sm:text-2xl text-gray-400">+7-843-672-431</p>
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-4">
                <div className="relative h-full px-6 pb-12 pt-20 border-3 border-indigo-900 dark:border-green-500 dark:shadow-green-800 rounded-2xl shadow-md text-center">
                  <div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center w-24 h-24 bg-white dark:bg-gray-900  rounded-full border-3 border-indigo-900 dark:border-green-500 dark:shadow-md-green-800text-indigo-900">
                    <svg width="30" height="34" viewbox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25 4.46666C22.3479 1.81449 18.7508 0.324524 15 0.324524C11.2493 0.324524 7.65221 1.81449 5.00005 4.46666C2.34788 7.11882 0.85791 10.7159 0.85791 14.4667C0.85791 18.2174 2.34788 21.8145 5.00005 24.4667L13.7834 33.2667C13.9383 33.4229 14.1227 33.5469 14.3258 33.6315C14.5288 33.7161 14.7467 33.7597 14.9667 33.7597C15.1867 33.7597 15.4046 33.7161 15.6077 33.6315C15.8108 33.5469 15.9951 33.4229 16.15 33.2667L25 24.3833C27.6411 21.7422 29.1249 18.1601 29.1249 14.425C29.1249 10.6899 27.6411 7.10779 25 4.46666V4.46666ZM22.6167 22L15 29.65L7.38338 22C5.87862 20.4939 4.85417 18.5754 4.43954 16.4871C4.0249 14.3989 4.23869 12.2346 5.05389 10.2678C5.86908 8.30102 7.24907 6.62008 9.01943 5.43745C10.7898 4.25483 12.871 3.62363 15 3.62363C17.1291 3.62363 19.2103 4.25483 20.9807 5.43745C22.751 6.62008 24.131 8.30102 24.9462 10.2678C25.7614 12.2346 25.9752 14.3989 25.5606 16.4871C25.1459 18.5754 24.1215 20.4939 22.6167 22V22ZM10 9.34999C8.65457 10.6996 7.89904 12.5276 7.89904 14.4333C7.89904 16.339 8.65457 18.167 10 19.5167C10.9996 20.518 12.2727 21.2018 13.6595 21.4823C15.0462 21.7629 16.485 21.6276 17.7952 21.0936C19.1054 20.5595 20.2287 19.6505 21.0242 18.4804C21.8197 17.3104 22.2519 15.9314 22.2667 14.5167C22.2742 13.572 22.0922 12.6354 21.7316 11.7623C21.3709 10.8892 20.8388 10.0973 20.1667 9.43333C19.5062 8.75762 18.7185 8.21922 17.8491 7.8491C16.9797 7.47898 16.0456 7.28445 15.1007 7.27671C14.1558 7.26896 13.2187 7.44815 12.3433 7.80397C11.468 8.15979 10.6716 8.68521 10 9.34999V9.34999ZM17.8167 17.15C17.1851 17.7912 16.3504 18.1932 15.4553 18.2871C14.5601 18.381 13.6602 18.1611 12.9092 17.6649C12.1583 17.1687 11.603 16.4271 11.3384 15.5668C11.0737 14.7065 11.1161 13.7811 11.4583 12.9486C11.8005 12.1161 12.4212 11.4284 13.2144 11.0029C14.0075 10.5774 14.9238 10.4407 15.8066 10.616C16.6894 10.7914 17.4839 11.2679 18.0542 11.9642C18.6246 12.6605 18.9353 13.5333 18.9334 14.4333C18.9091 15.4621 18.4775 16.4392 17.7334 17.15H17.8167Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-3">Besök</h3>
                  <h4 className="sm:text-xl font-extrabold mb-6">Lorem ipsum dolor sit amet</h4>
                  <p className="text-xl sm:text-2xl text-gray-400">1686, Geraldine Lane</p>
                  <p className="text-xl sm:text-2xl text-gray-400">New York, NY 10013</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    </div>
  )
}
