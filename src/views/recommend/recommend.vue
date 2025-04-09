<template>
  <div class="recommend">
    <Scroll class="recommend-content">
      <div>
        <div class="slider-wrapper">
          <div class="slider-content">
            <slider v-if="sliders.length" :sliders="sliders" />
          </div>
        </div>
        <div class="recommend-list">
          <h2 class="list-title">热门歌单推荐</h2>
          <div class="playlist">
            <template v-for="item in albums" :key="item.id">
              <div class="item">
                <div class="cover"><img :src="item.pic" alt="" /></div>
                <div class="info">
                  <h3>{{ item.title }}</h3>
                  <p class="username">{{ item.username }}</p>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
import { getRecommend } from '@/service/recommond'
import slider from '@/components/base/slide/slide.vue'
import Scroll from '@/components/base/scroll/scroll.vue'

export default {
  name: 'm-recommend',
  data() {
    return {
      sliders: [],
      albums: [],
    }
  },
  components: {
    slider,
    Scroll,
  },
  async created() {
    const result = await getRecommend()
    console.log(result)

    this.sliders = result.sliders
    this.albums = result.albums
  },
}
</script>

<style lang="scss" scoped>
.recommend {
  position: fixed;
  top: 88px;
  bottom: 0;
  width: 100%;

  .recommend-content {
    height: 100%;
    overflow: hidden;
    .recommend-list {
      .list-title {
        height: 55px;
        text-align: center;
        color: $color-theme;
        font-size: $font-size-medium;
        line-height: 55px;
      }
      .playlist {
        .item {
          padding: 20px;
          display: flex;
          .cover {
            width: 60px;
            height: 60px;
            margin-right: 10px;
            img {
              width: 100%;
              height: 100%;
            }
          }

          .info {
            display: flex;
            flex-direction: column;
            justify-content: center;

            .username {
              font-size: $font-size-medium;
            }
          }
        }
      }
    }
  }
}
</style>
