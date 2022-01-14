<template>
  <span @click="chack">{{ player }}</span>
</template>

<script>
export default {
  name: "Cell",
  props: ["a", "n", "id"],
  data() {
    return {
      player: "",
    };
  },
  methods: {
    chack() {
      this.player = this.n ? "x" : "o";
      this.$emit("updatePalyer", [this.player, this.id]);
    },
  },
};
</script>

<style scoped>
span {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border: 1px solid #333;
}
</style>
