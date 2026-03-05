/**Este archivo simplemente sirve para gestionar las vista de la aplicacion */
import { createRouter, createWebHistory } from 'vue-router'
import viewPrincipal from '@/views/viewPrincipal.vue'
import ViewComponentes from '@/views/viewComponentes.vue'
import ViewApi from '@/views/viewApi.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'principal',
      component: viewPrincipal,
    },
    {
      path: '/componentes',
      name: 'componentes',
      component: ViewComponentes,
    },
    {
      path: '/apis',
      name: 'apis',
      component: ViewApi,
    },
  ],
})

export default router
