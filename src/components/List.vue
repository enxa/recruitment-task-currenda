<script setup>
  import { cities, searchTerm } from '../composables/state.js'
  import { ref, watchEffect } from 'vue'

  const sortDirection = ref(1)
  const filteredCities = ref([])
  const activeCard = ref('name')

  const sortList = (sortBy) => {
    activeCard.value = sortBy
    sortDirection.value = -1 * sortDirection.value
    if (sortDirection.value == 1) filteredCities.value.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1))
    if (sortDirection.value == -1) filteredCities.value.sort((a, b) => (a[sortBy] < b[sortBy] ? 1 : -1))
  }

  const filterList = () => {
    if (searchTerm.value) filteredCities.value = cities.value.filter(city => city.name.toLowerCase().includes(searchTerm.value))
    if (!searchTerm.value) filteredCities.value = cities.value
  }

  watchEffect(() => {
    filterList()
  })  
</script>

<template>
  <section class="list">
    <ul class="labels">
      <li class="label">
        <h1 @click="sortList('name')" class="sort" :class="sortDirection === 1 ? 'ascending' : 'descending', activeCard === 'name' ? 'active' : 'disactive'">Sort by city</h1>
        <h1 @click="sortList('country')" class="sort" :class="sortDirection === 1 ? 'ascending' : 'descending', activeCard === 'country' ? 'active' : 'disactive'">Sort by country</h1>
        <h1 @click="sortList('population')" class="sort" :class="sortDirection === 1 ? 'ascending' : 'descending', activeCard === 'population' ? 'active' : 'disactive'">Sort by population</h1>
      </li>
    </ul>
    <ul class="items">
      <li class="item" v-for="city in filteredCities" :key="city.id">
          <div>{{city.name}}</div>
          <div>{{city.country}}</div>
          <div>{{parseInt(city.population).toLocaleString()}}</div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
  .sort {
    cursor: pointer;
  }
    .sort.ascending::after {
      content: ' ▲'
    }
    .sort.descending::after {
      content: ' ▼'
    }

  .disactive {
    opacity: 0.25
  }
  .items, .labels {
    display: grid;
    gap: 1rem;
    padding: 0;
    list-style-type: none;
  }
  @media (min-width: 640px) {
    .item, .label {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>