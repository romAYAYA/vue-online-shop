import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import CatalogList from '@/components/catalog-list.vue'
import ShopCart from '@/components/shop-cart.vue'
import MainPage from '@/view/main-page.vue'
import PurchaseForm from '@/view/purchase-form-page.vue'
import CatalogItemSinglePage from '@/view/catalog-item-single-page.vue'

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
    path: '/catalog/:article',
    name: 'catalogItemSinglePage',
    component: CatalogItemSinglePage,
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShopCart,
    props: true,
  },
  {
    path: '/purchase',
    name: 'purchaseForm',
    component: PurchaseForm,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
