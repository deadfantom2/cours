import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
// GLOBAL DIRECTIVCE
//bind, inserted, update, componentUpdated, unbind lifecycle for directive
Vue.directive('mainCustomCssStatic', {
  bind(el, binding, vnode){
      el.style.backgroundColor = 'green'; //backround en dure
  }
});
Vue.directive('mainCustomCssDynamycle', {
  bind(el, binding, vnode){
    el.style.backgroundColor = binding.value; //background dynamycle, valeur dans html
  }
});
Vue.directive('mainCustomCssCondition', {
  bind(el, binding, vnode){
    if(binding.arg == 'background'){
      el.style.backgroundColor = binding.value;
    }else{
      el.style.color = binding.value;
    }
  }
});
Vue.directive('mainCustomCssConditionDelay', {
  bind(el, binding, vnode){
    var delay = 0;
    if(binding.modifiers['delayed']){
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});



new Vue({
  render: function (h) { return h(App) },
}).$mount('#app');
