<template>
  <div class="main-page">
    <div class="main-title">
      {{ typedText }}
    </div>
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
      text: 'Hi there! Here you can buy the best anime girls on the net!',
      typedText: '',
      typingSpeed: 50,
    }
  },
  mounted() {
    // @ts-ignore
    window.onload = () => {
      this.pageLoaded = true
    }
    this.typeText()
  },
  methods: {
    typeText() {
      let index = 0
      const intervalId = setInterval(() => {
        this.typedText += this.text[index]
        index++
        if (index === this.text.length) {
          clearInterval(intervalId)
        }
      }, this.typingSpeed)
    },
  },
}
</script>

<style lang="scss">
.main-title {
  font-size: 34px;
  font-weight: 700;
  color: hsla(355, 88%, 56%, 1);
  padding: 10px;
}

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
