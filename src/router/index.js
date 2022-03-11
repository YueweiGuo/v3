import { createRouter, createWebHistory } from 'vue-router'
import { getToken } from '@/utils/user'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: import('@/views/home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: import('@/views/login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from, getToken())
  if (to.path === '/login') {
    next()
  } else {
    if (getToken()) {
      console.log('home')
      next()
    } else {
      console.log('login')
      next('/login')
    }
  }
})

export default router
