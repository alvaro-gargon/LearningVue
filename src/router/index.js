import { createRouter, createWebHistory } from 'vue-router'
import viewPrincipal from '@/views/viewPrincipal.vue'
import viewPruebas from '@/views/viewPruebas.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'principal',
      component: viewPrincipal,
    },
    {
      path: '/pruebas',
      name: 'pruebas',
      component: viewPruebas,
    },
  ],
})

export default router
