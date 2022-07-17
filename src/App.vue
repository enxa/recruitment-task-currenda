<script setup>
  import List from './components/List.vue'
  import Search from './components/Search.vue'
</script>

<template>
  <main>
    <Search />
    <List />
  </main>
</template>

<style scoped>
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
  }
  html {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 62.5%;
    line-height: 1.5;
  }
  body {
    font: var(--font-regular-medium);
    color: var(--color-dovegray);
    background-color: var(--color-alabaster);
  }
  main {
    padding: 10vh 10vw;
  }
</style>