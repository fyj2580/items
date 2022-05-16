<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="carousel in list" :key="carousel.id">
        <img :src="carousel.image" />
        <div class="info">
          <div class="desc">{{ carousel.title }}</div>
          <div class="write">{{ carousel.hint }}</div>
        </div>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  props: ["list"],
  name: "Carousel",
  watch: {
    list: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          const mySwiper = new Swiper(this.$refs.cur, { // eslint-disable-line no-unused-vars
            loop: true, // 循环模式选项
            touchRatio: 1,

            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });
        });
      },
    },
  },
};
</script>

<style scoped>
.swiper-container {
  margin-top: 16vw;
  height: 74.6667vw;
}

.swiper-wrapper .swiper-slide {
  position: relative;
}

.swiper-wrapper .swiper-slide .info {
  position: absolute;
  bottom: 3.7333vw;
  left: 5.3333vw;
  right: 5.3333vw;
}

.swiper-wrapper .swiper-slide .info .desc {
  color: #fff;
  font-size: 5.8667vw;
}

.swiper-wrapper .swiper-slide .info .write {
  margin-top: 1.6vw;
  color: #999;
  font-size: 3.2vw;
}

/* 分页器 */
.swiper-container .swiper-pagination {
  position: absolute;
  text-align: right;
  transition: 300ms opacity;
  transform: translate3d(0, 0, 0);
  z-index: 100;
}
.swiper-container .swiper-pagination .swiper-pagination-bullet {
  width: 5.5vw;
  height: 5.5vw;
  display: inline-block;
  border-radius: 0;
  background: #000;
  opacity: 0.2;
}
.swiper-container .swiper-pagination .swiper-pagination-bullet-active {
  opacity: 1;
}
</style>
