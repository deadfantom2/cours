<template>
    <div>
        <hr>
        <h1>The user details page ---UserDetail.vue</h1>
        <p>User---UserDetail.vue loaded has ID: {{ $route.params.id }}</p>
        <router-link tag="button"
                     :to="link"
                     class="btn btn-primary">Edit user link---UserDetail.vue</router-link>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                link: {
                    name: 'userEdit',
                    params: { id: this.$route.params.id },
                    query: { locale: 'en', q: 100 },
                    hash: '#data'
                }
            }
        },
        beforeRouteEnter(to, from, next){ // route quand on arrive sur le route
            if(true){
                next();
            }else{
                next(false);
            }
        }
    }
</script>