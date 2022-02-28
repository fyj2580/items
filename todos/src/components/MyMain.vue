<template>
  <!-- todolist结构 -->
  <section class="main" style="display: block">
    <ul class="todo-list">
      <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
    </ul>
  </section>
</template>

<script>
import MyItem from "./MyItem";
import { mapState } from 'vuex'
export default {
  name: "MyMain",
  components: { MyItem },
  computed: {
    ...mapState({ todos: "todos" }),
  },
};
</script>

<style scoped>
/* todolist结构 */
.main {
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
}

.todo-list {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
}
</style>
