import { createRouter, createWebHistory } from 'vue-router'
import LayoutMain from '@/views/Main/Index.vue'
import LayoutAuth from '@/views/Auth/Index.vue'

const routes = [
  {
    path: '',
    component: LayoutMain,
  },
  {
    path: '',
    component: LayoutAuth,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Auth/Login.vue'),
      },
    ],
  },
  {
    path: '/maintenance',
    name: 'maintenance',
    component: () => import('@/views/Errors/Maintenance.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/Errors/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
