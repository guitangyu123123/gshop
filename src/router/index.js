//路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'
//引入组件
import Home from '../pages/Home/Home.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Personal from '../pages/Personal/Personal.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/home'
    },
     {
       path:'/home',
       name:'Home',
       component:Home,
       //控制底部组件隐藏显示
       meta:{
         showFooter:true
       }
     },
     {
      path:'/search',
      name:'Search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
     {
      path:'/order',
      name:'Order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/personal',
      name:'Personal',
      component:Personal,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
  ]
})
