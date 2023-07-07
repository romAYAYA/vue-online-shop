<template>
  <div class="catalog-list">
    <div class="title">
      Catalog
    </div>
    <div class="list-wrapper">
      <catalog-item
          v-for="product in PRODUCTS"
          :key="product.article"
          :product_data="product"
          @sendArticle="showArticle"
      />
    </div>
  </div>

</template>

<script>
import CatalogItem from "@/components/catalog-item.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "catalog-list",
  components: {
    CatalogItem
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
        'PRODUCTS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API'
    ]),

    showArticle(data) {
      console.log(data)
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
        .then((response)=> {
          if (response.data) {
            console.log('Data loaded')
          }
        })
  }
}
</script>

<style lang="scss">
.catalog-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}

.list-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
}
</style>
