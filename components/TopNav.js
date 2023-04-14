import React from 'react'
import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch';

const TopNav = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <section>
      <nav className="flex items-center bg-white dark:bg-gray-900 py-6 px-6 md:px-10 relative print:hidden">
        <Link href="/">
          <a className="text-lg font-bold mr-auto">
            <div className="flex items-center">
              <img className="h-12 rounded-full" src="/favicon.png" alt="" width="auto"/>
              <div className="ml-3 text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800 dark:hover:text-green-600 dark:text-green-500 dark:hover:text-green-600">Seed2Success</div>
            </div>
          </a>
        </Link>
        <div className="xl:hidden">
          <span className="mr-2"><ThemeSwitch/></span>
          <button className="navbar-burger focus:outline-none text-indigo-900 dark:text-gray-400 hover:text-indigo-800 dark:hover:text-green-600" onClick={handleDrawerToggle}>
            <svg className="block h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden xl:flex mr-12">
          <li className="mr-10"><ThemeSwitch/></li>
          <li><Link href="/blog"><a className="text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800 dark:hover:text-green-600 dark:hover:text-green-600" >Blog</a></Link></li>
          <li><Link href="/posts"><a className="text-lg mr-10 2xl:mr-16 font-extrabold hover:text-indigo-800 dark:hover:text-green-600 dark:hover:text-green-600" >Posts</a></Link></li>
          <li><Link href="/about"><a className="text-lg font-extrabold hover:text-indigo-800 dark:hover:text-green-600 dark:hover:text-green-600" >About</a></Link></li>
        </ul>
        <div className="hidden xl:flex items-center">
          <Link href="/contact">
            <a className="inline-block py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 dark:bg-green-800 dark:hover:bg-green-900 border-3 border-indigo-900 dark:border-green-500  shadow dark:shadow-green-800 dark:shadow-green-800 rounded transition duration-200">
              Kontakt
            </a>
          </Link>
        </div>
      </nav>
      {/* MOBILE MENU */}
      {mobileOpen && <div className="navbar-menu relative z-50">
        {/* <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div> */}
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-full md:w-5/6 max-w-sm py-8 px-8 bg-white dark:bg-gray-900 border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <Link href="/">
              <a className="mr-auto text-2xl font-bold leading-none">
                <img className="h-6 rounded-full" src="/favicon.png" alt="" width="auto"/>
              </a>
            </Link>
            <button className="navbar-close" onClick={handleDrawerToggle}>
              <svg className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1"><Link href="/blog"><a className="block p-4 text-lg font-extrabold rounded" href="#">Blog</a></Link></li>
              <li className="mb-1"><Link href="/posts"><a className="block p-4 text-lg font-extrabold rounded" href="#">Posts</a></Link></li>
              <li className="mb-1"><Link href="/about"><a className="block p-4 text-lg font-extrabold rounded" href="#">About</a></Link></li>
            </ul>
          </div>
          <div className="mt-auto"><Link href="/contact"><a className="block py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 dark:bg-green-500 dark:hover:bg-green-600 border-3 border-indigo-900  dark:border-green-500  shadow dark:shadow-green-800 rounded transition duration-200" href="#">Contact Me</a></Link></div>
        </nav>
      </div>
    }
    </section>
  )
}

export default TopNav