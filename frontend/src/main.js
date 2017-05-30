import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import store from './vuex/store'

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  template: '<App/>',
  components: { App }
})
