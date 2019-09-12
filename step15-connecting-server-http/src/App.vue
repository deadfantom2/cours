<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="user.username">
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" v-model="user.email">
        </div>
        <button @click="submit" class="btn btn-primary">Submit</button>
        <p> {{errors}}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      user: {
        username: '',
        email: ''
      },
      errors: []
    }
  },
  methods: {
    submit(){
      console.log(this.user);
      this.$http.post('https://vuejs-http-3d7e8.firebaseio.com/user.json', this.user)
              .then((res) => {
                console.log(res)
              }, err => {
                console.log(err.body);
                this.errors = err.body.error
              });
    }
  }
}
</script>

<style></style>
