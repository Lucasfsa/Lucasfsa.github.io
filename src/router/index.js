import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('Lucasfsa.github.io'),
  routes: [
    {
      path: '/',
      name: 'home'
    }
  ]
})

export default router
