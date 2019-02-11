<template>
  <div class='content column'>
    <div class='title-bar'>
      <p class='title is-2'>{{ storeState.currentArtist }}</p>
      <p class='subtitle'>{{ storeState.currentAlbum }}</p>
      <hr>
    </div>
  </div>
</template>

<script>
import Store from '../store';

export default {
  name: 'Songs',
  props: ['musicLibrary'],
  data () {
    return {
      msg: 'Songs',
      storeState: Store.state
    }
  }
}
</script>

<style scoped>
.content {
  padding: 25px;
}
</style>
