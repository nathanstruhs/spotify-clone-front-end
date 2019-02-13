<template>
  <div class='content column'>
    <div class='title-bar'>
      <p class='title is-2'>{{ storeState.currentArtist === '' ? 'Your Library' : storeState.currentArtist }}</p>
      <p class='subtitle'>{{ storeState.currentAlbum }}</p>
      <hr>
    </div>

    <div v-for="song in songs(storeState.currentArtist, storeState.currentAlbum)" :key="song.id" class='song-row' preload="none">
      <div>{{ song.name.replace(/\.[^/.]+$/, "") }}</div>
      <audio controls="controls" id="audio_player">
        <source :src="song.url">
      </audio>
    </div>

  </div>
</template>

<script>
import Store from '../store';

export default {
  name: 'Songs',
  data () {
    return {
      msg: 'Songs',
      storeState: Store.state
    }
  },
  methods: {
    songs(artist, album) {
      let songs = [];
      for (var i = 0; i < this.storeState.musicLibrary.length; i++) {
        if (this.storeState.musicLibrary[i].artist === artist) {
          for (var j = 0; j < this.storeState.musicLibrary[i].albums.length; j++) {
            if (this.storeState.musicLibrary[i].albums[j].name === album) {
              for (var k = 0; k < this.storeState.musicLibrary[i].albums[j].songs.length; k++) {
                songs.push(this.storeState.musicLibrary[i].albums[j].songs[k]);
              }
            }
          }
        }
      }
      return songs;
    }
  }
}
</script>

<style scoped>
.content {
  padding: 25px;
}

audio {
  height: 25px;
}

.song-row {
  color: white;
}

.title {
  color: white;
}
</style>
