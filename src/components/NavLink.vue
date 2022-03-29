<script>
    export default {
        name: "NavLink",
        props: ['url', 'text']
    }
</script>
<template>
    <a :href="url">{{ text }}</a>
</template>

<style lang="scss">
    a {
        text-decoration: none;
    }
</style>
