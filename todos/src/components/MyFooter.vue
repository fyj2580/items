<template>
  <!-- footer结构 -->
  <div class="wunai">
    <div class="all">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        style="opacity: 0"
        v-model="isAll"
      />
      <label for="toggle-all" class="iconfont"></label>
    </div>
    <footer class="footer" v-show="total">
      <span>{{ doneTotal }} item left</span>
      <router-link active-class="active" to="/All">All</router-link>
      <router-link active-class="active" to="/Active">Active</router-link>
      <router-link active-class="active" to="Completed">Completed</router-link>
      <i style="padding-left: 70px" @click="deleteTodo()">Clear</i>
      <p style="padding-top: 100px">
        Double-click to edit a todo <br />Created by Oscar Godson
        <br />Refactored by Christoph Burgmer<br />
        Part of TodoMVC
      </p>
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MyFooter",
  computed: {
    ...mapState({ todos: "todos" }),
    // 选中的个数
    doneTotal() {
      return this.$store.state.todos.reduce(
        (pre, conrent) => pre + (conrent.done ? 1 : 0),
        0
      );
    },
    // 计算todos长度
    total() {
      return this.todos.length;
    },
    // 全选
    isAll: {
      get() {
        return this.doneTotal === this.doneLenth;
      },
      set(value) {
        this.$store.commit("checkAllTodo", value);
      },
    },
  },
  methods: {
    deleteTodo() {
      this.$store.commit("deleteAllTodo");
    },
  },
};
</script>

<style scoped>
.all {
  position: fixed;
  top: 19%;
  left: 44%;
}

.all label::before {
  content: "\e67e";
  opacity: 0.5;
}
/* footer样式 */
.footer span {
  cursor: pointer;
  padding-right: 50px;
}

.footer a {
  color: #333;
  padding: 0 20px;
}

.footer a:hover {
  border: 1px solid #ead7d7;
}

.footer i {
  cursor: pointer;
}
</style>
