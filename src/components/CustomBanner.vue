<template lang="html">
    <div>
        <slot name="title">Titre de la carte</slot>
        <slot name="text">Texte de la carte</slot>
        <slot name="action">Action</slot>
    </div>
</template>

<script>
export default {
    name: 'CustomBanner'
}
</script>

<style lang="css" scoped>
</style>
