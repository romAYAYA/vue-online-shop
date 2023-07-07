<template>
  <div class="shop-cart">
    <h1>Cart</h1>
    <cart-item
    v-for="(item, index) in cart_data"
    :key="item.article"
    :cart_item_data="item"
    @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script>
import CartItem from "@/components/cart-item.vue";
import {mapActions} from "vuex";

export default {
  name: "shop-cart",
  components: {
    CartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    ...mapActions([
        'DELETE_FROM_CART'
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    }
  }
}
</script>

<style scoped>

</style>
