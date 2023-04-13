import axios from 'axios'

export async function getCV() {
  const res = await axios.get(`https://frejandreassen.github.io/cv/Frej_Andreassen_CV_MAC.json`)
  return res.data
}

export async function getProjects(search) {
  const res = await axios.get(`https://frejandreassen.github.io/cv/Frej_Andreassen_projects.json`)
  return res.data
} 