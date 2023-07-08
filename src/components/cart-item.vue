<template>
  <div class="cart-item">
    <div class="image-wrapper">
      <img class="fill" :src="cart_item_data.image" alt="product" />
    </div>
    <div class="item-info">
      <p class="item-name"></p>
      <p>{{ cart_item_data.price }}</p>
      <p>{{ cart_item_data.article }}</p>
    </div>
    <div class="items-quantity">
      <p>
        <span @click="decrementItem" class="change-quantity">-</span>
        Quantity: {{ cart_item_data.quantity }}
        <span @click="incrementItem" class="change-quantity">+</span>
      </p>
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'cart-item',
  props: {
    cart_item_data: {
      type: Object as () => Record<string, unknown>,
      default() {
        return {}
      },
    },
  },
  methods: {
    deleteFromCart(this: { $emit: Function }) {
      this.$emit('deleteFromCart')
    },

    decrementItem(this: { $emit: Function }) {
      this.$emit('decrement')
    },

    incrementItem(this: { $emit: Function }) {
      this.$emit('increment')
    },
  },
}
</script>

<style lang="scss">
.cart-item {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  padding: 7px;
}
</style>
