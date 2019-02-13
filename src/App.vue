<template>
  <div id="app">
    <div v-if="storeState.musicLibrary === {}">
        <div> loading content </div>
    </div>

    <div class='columns'>
      <Sidebar />
      <Songs />
    </div>
  </div>
</template>

<script>
import Store from './store';
import Sidebar from './components/Sidebar';
import Songs from './components/Songs';

export default {
  name: 'App',
  components: {
    Sidebar,
    Songs
  },
  data() {
    return {
      storeState: Store.state
    }
  }
}
</script>

<style lang="scss">
  @import 'styles/bulma-overrides';

  body {
    background-color: black;
  }
</style>
