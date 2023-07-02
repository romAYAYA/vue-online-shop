<template>
  <div class="main-wrapper">
    <h1>
      <catalog-list/>
      <shop-cart/>
    </h1>
  </div>
</template>

<script lang="ts">
import CatalogList from "@/components/catalog-list.vue";
import ShopCart from "@/components/shop-cart.vue";

export default {
  name: 'main-wrapper',
  components: {CatalogList, ShopCart},
  props: {},
  data() {
    return {
      title: 'Main wrapper'
    }
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {
    console.log('Hi there')
  }
}
</script>

<style scoped>
.main-wrapper {
  display: flex;
  justify-content: center;
  align-content: center;
  max-width: 900px;
  margin: 0 auto;
}
</style>
