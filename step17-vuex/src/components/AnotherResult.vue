<template>
    <div>
        <p>Counter of AnotherResult.vue is : {{ doubleCounterGetters }}</p>
        <p>Number of AnotherResult.vue of clicks : {{ stringCounterGetters }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapGetters([
               'doubleCounterGetters',
               'stringCounterGetters'
           ])
        }
    }
</script>