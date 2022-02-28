<template>
  <MyActive/>
</template>

<script>
import MyActive from "../components/MyActive";
export default {
  name: "Active",
  components: { MyActive },
  mounted() {
    this.$store.commit("activeTodos");
  },
};
</script>
