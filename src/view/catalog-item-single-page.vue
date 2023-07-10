<template>
  <div v-if="currentProduct">
    {{ currentProduct.name }}
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
