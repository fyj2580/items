<template>
  <div>
    <p class="todos">todos</p>
    <div class="header">
      <input
        class="new-todo"
        type="text"
        placeholder="What needs to be done?"
        @keyup.enter="add"
      />
    </div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "MyHeader",
  methods: {
    // 收集用户输入并添加
    add(event) {
      const todoObj = { id: nanoid(), title: event.target.value, done: false };
      this.$store.commit("addTodo", todoObj);
      event.target.value = "";
    },
  },
};
</script>

<style scoped>
.new-todo {
  padding: 16px 160px 16px 60px;
  border: none;
  font-size: 24px;
  color: #333;
  outline: none;
  box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
}

input::-webkit-input-placeholder {
  /*WebKit browsers*/
  color: #e6e6e6;
  font-size: 24px;
}

input::-moz-input-placeholder {
  /*Mozilla Firefox*/
  color: #e6e6e6;
  font-size: 24px;
}

input::-ms-input-placeholder {
  /*Internet Explorer*/
  color: #e6e6e6;
  font-size: 24px;
}

.todos {
  flex: 0.5;
  font-size: 100px;
  color: #ead7d7;
}
</style>
