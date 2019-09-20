<template>
  <div id="app">
    <app-result></app-result>
    <hr>
    <app-counter></app-counter>
    <app-another-result></app-another-result>
    <app-another-counter></app-another-counter>
    <hr>
    <input type="text" v-model="valueC">
    <!-- <input type="text" :value="valueC" @input="updateValue">  1er meth-->
    {{valueC}}
  </div>
</template>

<script>

import Result from "./components/Result";
import Counter from "./components/Counter";
import AnotherResult from "./components/AnotherResult";
import AnotherCounter from "./components/AnotherCounter";

export default {
  computed: {
    valueC: {
      get(){
        return this.$store.getters.value;
      },
      set(value){
        this.$store.dispatch('updateValue', value)
      }
    }
    /*valueC(){ 1er meth
      return this.$store.getters.value;
    }*/
  },
  methods: {
    updateValue(event){
      this.$store.dispatch('updateValue', event.target.value)
    }
  },
  components: {
    appCounter: Counter,
    appResult: Result,
    appAnotherResult: AnotherResult,
    appAnotherCounter: AnotherCounter
  }
}
</script>

<style>
</style>
