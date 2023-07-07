<template>
  <div class="main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script lang="ts">
export default {
  name: 'main-wrapper',
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
