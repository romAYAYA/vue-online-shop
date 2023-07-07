<template>
  <div class="catalog-item">
    <div class="item-info">
      <div class="image-wrapper">
        <img class="fill"
             :src="product_data.image"
             alt="product">
      </div>
      <p class="product-name">{{ product_data.name }}</p>
      <p class="product-price">Price: {{ product_data.price }} USD</p>
    </div>
    <button class="add-to-cart-btn btn"
            @click="sendData">Add to Cart
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: "catalog-item",
  props: {
    product_data: {
      type: Object as () => object,
      default(): object {
        return {};
      },
    },
  },
  methods: {
    sendData(this: { $emit: Function; product_data: any }) {
      this.$emit('sendArticle', this.product_data.article);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/variables";

.catalog-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 25%;
  padding: $padding*2;
  height: 200px;
  border-radius: $radius;
  background-color: hsla(12, 44%, 58%, 1);
}

.item-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-bottom: $margin;
}

.image-wrapper {
  max-width: 200px;
  height: 80px;
  border-radius: $radius;
  overflow: hidden;
}

.product-name {
  color: #ffffff;
  font-weight: 600;
  text-align: center;
}

.product-price {
  color: #ffffff;

  font-weight: 500;
  text-align: center;
}

.add-to-cart-btn {
  background-color: hsla(292, 9%, 45%, 1);
  color: #ffffff;
  font-weight: 500;
}
</style>
