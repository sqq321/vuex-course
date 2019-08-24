import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //存储属性
    count: 0,
    todos: [
      { id: 1, tilte: "todo item 1", completed: false },
      { id: 2, tilte: "todo item 2", completed: false },
      { id: 3, tilte: "todo item 3", completed: false },
    ]
  },
  getters: {
    //获取属性
  },
  mutations: {

  },
  actions: {

  }
})
