<template>
    <div id="app">
        <nav>
            <NavLink url="/" text="Accueil" />
            <NavLink url="/contact" text="Contact" />
            <NavLink url="/about" text="A propos" />
        </nav>
    </div>
</template>

<script>
import NavLink from './components/NavLink.vue'

export default {
  name: 'App',
  components: {
    NavLink
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
