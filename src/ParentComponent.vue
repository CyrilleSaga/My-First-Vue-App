<template lang="html">
    <div>
        <p>{{ message }}</p>
        <ChildComponent  @custom-event-name="setMessage" />
    </div>
</template>

<script>
import ChildComponent from './ChildComponent'
export default {
    name: 'ParentComponent',
    components: { ChildComponent },
    data () {
        return {
            message: "Hello"
        }
    },
    methods: {
        setMessage(payload) {
            this.message = payload.message
        }
    }
}
</script>

<style lang="css" scoped>
</style>
