<template>
  <li class="list">
    <input type="checkbox" :checked="todo.done" @change="handle(todo.id)"/>
    <label class="thing">{{todo.title}}</label>
    <button @click="delet(todo.id)">delete</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo"],
  methods: {
    handle(id) {
      this.$store.commit("checkTodo", id);
    },
    delet(id) {
      this.$store.commit("deleteTodo", id);
    }
  }
};
</script>

<style scoped>
li {
  padding: 15px 0;
}

li button {
  display: none;
}

li:hover button {
  display: inline-block
}

.thing {
  padding: 16px 350px 16px 30px;
  border: none;
  font-size: 24px;
  color: #333;
  outline: none;
  box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
}
</style>
