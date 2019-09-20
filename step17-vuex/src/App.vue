<template>
  <div>
    <app-counter></app-counter>
    <app-result></app-result>
    <app-another-counter></app-another-counter>
    <app-another-result></app-another-result>
    <hr>
    <input type="text" v-model="valeur">
    {{ valeur }}
  </div>
</template>

<script>

import Result from "./components/Result";
import Counter from "./components/Counter";
import AnotherResult from "./components/AnotherResult";
import AnotherCounter from "./components/AnotherCounter";

export default {
  computed: {
    valeur: {
      get(){
        return this.$store.getters.valueGetters;
      },
      set(value){
        this.$store.dispatch('updateValueActions', value)
      }
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
