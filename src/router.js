import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Hotelinfo from './views/Hotelinfo.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/mylist',
      name: 'mylist',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Mylist.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/Mine.vue')
    },
    {
      path:'/hotellist',
      name:'hotellist',
      component: () => import( /* webpackChunkName: "about" */ './views/Hotellist.vue'),
      children: [{
        path: 'hotelinfo',
        name:'hotelinfo',
        component: Hotelinfo
      }]
    }
  
  ],
  linkActiveClass:'active'
})
