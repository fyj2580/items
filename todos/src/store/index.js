import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
    activeTodos: "",
    comTodos: "",
  },
  mutations: {
    // 添加一个todo
    addTodo(state, todoObj) {
      state.todos.unshift(todoObj);
    },
    // 勾选一个todo
    checkTodo(state, id) {
      state.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
    },
    // 删除一个todo
    deleteTodo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    // 全选
    checkAllTodo(state, done) {
      state.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    // 删除所有选中的todo
    deleteAllTodo(state) {
      state.todos = state.todos.filter((todo) => !todo.done);
    },
    // 筛选数据1
    activeTodos(state) {
      state.activeTodos = state.todos.filter((todo) => !todo.done);
    },
    // 筛选数据2
    comTodos(state) {
      state.comTodos = state.todos.filter((todo) => todo.done === true);
    }
  },
  actions: {},
  modules: {}
})
