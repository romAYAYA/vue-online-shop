<template>
  <div class="cart-item">
    <div class="image-wrapper cart-image-wrapper">
      <img class="fill" :src="cart_item_data.image" alt="product" />
    </div>
    <div class="item-info">
      <p class="item-name">{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }} USD</p>
    </div>
    <div class="items-quantity">
      <button @click="decrementItem" class="change-quantity">-</button>
      Quantity: {{ cart_item_data.quantity }}
      <button @click="incrementItem" class="change-quantity">+</button>
    </div>
    <button class="btn delete-btn" @click="deleteFromCart">Delete</button>
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
@import '../assets/styles/variables';
.cart-item {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  padding: 7px;

  .item-info {
    display: flex;
    flex-direction: column;
    gap: 5px;

    font-size: 18px;
    font-weight: 500;
  }

  .items-quantity {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    font-weight: 500;

    .change-quantity {
      padding: 1px 8px;
      font-size: 20px;
      font-weight: 500;
      border-radius: $radius;
      color: #fff;
      border: 1px solid hsla(208, 59%, 73%, 1);
      background-color: transparent;
    }
  }
  .delete-btn {
    background-color: hsla(3, 49%, 57%, 1);
    color: #fff;
  }
}

@media (max-width: 767px) {
  .cart-image-wrapper {
    display: none;
  }
  .cart-item {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
