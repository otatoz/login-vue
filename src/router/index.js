import Vue from 'vue'
import VueRouter from 'vue-router'

// 登录配置
import Login from '../views/Login.vue'
import {getToken} from '../utils/index'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // 路由独享的守卫
    beforeEnter: (to,from,next) => {
      let token = getToken();
      if(token){
        // 查询info
        store.dispatch('login/userInfo',token)
        .then(()=>{
          // 当获取万用户信息之后才允许跳转
          next();
        })
      } else {
        // 跳转到登录
        next({path:'/login'})
      }
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
