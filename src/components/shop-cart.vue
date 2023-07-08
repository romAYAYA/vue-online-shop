<template>
  <div class="shop-cart">
    <router-link to="/catalog">
      <div class="catalog-link-to-cart">To Catalog</div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!CART.length">Cart is empty</p>
    <cart-item
      v-for="(item, index) in CART"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script>
import CartItem from '@/components/cart-item.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'shop-cart',
  components: {
    CartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      },
    },
  },
  methods: {
    ...mapActions(['DELETE_FROM_CART']),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    },
  },
  computed: {
    ...mapGetters(['CART']),
  },
}
</script>

<style></style>
