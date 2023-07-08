<template>
  <div class="shop-cart">
    <p class="cart-empty-note" v-if="!CART.length">Cart is empty</p>
    <cart-item
      v-for="(item, index) in CART"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <div class="cart-total">
      <p class="total-price">
        Total: {{ cartTotalCost }} <span v-if="CART.length">USD</span>
      </p>
    </div>
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
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM',
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index)
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index)
    },
  },
  computed: {
    ...mapGetters(['CART']),

    cartTotalCost() {
      if (this.CART.length) {
        return this.CART.map((el) => Math.floor(el.price) * el.quantity).reduce(
          (acc, el) => (acc = acc + el),
          0
        )
      } else return 0
    },
  },
}
</script>

<style lang="scss">
@import '../assets/styles/variables';

.shop-cart {
  margin-bottom: 70px;

  .cart-empty-note {
    font-size: 38px;
    font-weight: 700;
    color: hsla(4, 100%, 72%, 1);
  }
  .cart-total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: $padding * 3;
    display: flex;
    justify-content: center;
    background: green;

    .total-price {
      margin-right: $margin * 2;
    }
  }
}
</style>
