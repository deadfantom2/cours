<template>
    <div>
        <hr>
        <h1>The user page -----User.vue</h1>
        <button @click="navigateToHome" class="btn btn-primary">Go to home ---User.vue</button>
        <p>router-view point enter1 pour UserStart.vue -----User.vue</p>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        methods: {
            navigateToHome(){
                this.$router.push({ name: 'home'});
            }
        }
    }
</script>