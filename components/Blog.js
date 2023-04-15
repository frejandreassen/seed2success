import {useState} from 'react'
import Link from 'next/link'
import Moment from 'react-moment';

const Blog = ({posts, MAX_DISPLAY}) => {
  const [filteredPosts, setFilteredPosts] = useState(posts)
  const [activeCategory, setActiveCategory] = useState('')
  const [search, setSearch] = useState('')

  const filterByCategory = (category) => {
    
    if (!category) {
      setFilteredPosts(posts)
      setActiveCategory('')
      return
    }
    const result = posts.filter(post => post.categories.includes(category))
    setActiveCategory(category)
    setFilteredPosts(result)
  }

  const filterBySearch = (search) => {
    setSearch(search)
    setActiveCategory('')
    const result = posts.filter((post) => 
    { const searchContent = post.meta_title + post.description + post.content + post.categories.join('')
      return searchContent.toLowerCase().includes(search.toLowerCase())
    })
    setFilteredPosts(result)
  }

  return (
    <div>
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <div className="inline-flex w-full max-w-md p-4 items-center bg-white border-2 border-indigo-900 dark:border-green-500  rounded shadow dark:shadow-green-800">
          <a className="text-indigo-900 hover:text-indigo-800 dark:hover:text-green-600" href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.71 20.29L18 16.61C19.4401 14.8144 20.1375 12.5353 19.9488 10.2413C19.7601 7.94731 18.6997 5.81279 16.9855 4.27665C15.2714 2.74051 13.0338 1.91951 10.7329 1.98247C8.43203 2.04543 6.24272 2.98757 4.61514 4.61515C2.98756 6.24273 2.04543 8.43204 1.98247 10.7329C1.91951 13.0338 2.7405 15.2714 4.27664 16.9855C5.81278 18.6997 7.9473 19.7601 10.2413 19.9488C12.5353 20.1375 14.8144 19.4401 16.61 18L20.29 21.68C20.383 21.7737 20.4936 21.8481 20.6154 21.8989C20.7373 21.9497 20.868 21.9758 21 21.9758C21.132 21.9758 21.2627 21.9497 21.3846 21.8989C21.5064 21.8481 21.617 21.7737 21.71 21.68C21.8902 21.4935 21.991 21.2443 21.991 20.985C21.991 20.7257 21.8902 20.4765 21.71 20.29ZM11 18C9.61553 18 8.26215 17.5895 7.111 16.8203C5.95986 16.0511 5.06265 14.9579 4.53284 13.6788C4.00303 12.3997 3.8644 10.9922 4.1345 9.63437C4.4046 8.2765 5.07128 7.02922 6.05025 6.05026C7.02922 5.07129 8.2765 4.4046 9.63436 4.13451C10.9922 3.86441 12.3997 4.00303 13.6788 4.53285C14.9579 5.06266 16.0511 5.95987 16.8203 7.11101C17.5895 8.26216 18 9.61553 18 11C18 12.8565 17.2625 14.637 15.9497 15.9498C14.637 17.2625 12.8565 18 11 18Z" fill="#171952"></path>
            </svg>
          </a>
          <input 
            id="search"
            value={search}
            onChange={(e) => filterBySearch(e.target.value)}
            className="w-full bg-white px-3 text-lg font-extrabold text-indigo-900 placeholder-indigo-900 outline-none" placeholder="Search"/>
          {search && <a onClick={() => filterBySearch('')} className="text-indigo-900 hover:text-indigo-800 dark:hover:text-green-600" >
            <svg width="24" height="24" viewBox="0 0 24 24"  stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6l12 12" fill="#171952"></path>
            </svg>
          </a>}
        </div>
      </div>
      <div className="mb-10">
        <div className="lg:flex items-center mb-4">
          <button 
            onClick={() => filterByCategory('')} 
            className={((activeCategory=='') ? 'font-extrabold': 'text-gray-400 hover:text-gray-500') + "inline-block mb-4 mr-6 xl:mr-16 text-xl font-extrabold"}
          >
            All Categories
          </button>
          <button 
            onClick={() => filterByCategory('Technology')} 
            className={((activeCategory=='Technology') ? 'font-extrabold': 'text-gray-400 hover:text-gray-500') + "inline-block mb-4 mr-6 xl:mr-16 text-xl font-extrabold"}
            >
            Technology
          </button>
          <button 
            onClick={() => filterByCategory('Development')}  
            className={((activeCategory=='Development') ? 'font-extrabold': 'text-gray-400 hover:text-gray-500') + "inline-block mb-4 mr-6 xl:mr-16 text-xl font-extrabold"}
            >
            Development
          </button>
          <button 
            onClick={() => filterByCategory('Web3')} 
            className={((activeCategory=='Web3') ? 'font-extrabold': 'text-gray-400 hover:text-gray-500') + "inline-block mb-4 mr-6 xl:mr-16 text-xl font-extrabold"}
            >
            Web3
          </button>
          <button 
            onClick={() => filterByCategory('Startup')} 
            className={((activeCategory=='Startup') ? 'font-extrabold': 'text-gray-400 hover:text-gray-500') + "inline-block mb-4 mr-6 xl:mr-16 text-xl font-extrabold"}
            >
            Startup
          </button>
          </div>
      </div>
      <div className="flex flex-wrap md:mx-4 mb-8">
        {filteredPosts.slice(0, MAX_DISPLAY).map((post, i) => (
          <div key={i} className="w-full lg:w-1/2 md:px-4 mb-8">
            <div className="bg-white dark:bg-gray-900 border-3 border-indigo-900 dark:border-green-500  shadow-md dark:shadow-green-800 rounded-2xl overflow-hidden">
              <img className="h-64 md:h-96 w-full block object-cover" src={`https://storage.googleapis.com/andreassens.appspot.com/${post.cover_image}`} alt={post.cover_image_alt_text} />
              <div className="px-6 py-8 md:p-10 border-t-3 border-indigo-900 dark:border-green-500">
                {post.categories.map((category,i) => (
                  <span key={i} className="inline-flex mb-6 mr-3 h-6 items-center justify-center text-xs font-extrabold px-2 text-indigo-900 rounded border-2 border-indigo-900 dark:border-green-500  bg-green-200 dark:bg-green-500 uppercase shadow-sm">{category}</span>
                ))}
                <p className="text-xl font-bold text-gray-400 mb-2">{post.author} • <Moment locale="sv" format="DD MMM YYYY">{post.created}</Moment></p>
                <h2 className="text-2xl font-extrabold mb-6">{post.title}</h2>
                <p className="text-xl font-bold mb-6">{post.description}</p>
                <Link href={'/posts/'+ post.slug}><a className="inline-block text-xl font-bold text-indigo-500 hover:text-indigo-600 dark:text-green-500 dark:hover:text-green-600">Read More</a></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog