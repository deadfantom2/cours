import Vue from 'vue'
import App from './App.vue'

//Pour avoir un bus des events de maniere simple et comprhensible
export const eventBus = new Vue({
    methods: {
       changeAge(age){
         this.$emit('ageWasEdited', age);
       }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
});


