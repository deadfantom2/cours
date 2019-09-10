<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'app-quote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr>
        <p>{{ selectedComponent }}</p>
        <keep-alive>
          <component :is="selectedComponent">
            <p>Default Content</p>
          </component>
        </keep-alive>

        <test>
          <h2 slot="title">{{ testTitle }}</h2>
          <p slot="subtitle">A wonderful Quote</p>
        </test>
      </div>
    </div>
  </div>
</template>

<script>
    import test from './components/test.vue';
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';

    export default {
        data: function() {
            return {
                testTitle: 'The Quote',
                selectedComponent: 'app-quote'
            }
        },
        components: {
            test: test,
            'app-quote': Quote,
            appAuthor: Author,
            appNew: New
        }
    }
</script>

<style>
</style>

