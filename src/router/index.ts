import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import IntroPage from '../views/IntroPage.vue'
import TaxiOrder from '../views/TaxiOrdersPage.vue'

import OrdercreatedPage from '../views/CreatedOrderPage.vue'



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/intro',
    name: 'IntroPage',
    component: IntroPage
  },
  {
    path: '/order',
    name: 'OrderCreatedPage',
    component: OrdercreatedPage
  },
  {
    path: '/taxiorder',
    name: 'taxiOrder',
    component: TaxiOrder
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
