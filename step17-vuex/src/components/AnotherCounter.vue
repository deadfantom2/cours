<template>
    <div>
        <button class="btn btn-primary" @click="asyncDecrementStore({by: 50, duration: 500})">--</button>
        <button class="btn btn-primary" @click="asyncIncrementStore({by: 50, duration: 500})">++</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        methods: {
            /*decrem(){
                this.$store.commit('decrementStore');
            },
            increm(){
                this.$store.commit('incrementStore');
            }*/
            ...mapActions([
                'asyncDecrementStore',
                'asyncIncrementStore'
            ])
        }
    }
</script>