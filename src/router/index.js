import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/front/Home'
import Archive from '@/views/front/Archive'
import Blog from '@/views/front/Blog'
import HomePage from '@/views/front/HomePage'
import Library from '@/views/front/Library'
import MyShare from '@/views/front/MyShare'
import CommunalNetDisk from '@/views/front/CommunalNetDisk'
import PersonalNetDisk from '@/views/front/PersonalNetDisk'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect:'/homepage',
      children:[
        {
          path: '/archive',
          name: 'Archive',
          component: Archive
        },
        {
          path: '/blog',
          name: 'Blog',
          component: Blog
        },
        {
          path: '/homepage',
          name: 'HomePage',
          component: HomePage
        },
        {
          path: '/library',
          name: 'Library',
          component: Library
        },
        {
          path: '/myShare',
          name: 'MyShare',
          component: MyShare
        },
        {
          path: '/communalNetDisk',
          name: 'CommunalNetDisk',
          component: CommunalNetDisk
        },
        {
          path: '/personalNetDisk',
          name: 'PersonalNetDisk',
          component: PersonalNetDisk
        },
      ]
    }
  ]
})
