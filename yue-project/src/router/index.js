import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
// import Hello from '@/components/Hello'


import Home from '@/components/Pages/Home'
import Running from '@/components/Pages/Running'
import Travel from '@/components/Pages/Travel'
import User from '@/components/Pages/User'

import Register from '@/components/Pages/Register'
import Details_Run from '@/components/Pages/Details_Run'
import Details_Travel from '@/components/Pages/Details_Travel'
import Publish from '@/components/Pages/Publish'
import LogIn from '@/components/Pages/LogIn'

import DetailsSite from '@/components/Pages/DetailsSite'



Vue.use(Router)
Vue.use(Resource)

export default new Router({
  routes: [
    {path: '/',	name: 'Home',component: Home},
    {path: '/running',name: 'Running',component: Running},
    {path: '/travel',name: 'Travel',component: Travel},
    {path: '/user',name: 'User',component: User},
    {path: '/register',name: 'Register',component: Register},
    {path: '/details_run',name: 'Details_Run',component: Details_Run},
    {path: '/details_travel',name: 'Details_Travel',component: Details_Travel},
    {path: '/publish',name: 'Publish',component: Publish},
    {path: '/login',name: 'LogIn',component: LogIn},
    {path: '/detailsSite',name: 'detailsSite',component: DetailsSite}
  ]
})
