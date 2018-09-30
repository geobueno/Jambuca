import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://jambuca-63222.firebaseio.com/products.json?print=products'
})
