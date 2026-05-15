import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '@/components/layout/layoutView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LayoutView,
      children: [
        {
          path: '',
          name: '',
          component: HomeView,
        }
      ]
    },
  ],
})

export default router
