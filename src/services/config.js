import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://a-jambuca.firebaseio.com/products.json?print=products'
})
