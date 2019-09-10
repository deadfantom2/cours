<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <app-servers></app-servers>
      <app-server-details></app-server-details>
    </div>
    <hr>
    <app-footer></app-footer>

    <div class="row">
      <div class="col-xs-12">
        <app-user></app-user>
      </div>
    </div>
  </div>


</template>

<script>

  import Header from './components/Shared/Header'
  import Servers from './components/Server/Servers'
  import ServerDetails from './components/Server/ServerDetails'
  import Footer from './components/Shared/Footer'
  import User from './components/User/User.vue'

  export default {
      components: {
          'app-header': Header,
          'app-servers': Servers,
          'app-server-details': ServerDetails,
          'app-footer': Footer,
          'app-user': User
      }
  }

</script>



<style>
  div.component {
    border: 1px solid black;
    padding: 30px;
  }
</style>
