<script setup>
  import cities from './assets/cities.json'
  import List from './components/List.vue'
</script>

<template>
  <List :cities="cities" />
</template>