<template>
  <div id="app">
    <img src="./assets/logo.png">
    <v-btn outline class="indigo--text">Vuetify Button</v-btn>
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style lang="stylus">
@import '../node_modules/vuetify/src/stylus/main'
@import './stylus/main'
</style>
