<template>
  <div id="app">
    <m-header />
    <m-tab />
    <router-view />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'app',
  components: {
    'm-header': defineAsyncComponent(
      () => import('./components/header/header.vue'),
    ),
    'm-tab': defineAsyncComponent(() => import('./components/tab/tab.vue')),
  },
}
</script>

<style lang="scss"></style>
