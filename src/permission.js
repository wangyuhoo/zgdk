import router from './router'
// import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import {getToken, removeToken, setOpenid, setToken, setUid} from '@/utils/auth'
import {isIOS} from "@/utils/common"; // getToken from cookie
const queryString = require('query-string');

// NProgress.configure({ showSpinner: false })// NProgress configuration

const whiteList = ['/','/login', '/404', '/sqdk','/sqdk_bd','/sqdk_gs','/sqdk_gdt_pd','/sqdk_xlfy'] // 不重定向白名单
let isInitialized = false

router.beforeEach((to, from, next) => {
  if (isIOS() && !isInitialized) {
    isInitialized = true
    sessionStorage.setItem('ios_url', encodeURIComponent(window.location.href))
  }
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  // setToken('%242y%2410%24%2FZ2rp5qaYEeRaY7oZlSP9OIGrt51DzdQeAFhe4BmSK0cQphVp5lsy')
  // setUid('5ca8b7d5171ae3116d74f412')
  // setOpenid('odIEwwyRfhaO_KWUxylmnm2kBa8k')
  // NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      // NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      console.log(to)
      let redirect = {
        path : to.path,
        query : queryString.stringify(to.query),
      }
      let nextUrl = `/login?` + queryString.stringify(redirect)
      next(nextUrl) // 全部重定向到登录页
      // NProgress.done()
    }
  }
})

router.afterEach(() => {
  // NProgress.done() // 结束Progress
})
