<template>
  <div id="app">
    <!-- <p>App:{{count}}</p> -->
    <p>{{getCount}}</p>
    <p>App:{{completedTodos}}</p>
    <p>App:{{completedTodosCount}}}</p>
    <p>{{getTodosById(3)}}</p>
    <!-- <Count /> -->
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState, mapGetters } from "vuex";
export default {
  name: "app",
  components: {
    Count
  },
  computed: mapGetters([
    "getCount",
    "completedTodos",
    "completedTodosCount",
    "getTodosById"
  ])
  // computed: {
  //   count() {
  //     return this.$store.getters.getCount;
  //   },
  //   completedTodos() {
  //     return this.$store.getters.completedTodos;
  //   },
  //   completedTodosCount() {
  //     return this.$store.getters.completedTodosCount;
  //   },
  //   getTodosById() {
  //     return this.$store.getters.getTodosById;
  //   }
  // },

  //写法三：
  //computed: mapState(["count", "todos"])
  //computed:mapState({

  //写法二：
  //count:state => state.count,
  // count:function(state){
  //   return state.count
  // },
  //todos:state => state.todos
  //}),
  //写法一：
  // computed: {
  //   count() {
  //     return this.$store.state.count; //main.js中的store
  //   },
  //   todos() {
  //     return this.$store.state.todos;
  //   }
  // }
};
</script>

<style>
</style>
