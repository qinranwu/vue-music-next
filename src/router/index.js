import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/recommend',
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: () => import('@/views/recommend/recommend.vue'),
    },
    {
      path: '/singer',
      name: 'singer',
      component: () => import('@/views/singer/singer.vue'),
    },
    {
      path: '/top-list',
      name: 'top-list',
      component: () => import('@/views/top-list/top-list.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/search/search.vue'),
    },
  ],
})

export default router
