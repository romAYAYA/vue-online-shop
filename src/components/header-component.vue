<template>
  <div class="header-component">
    <div class="header-logo">
      <router-link to="/">
        <img class="fill" src="../assets/logo.png" alt="logo" />
      </router-link>
    </div>
    <div class="navbar">
      <div class="navbar-link">
        <router-link class="link" to="/catalog">Catalog</router-link>
      </div>
    </div>
    <div class="link-to-cart">
      <router-link class="link" to="/cart">
        Cart: {{ CART.length }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
export default {
  name: 'header-component',
  computed: {
    ...mapGetters(['CART']),
  },
}
</script>

<style lang="scss">
.header-component {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  background-color: hsla(215, 21%, 11%, 1);
  margin-bottom: 50px;

  .header-logo {
    max-width: 76px;
  }

  .navbar {
    .navbar-link {
      color: #fff;
      font-weight: 500;
      font-size: 24px;
      text-decoration: none;
    }
  }

  .link-to-cart {
    padding: 16px;
    border: solid 1px hsla(102, 63%, 60%, 1);
  }
}
</style>
