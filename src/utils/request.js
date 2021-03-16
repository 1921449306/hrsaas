import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
// 创建一个axios的实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000 // request timeout
})

// 添加请求拦截器
service.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  const token = store.getters.token
  if (token) {
    config.headers.Authorization = 'Bearer ' + token
  }
  // console.log(token)
  return config
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function(response) {
  // 对响应数据做点什么
  const res = response.data
  const { message, success } = res
  if (!success) {
    Message.error(message)
    return Promise.reject(new Error(message))
  }
  return res
}, function(error) {
  // 对响应错误做点什么
  console.dir(error)
  Message.error(error.message)
  return Promise.reject(error)
})
export default service
