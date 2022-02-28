<template>
  <div id="app">
    <!-- 左边简介结构 -->
    <Left />
    <!-- 右边todos结构 -->
    <div class="right">
      <MyHeader/>
      <router-view></router-view>
      <MyFooter/>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import Left from "./components/Left";
import MyFooter from "./components/MyFooter";
import { mapState } from "vuex";

export default {
  name: "App",
  components: { MyHeader, Left, MyFooter },
  computed: {
    ...mapState({ todos: "todos" }),
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  }
};
</script>

<style>
/* 初始化样式 */
* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

body {
  background-color: #f5f5f5;
}

a {
  text-decoration: none;
  color: #c73f45;
}

#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.right {
  flex: 1;
}
</style>
