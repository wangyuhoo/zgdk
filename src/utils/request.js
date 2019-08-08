import axios from 'axios'
import {Toast, MessageBox} from 'mint-ui'
import {getToken} from '@/utils/auth'
import {logout} from "../api/login";

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  timeout: 45000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    let token = getToken()
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    console.log('response=', response)
    return response.data
  },
  error => {
    console.log('error.response=', error.response)
    if (error.response.status === 401 || error.response.status === 403) {
      MessageBox.alert(
        '登录已过期,重新登录',
      ).then(() => {
        logout()
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
      return Promise.reject('error')
    } else {
      Toast({
        message: error.response.data,
        type: 'error',
        duration: 5 * 1000
      })
    }
    return Promise.reject(error)
  }
)

export default service
