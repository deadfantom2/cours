<template>
    <div style="border: black solid 1px">
        <h1>Counter.vue</h1>
        <button class="btn btn-primary" @click="decrementStoreActions(100)">--</button>
        <button class="btn btn-primary" @click="incrementStoreActions(100)">++</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        methods: {
            ...mapActions([
                'decrementStoreActions',
                'incrementStoreActions'
            ])
        }
    }
</script>