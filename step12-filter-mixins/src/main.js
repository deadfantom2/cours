import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.filter('to-lowercase', function (value) {
  return value.toLowerCase();
});

Vue.mixin({
  created() {
   console.log('global mixin - create');
  }
});

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app');
