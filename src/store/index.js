export default {
  state: {
    currentArtist: '',
    currentAlbum: ''
  },

  getCurrentArtist() {
    return this.state.currentArtist;
  },
  setCurrentArtist(artist) {
    this.state.currentArtist = artist;
  },
  getCurrentAlbum() {
    return this.state.currentAlbum;
  },
  setCurrentAlbum(album) {
    this.state.currentAlbum = album;
  }
};