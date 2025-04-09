<template>
  <div class="slide-banner" ref="slideRef">
    <div class="slide-banner-content">
      <div
        v-for="(item, index) in sliders"
        class="slide-page"
        :class="'page' + index"
        :key="item.id"
      >
        <a :href="item.link">
          <img :src="item.pic" alt="" />
        </a>
      </div>
    </div>
    <div class="dots-wrapper">
      <span
        class="dot"
        v-for="(num, index) in sliders"
        :key="num"
        :class="{ active: currentPageIndex === index }"
      ></span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import useSlide from './useSlide'

export default {
  name: 'Slide',
  props: {
    sliders: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const slideRef = ref(null)

    const { currentPageIndex } = useSlide(slideRef)
    console.log(currentPageIndex)

    return {
      slideRef,
      currentPageIndex,
    }
  },
}
</script>

<style lang="scss" scoped>
.slide-banner {
  position: relative;
  .slide-banner-content {
    margin-top: 20px;
    height: 200px;
    white-space: nowrap;
    font-size: 0;

    .slide-page {
      display: inline-block;

      font-size: 26px;
      a {
        display: block;
        height: 200px;
        width: 100%;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .dots-wrapper {
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);

    .dot {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #eee;

      &.active {
        background: $color-theme;
      }
    }
  }
}
</style>
