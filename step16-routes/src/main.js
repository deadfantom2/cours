import Vue from 'vue'
import App from './App.vue'
import {routes} from './routes'
import store from './store'
import VueRouter from "vue-router";

Vue.config.productionTip = false;
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history',
  /*scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return savedPosition;
    }
    if(to.hash){
      return { selector: to.hash }
    }
    return { x:0, y:0 }
  }*/
});

router.beforeEach((to, from, next) => {
  console.log('before');
  alert('main.js --- beforeEach');
  next();
});

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app');
