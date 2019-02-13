import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import axios from 'axios'
import 'buefy/dist/buefy.css'
import Store from './store';

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
    axios.get('http://34.205.154.0:3000/')
      .then(response =>  (Store.setMusicLibrary(response.data.musicLibrary)));
  }
})
