import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
    routes: [
        /*{
          path: '/',
          name: 'landing-page',
          component: require('@/components/LandingPage').default
        },*/
        {
            path: '/',
            name: 'index',
            component: require('@/components/Index').default
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
