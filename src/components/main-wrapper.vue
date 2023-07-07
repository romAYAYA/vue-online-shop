<template>
  <div class="main-wrapper">
    <div>
      <catalog-list/>
      <shop-cart
          v-if="CART.length"
          :cart_data="CART"
      />
    </div>
  </div>
</template>

<script lang="ts">
import CatalogList from "@/components/catalog-list.vue";
import ShopCart from "@/components/shop-cart.vue"
import {mapGetters} from "vuex";

export default {
  name: 'main-wrapper',
  components: {CatalogList, ShopCart},
  props: {},
  data() {
    return {
      title: 'Main wrapper'
    }
  },
  computed: {
    ...mapGetters(['CART'])
  },
  methods: {},
  watch: {},
  mounted() {
    console.log('Hi there')
  }
}
</script>

<style lang="scss">
.main-wrapper {
  display: flex;
  justify-content: center;
  align-content: center;
  max-width: 900px;
  margin: 0 auto;
}
</style>
