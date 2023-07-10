<template>
  <div class="catalog-item">
    <div class="item-info">
      <div class="image-wrapper">
        <router-link
          :to="{
            name: 'catalogItemSinglePage',
            params: { article: product_data.article },
          }"
        >
          <img class="fill" :src="product_data.image" alt="product" />
        </router-link>
      </div>

      <p class="product-name">{{ product_data.name }}</p>
      <p class="product-price">Price: {{ product_data.price }} USD</p>
    </div>
    <button class="add-to-cart-btn btn" @click="addToCart">Add to Cart</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'catalog-item',
  props: {
    product_data: {
      type: Object as () => object,
      default(): object {
        return {}
      },
    },
  },
  methods: {
    addToCart(this: { $emit: Function; product_data: any }) {
      this.$emit('addToCart', this.product_data)
    },
  },
  mounted() {
    // @ts-ignore
    ;(this.product_data as any)['quantity'] = 1
  },
}
</script>

<style lang="scss">
@import '../assets/styles/variables';

.catalog-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: $padding * 2;
  height: 220px;
  border-radius: $radius;
  border: 1.8px solid hsla(269, 100%, 83%, 1);

  .item-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-bottom: $margin;
  }
}

.image-wrapper {
  max-width: 200px;
  height: 90px;
  border-radius: $radius;
  overflow: hidden;
}

.product-name {
  font-weight: 600;
  text-align: center;
}

.product-price {
  font-weight: 500;
  text-align: center;
}
</style>
