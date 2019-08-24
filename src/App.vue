<template>
  <div id="app">
    <!-- mutations -->
    <!-- <button @click="decrement({amout:2})">-</button> -->
    <button @click="decrementCount({amout:2})">-</button>
    <span>{{getCount}}</span>
    <!-- <button @click="increment">+</button> -->
    <button @click="incrementCount">+</button>

    <!-- <p>App:{{count}}</p> -->
    <!-- <p>{{getCount}}</p>
    <p>App:{{completedTodos}}</p>
    <p>App:{{completedTodosCount}}}</p>
    <p>{{getTodosById(3)}}</p>-->
    <!-- <Count /> -->
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "app",
  components: {
    Count
  },
  //-------------getter--------------
  computed: mapGetters([
    "getCount",
    "completedTodos",
    "completedTodosCount",
    "getTodosById"
  ]),
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
  //------------------state------------
  //写法三：
  //computed: mapState(["count", "todos"]),
  //写法二：
  //computed:mapState({
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
  // },

  //-------------------mutations-------------
  methods: mapMutations(["incrementCount", "decrementCount"])

  // methods: {
  //   increment() {
  //     //调用mutations 里的incrementCount
  //     this.$store.commit("incrementCount");
  //   },
  //   decrement(n) {
  //     //调用mutations 里的decrementCount
  //     this.$store.commit("decrementCount", n);
  //   }
  // },
};
</script>

<style>
</style>
