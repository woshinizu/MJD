import Home from '@/components/home/home.vue'
// import Main from '@/components/home/mian/main.vue'

export default [
    {
        path: '/index/home',
        name: 'home',
        component: Home,
        children: [
          // {
          //   path: '/index/home/search',
          //   // component: () => import(/* webpackChunkName: "search" */ '@/components/home/header/search.vue')
          // },
          // {
          //   path: '/index/home/main',
          //   name:'main',
          //   component:Main,
            
          // },
          // {
          //   path: '/index/home/nav',
          //   // component: () => import(/* webpackChunkName: "nav" */ '@/components/home/nav/nav.vue')
          // }
        ]
      }
]