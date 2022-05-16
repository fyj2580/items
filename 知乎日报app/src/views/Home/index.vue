<template>
  <div v-cloak>
    <Topbar :date="date" />
    <Carousel :list="top_stories" />
    <div class="main" @click="goDetail" v-for="item in stories" :key="item.id">
      <div class="left">
        <div class="info">
          <div class="desc">{{ item.title }}</div>
          <div class="write">{{ item.hint }}</div>
        </div>
      </div>
      <div class="right">
        <img :src="item.images[0]" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  mounted() {
    this.$store.dispatch("getStories");
  },
  data() {
    return {
      keyword: 20,
    };
  },
  methods: {
    goDetail() {
      this.$router.push("/detail/" + this.keyword);
    },
  },
  computed: {
    ...mapGetters(["date", "stories", "top_stories"]),
  },
};
</script>

<style scoped lang="less">
.main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.6667vw;
  margin-top: 3.2vw;

  .left {
    flex: 1;

    .info {
      .desc {
        color: #000;
        font-size: 4.8vw;
        font-weight: 600;
      }

      .write {
        margin-top: 1.6vw;
        color: #999;
        font-size: 3.2vw;
      }
    }
  }

  .right {
    width: 20vw;
    height: 20vw;

    img {
      width: 100%;
    }
  }
}
</style>
