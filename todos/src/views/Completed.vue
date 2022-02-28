<template>
  <MyCom/>
</template>

<script>
import MyCom from '../components/MyCom'
export default {
  name: 'Completed',
  components: { MyCom },
  mounted() {
    this.$store.commit("comTodos")
  }
}
</script>
