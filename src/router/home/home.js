import Home from '@/components/home/home.vue'

export default [
    {
        path: '/index/home',
        name: 'home',
        component: Home,
        children: [
          {
            path: '/index/home/search',
            component: () => import(/* webpackChunkName: "search" */ '@/components/home/header/search.vue')
          },
          {
            path: '/index/home/main',
            component: () => import(/* webpackChunkName: "main" */ '@/components/home/main/main.vue')
          },
          {
            path: '/index/home/nav',
            component: () => import(/* webpackChunkName: "nav" */ '@/components/home/nav/nav.vue')
          }
        ]
      }
]