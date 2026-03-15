import WaitListView from '@/views/WaitListView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'WaitList',
      component: WaitListView,
    },
  ],
})

export default router
