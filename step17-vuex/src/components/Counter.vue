<template>
    <div>
        <button class="btn btn-primary" @click="decrementStore(100)">--</button>
        <button class="btn btn-primary" @click="incrementStore(100)">++</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        methods: {
            // 1ere method non optimiser
            /*decrem(){
                this.$store.state.counter--;
            },
            increm(){
                this.$store.state.counter++;
            }*/
            ...mapActions([
                'decrementStore',
                'incrementStore'
            ])
        }
    }
</script>