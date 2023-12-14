import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactDetails from '../views/ContactDetails.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component : HomeView
    },
    {
      path: '/contact/:contactId',
      component : ContactDetails
    },
  ]
})

export default router
