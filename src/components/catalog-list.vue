<template>
  <div class="catalog-list">
    <div class="list-wrapper">
      <catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import CatalogItem from '@/components/catalog-item.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'catalog-list',
  components: {
    CatalogItem,
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['PRODUCTS']),
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),

    addToCart(data) {
      this.ADD_TO_CART(data)
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log('Data loaded')
      }
    })
  },
}
</script>

<style lang="scss">
.catalog-list {
  margin-bottom: 50px;

  .list-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 10px;
  }
  @media (max-width: 767px) {
    .list-wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      padding: 10px;
    }
  }
}
</style>
