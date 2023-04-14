import axios from 'axios'


export async function getPosts() {
  const res = await axios.get(`https://falkenberg.andreassens.se/items/blog_posts`)
  return res.data.data
} 