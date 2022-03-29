<template>
  <div id="app">
     <p>La date d'aujourd'hui</p>
     <span>{{ formatedDate }}</span> <br>
     <button @click="incrementMonth">Incrémenter</button>
  </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        computed: {
            ...mapGetters(['formatedDate'])
        },
        methods: {
            ...mapActions(['incrementMonth'])
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
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
