import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/CustomerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Home,
      props: { title: 'Listado de Clientes' }
    },
    {
      path: '/agregar-cliente',
      name: 'agregar-cliente', 
      component: () => import('../views/NewCustomerVue.vue'),
      props: { title: 'Agregar Cliente' }
    },
  ]
})

export default router
