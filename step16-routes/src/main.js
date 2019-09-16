import Vue from 'vue'
import App from './App.vue'
import {routes} from './routes'
import store from './store'
import VueRouter from "vue-router";

Vue.config.productionTip = false;
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app');
