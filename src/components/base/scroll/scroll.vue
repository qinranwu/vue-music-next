<template>
  <div class="scroll" ref="rootRef">
    <slot></slot>
  </div>
</template>

<script>
import { ref } from 'vue'
import useScroll from './useScroll'

export default {
  name: 'Scroll',
  props: {
    click: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const rootRef = ref(null)

    useScroll(rootRef, props)
    return {
      rootRef,
    }
  },
}
</script>

<style lang="scss" scoped></style>
