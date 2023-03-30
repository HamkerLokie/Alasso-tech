import axios from 'axios'

const instance = axios.create({
  // baseURL: 'https://dull-erin-piranha-yoke.cyclic.app'
  baseURL: 'http://localhost:8000'
})

export default instance
