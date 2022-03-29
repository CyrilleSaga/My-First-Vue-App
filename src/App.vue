<template>
  <div id="app">
     <CustomBanner>
         <template v-slot:title>
             <h3>Donner un titre a la carte</h3>
         </template>
         <template v-slot:text>
             <h3>Donner un text a la carte</h3>
         </template>
         <template v-slot:action>
             <button>Action de la carte</button>
         </template>
     </CustomBanner>
  </div>
</template>

<script>
    import CustomBanner from './components/CustomBanner'
    export default {
        components: {
            CustomBanner
        },
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
