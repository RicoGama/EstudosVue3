import { createRouter, createWebHashHistory } from 'vue-router'
import HomeComponent from '../views/Home.vue'
import BasketComponent from '../views/Basket.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/basket',
    name: 'Basket',
    component: BasketComponent
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
