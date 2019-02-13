<template>
  <div class='column is-one-fifth'>
    <aside class='menu'>
      <br>
      <p class='menu-label'>Your Library</p>
      <ul class='menu-list'>
          <li v-for="item in storeState.musicLibrary" v-bind:key="item.id">
            <a @click='toggleAlbum($event, item.artist)'>{{ item.artist }} ▼</a>
            <ul class='album-dropdown' :id='normalize(item.artist) + "-dropdown"'>
              <li v-for="album in item.albums" v-bind:key="album.id">
                <a @click='setCurrentAlbum(item.artist, album.name)'>{{ album.name }}</a>
              </li>
            </ul>
          </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import Store from '../store';

export default {
  name: 'Sidebar',
  data () {
    return {
      msg: 'Sidebar',
      storeState: Store.state
    }
  },

  methods: {
    toggleAlbum: function(event, artist) {
      this.setCurrentArtist(artist);
      let target = document.getElementById(this.normalize(artist) + '-dropdown');
      target.classList.toggle('is-active');
    },
    normalize: function(str) {
      return str.toString().replace(/\s+/g, '-').toLowerCase();
    },
    setCurrentArtist: function(artist) {
      if (this.storeState.currentArtist !== artist) {
        Store.setCurrentAlbum('');
      }
      Store.setCurrentArtist(artist);
    },
    setCurrentAlbum: function(artist, album) {
      if (this.storeState.currentArtist !== artist) {
        Store.setCurrentArtist(artist);
      }
      Store.setCurrentAlbum(album);
    }
  }
}
</script>

<style scoped>
  .menu {
    background-color: #121212;
    height: 100vh;
  }

  .menu-label {
    padding-left: 10px;
  }

  .album-dropdown {
    display: none;
  }

  .is-active {
    display: block;
  }
</style>
