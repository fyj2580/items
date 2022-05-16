<template>
  <div>
    <div v-html="detail.body"></div>
    <button @click="backTo">返回</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'Detail',
  mounted() {
    this.$store.dispatch("getDetail");
  },
  updated() {
    this.getImg()
  },
  methods: {
    // 返回首页
    backTo() {
      this.$router.back()
    },
    getImg() {
      document.querySelector('.img-place-holder').innerHTML = `<img src="${this.detail.image}">`;
    }
  },
  computed: {
    ...mapGetters(["detail"]),
  },
}
</script>

<style>

</style>
