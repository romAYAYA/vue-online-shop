<template>
  <div class="cart-item">
    <div class="image-wrapper">
      <img class="fill"
           :src="cart_item_data.image"
           alt="product">
    </div>
    <div class="item-info">
      <p class="item-name"></p>
      <p>{{ cart_item_data.price }}</p>
      <p>{{ cart_item_data.article }}</p>
    </div>
    <div class="items-quantity">
      <p>Quantity: {{ cart_item_data.quantity }}</p>

    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "cart-item",
  props: {
    cart_item_data: {
      type: Object as () => Record<string, unknown>,
      default() {
        return {};
      }
    },
  },
  methods: {
    deleteFromCart(this: { $emit: Function }){
      this.$emit('deleteFromCart')
    }
  },
  mounted() {
    this.cart_item_data['quantity'] = 1
  },

}
</script>

<style lang="scss">
.cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}
</style>
