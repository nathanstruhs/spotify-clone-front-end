import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import axios from 'axios'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App :musicLibrary="musicLibrary" />',

  data () {
    return {
      musicLibrary: null
    }
  },

  mounted () {
    axios.get('http://54.236.237.59:3000/')
      .then(response =>  (this.musicLibrary = response.data.musicLibrary));
  }
})
