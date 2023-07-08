import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import CatalogList from '@/components/catalog-list.vue'
import ShopCart from '@/components/shop-cart.vue'
import MainPage from '@/view/main-page.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'mainPage',
    component: MainPage,
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: CatalogList,
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShopCart,
    props: true,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
