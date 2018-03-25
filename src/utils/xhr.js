import axios from 'axios'

//TODO: make this configurable
const xhr = axios.create({
  baseURL: 'https://9xbimssel1.execute-api.us-east-1.amazonaws.com/dev'
})

xhr.interceptors.response.use(response => {
  console.log('xhr response', response)
  return response.data
}, error => {
  console.log('xhr error', error)
  return Promise.reject(error);
})

export default xhr
