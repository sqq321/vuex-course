import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import { stat } from 'fs'

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
  //获取属性，不会更改状态
  getters: {
    getCount: state => state.count,
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
    //     return state.todos.find(
    //       function(todo) {
    //          return todo.id == id;
    //     })
    //   })
    // }
  },
  //同步修改属性/状态
  mutations: {
    incrementCount: state => state.count++,
    decrementCount: (state, payload) => state.count -= payload.amout,

    setTodos: (state, todos) => state.todos = todos,
  },
  //异步修改属性/状态
  actions: {
    incrementCountAsync: ({ commit }) => {
      setTimeout(() => {
        //解构
        //const {commit} = context.commit
        commit("incrementCount")//context等同于this.$store, 调用mutations里的东西
      }, 2000)
    },
    decrementCountAsync: (context, payload) => {
      setTimeout(() => {
        context.commit("decrementCount", payload)//context等同于this.$store, 调用mutations里的东西
      }, 1000)
    },
    async fetchDataAsync(context) {
      const response = await axios.get("http://jsonplaceholder.typicode.com/todos");
      //console.log(response);
      context.commit("setTodos", response.data);
    },
  }
})
