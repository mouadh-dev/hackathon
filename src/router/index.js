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
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register.vue')
    },
    {
      path: '/petitiondashboard',
      name: 'petitiondashboard',
      component: () => import('../views/petitiondashboard.vue')
    },
    {
      path: '/admin',
      name: 'dashboard',
      component: () => import('../views/dashboard.vue')
    },
  ]
})

export default router
