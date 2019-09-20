<template>
    <div style="border: black solid 1px">
        <h1>AnotherCounter.vue</h1>
        <button class="btn btn-primary" @click="asyncDecrementStoreActions({by: 50, duration: 500})">--</button>
        <button class="btn btn-primary" @click="asyncIncrementStoreActions({by: 50, duration: 500})">++</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        methods: {
            ...mapActions([
                'asyncDecrementStoreActions',
                'asyncIncrementStoreActions'
            ])
        }
    }
</script>