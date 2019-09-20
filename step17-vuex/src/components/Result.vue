<template>
    <p>Counter of Result.vue is {{ counter }}</p>
</template>

<script>
    export default {
        computed: {
            counter(){
                return this.$store.state.counterState;
            }
        }
    }
</script>