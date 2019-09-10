<template>
  <div class="container">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <hr>
    <div class="subtitle">
      <slot name="subtitle"></slot>
    </div>
  </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
  div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    text-align: center;
  }

  .container{
    width: 20%;
  }

  h2 {
    color: red;
  }

  .title {
    margin: 20px;
    font-style: italic;
  }
</style>
