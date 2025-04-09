<template>
  <nav class="tab">
    <template v-for="item in tabs" :key="item.path">
      <router-link class="tab-item" :to="item.path">
        <span class="text">
          {{ item.name }}
        </span>
      </router-link>
    </template>
  </nav>
</template>

<script>
export default {
  name: 'm-tab',
  data() {
    return {
      tabs: [
        {
          name: '推荐',
          path: '/recommend',
        },
        {
          name: '歌手',
          path: '/singer',
        },
        {
          name: '排行',
          path: '/top-list',
        },
        {
          name: '搜索',
          path: '/search',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  justify-content: space-between;
  .tab-item {
    flex: 1;
    text-align: center;
    .text {
      color: $color-theme;
      padding: 0 5px;
      padding-bottom: 5px;
    }
    &.router-link-active {
      .text {
        color: $color-theme;
        border-bottom: 2px solid $color-theme;
      }
    }
  }
}
</style>
