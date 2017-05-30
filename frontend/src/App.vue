<template>
  <div id="app">
    <img src="./assets/logo.png">
    <v-btn outline class="indigo--text" @click.native="hello">Vuetify Button</v-btn>
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'
import api from './axios/api'

export default {
  name: 'app',
  components: {
    Hello
  },
  methods: {
    hello: function () {
      console.log('[call] /api/hello')
      api.get('/api/hello')
      .then(res => {
        console.log(res.data)
      })
      .catch(e => {
        console.error(e)
      })
    }
  }

}
</script>

<style lang="stylus">
@import '../node_modules/vuetify/src/stylus/main'
@import './stylus/main'
</style>
