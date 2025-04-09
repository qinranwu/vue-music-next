import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
import { onMounted, onUnmounted, ref } from 'vue'

BScroll.use(Slide)

export default function useSlide(wrapperRef) {
  const slide = ref(null)
  const currentPageIndex = ref(0)
  onMounted(() => {
    const slideVal = (slide.value = new BScroll(wrapperRef.value, {
      scrollX: true,
      scrollY: false,
      slide: {
        threshold: 100,
      },
      momentum: false,
      bounce: false,
      stopPropagation: true,
    }))

    slideVal.on('slidePageChanged', (page) => {
      currentPageIndex.value = page.pageX
    })
  })

  onUnmounted(() => {
    slide.value.destroy()
  })

  return {
    slide,
    currentPageIndex,
  }
}
