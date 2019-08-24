<template>
  <div id="app">
    <p>App:{{count}}</p>
    <p>App:{{todos}}</p>
    <Count />
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState } from "vuex";
export default {
  name: "app",
  components: {
    Count
  },
  //写法三：
  computed: mapState(["count", "todos"])
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
