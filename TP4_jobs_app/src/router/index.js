
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import AddJob from '../views/AddJob.vue'
import EditJob from '../views/EditJob.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/add',
    name: 'add-job',
    component: AddJob
  },
  {
    path: '/jobs/:id',
    name: 'job-detail',
    component: EditJob
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
