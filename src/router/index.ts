import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/exercise1',
      name: 'exercise1',
      component: () => import('../views/Exercise1View.vue')
    },
    {
      path: '/exercise2',
      name: 'exercise2',
      component: () => import('../views/Exercise2View.vue')
    },
    {
      path: '/exercise3',
      name: 'exercise3',
      component: () => import('../views/Exercise3View.vue')
    }
  ]
})

export default router
