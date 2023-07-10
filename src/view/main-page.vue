<template>
  <div class="main-page">
    <div class="main-page-img" :class="{ 'animate-slide': pageLoaded }">
      <img class="fill" src="../assets/images/main-girl.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MainPage',
  data() {
    return {
      pageLoaded: false,
    }
  },
  mounted() {
    // @ts-ignore
    window.onload = () => {
      this.pageLoaded = true
    }
  },
}
</script>

<style lang="scss">
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

.main-page-img {
  position: absolute;
  left: -110px;
  height: 550px;
}

.animate-slide {
  animation: slideInFromLeft 1.3s ease-in-out;
}

.main-page-img img {
  transform: rotate(90deg);
}
</style>
