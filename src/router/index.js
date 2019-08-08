import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/', component: () => import('@/views/arzt/sqdk/index'), meta: {title: ''} },
  { path: '/404', component: () => import('@/views/404'), meta: {title: '此页面未找到'} },
  { path: '*', redirect: '/404'  },
  // 其它
  { path: '/sqdk', component: () => import('@/views/arzt/sqdk/index'), meta: {title: '申请贷款'} },
  { path: '/sqdk_bd', component: () => import('@/views/arzt/sqdk/sqdk_bd'), meta: {title: '申请贷款'} },
  { path: '/sqdk_gs', component: () => import('@/views/arzt/sqdk/sqdk_gs'), meta: {title: '申请贷款'} },
  { path: '/sqdk_gdt_pd', component: () => import('@/views/arzt/sqdk/sqdk_gdt_pd'), meta: {title: '申请贷款'} },
  { path: '/sqdk_xlfy', component: () => import('@/views/arzt/sqdk/sqdk_xlfy'), meta: {title: '申请贷款'} },
]

const router = new Router({
  mode: 'history', //后端支持可开
  base: '/zgdk',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export default router
