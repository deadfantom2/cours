<template>
  <div class="container">
    <div class="row">
      <h1>Filters & Mixins</h1>
      <p>{{ text | toUppercase | to-lowercase }}</p>
      <hr>
      <button @click="fruits.push('Lexx')">Add</button>
      <input v-model="filterText">
      <ul>
        <li v-for="fruit in filteredFruits">{{ fruit }}</li>
      </ul>
    </div>
    <app-list></app-list>
  </div>

</template>

<script>

import List from "./List.vue";
import {fruitMixin} from "./fruitMixin";

export default {
  mixins: [fruitMixin],
  data(){
    return {
      text: 'Hello there!',
    }
  },
  filters: {
    toUppercase(value){
      return value.toUpperCase();
    }
  },
  components: {
    appList: List
  }
}
</script>

<style></style>
