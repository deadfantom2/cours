<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built directive</h1>
        <p v-text="'Some text'"></p>
        <p v-html="'<strong>Some strong text</strong>'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom directive</h1>
        <p v-mainCustomCssStatic>Color this line in STATIC</p>
        <p v-mainCustomCssDynamycle="'red'">Color this line in DYNAMICLE</p>
        <hr>
        <p v-mainCustomCssCondition:background="'blue'">Color this line in CONDTION =BACKGROUND</p>
        <p v-mainCustomCssConditionDelay="'blue'">Color this TEXT in CONDTION</p>
        <p v-local-customCss:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}">Color this TEXT in CONDTION DELAY BLIM</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    directives: {
      'local-customCss': {
        bind(el, binding, vnode) {
          var delay = 0;
          if (binding.modifiers['delayed']) {
            delay = 3000;
          }
          if (binding.modifiers['blink']) {
            let mainColor = binding.value.mainColor;
            let secondColor = binding.value.secondColor;
            let currentColor = mainColor;
            setTimeout(() => {
              setInterval(() => {
                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                if (binding.arg == 'background') {
                  el.style.backgroundColor = currentColor;
                } else {
                  el.style.color = currentColor;
                }
              }, binding.value.delay);
            }, delay);
          } else {
            setTimeout(() => {
              if (binding.arg == 'background') {
                el.style.backgroundColor = binding.value.mainColor;
              } else {
                el.style.color = binding.value.mainColor;
              }
            }, delay);
          }
        }
      }
    }
  }
</script>

<style>
</style>
