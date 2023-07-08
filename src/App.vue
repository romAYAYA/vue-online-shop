<template>
  <div>
    <header-component/>
    <main-wrapper />
  </div>
</template>

<script lang="ts">
import MainWrapper from '@/components/main-wrapper.vue'
import HeaderComponent from './components/header-component.vue'

export default {
  name: 'app',
  components: {
    MainWrapper,
    HeaderComponent,
  },
}
</script>

<style lang="scss"></style>
