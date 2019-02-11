<template>
  <div id="app">
    <div class='columns'>
      <Sidebar />
      <Songs />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar';
import Songs from './components/Songs';

export default {
  name: 'App',
  components: {
    Sidebar,
    Songs
  }
}
</script>

<style lang="scss">
  @import 'styles/bulma-overrides';

  body {
    background-color: black;
  }
</style>
