<script setup>
  import { searchTerm } from '../composables/state.js'
</script>

<template>
  <section class="search">
    <input type="text" v-model="searchTerm" placeholder="Search..."/>
  </section>
</template>

<style>
  input {
    width: 100%;
    font-size: 2rem;
    border: none;
  }
  input:focus {
    outline: none;
  }
</style>