import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import CatalogList from '@/components/catalog-list.vue'
import ShopCart from '@/components/shop-cart.vue'

const routes: Array<RouteRecordRaw> = [
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
