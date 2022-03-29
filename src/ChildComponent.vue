<template lang="html">
    <button type="button" @click="emitCustomEvent" >Emit Event</button>
</template>

<script>
export default {
    methods: {
        emitCustomEvent() {
            this.$emit('custom-event-name', { message: "Mon message personalisé" })
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
