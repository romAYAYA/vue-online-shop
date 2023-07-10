<template>
  <div class="catalog-item-single-page" v-if="currentProduct">
    <div class="image-wrapper single-product-image-wrapper">
      <img class="fill" :src="currentProduct.image" alt="product" />
    </div>
    <div class="single-product-name">
      Hi there, I'm <span>{{ currentProduct.name }}</span>
    </div>
    <div class="single-product-description">
      {{ currentProduct.description }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'catalog-item-single-page',
  computed: {
    ...mapGetters(['PRODUCTS']),

    currentProduct() {
      const article = this.$route.params.article
      return this.PRODUCTS.find((product) => product.article === article)
    },
  },
}
</script>

<style lang="scss">
.catalog-item-single-page {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

  .single-product-image-wrapper {
    height: 350px;
    max-width: 700px;
  }

  .single-product-name {
    font-size: 26px;
    font-weight: 600;

    span {
      color: hsla(268, 51%, 71%, 1);
    }
  }

  .single-product-description {
    font-size: 24px;
    font-weight: 500;

    max-width: 700px;
  }
}
</style>
