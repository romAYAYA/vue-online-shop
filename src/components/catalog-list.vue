<template>
  <div class="catalog-list">
    <!--    move to header-->
    <router-link to="/cart">
      <div class="catalog-link-to-cart">
        Cart: {{ CART.length }}
      </div>
    </router-link>

    <div class="title">
      Catalog
    </div>
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
      'PRODUCTS',
        'CART' // Move to header
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),

    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
        .then((response) => {
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

  .list-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
  }

  //move to header
  .catalog-link-to-cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 16px;
    border: solid 1px black;
  }
}


</style>
