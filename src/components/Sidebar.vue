<template>
  <div class='column is-one-fifth'>
    <aside class='menu'>
      <br>
      <p class='menu-label'>Your Library</p>
      <ul class='menu-list'>
          <li>
            <a>1</a>
            <a>2</a>
            <a>3</a>
          </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      msg: 'Sidebar'
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
</style>
