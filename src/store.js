import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //存储属性
  state: {
    count: 0,
    todos: [
      { id: 1, tilte: "todo item 1", completed: false },
      { id: 2, tilte: "todo item 2", completed: true },
      { id: 3, tilte: "todo item 3", completed: true },
    ]
  },
  //获取属性
  getters: {
    getCount: state => ++state.count,
    // count(state) {
    //   return ++state.count;
    // },
    completedTodos: state => state.todos.filter(todo => todo.completed),
    // completedTodos: function (state) {
    //   return state.todos.filter(function (todo) {遍历state.todos
    //     return todo.completed;
    //   })
    // },
    completedTodosCount: (state, getters) => getters.completedTodos.length,
    // completedTodosCount: function (state, getters) {
    //   return getters.completedTodos.length;
    // },
    getTodosById: state => id => state.todos.find(todo => todo.id == id),
    // getTodosById: function (state) {
    //   //处理东西
    //   (function (id) {
    //     return state.todos.find(function (todo) {
    //       return todo.id == id;
    //     })
    //   })
    // }
  },
  //同步修改属性
  mutations: {

  },
  //异步修改
  actions: {

  }
})
