import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.config.productionTip = false;
Vue.use(VueResource);

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app');
