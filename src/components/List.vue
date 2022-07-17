<script setup>
  import { defineProps, toRefs, ref } from 'vue'

  let props = defineProps({ cities: Array })
  let { cities } = toRefs(props)

  const sortDirection = ref(1)

  const sortList = (sortBy) => {
    sortDirection.value = -1 * sortDirection.value
    if (sortDirection.value == 1) cities.value.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1))
    if (sortDirection.value == -1) cities.value.sort((a, b) => (a[sortBy] < b[sortBy] ? 1 : -1))
  }
</script>

<template>
  <section class="list">
    <ul class="labels">
      <li class="label">
        <h1 @click="sortList('name')" class="sort" :class="sortDirection === 1 ? 'ascending' : 'descending'">Sort by name</h1>
      </li>
    </ul>
    <ul class="items">
      <li class="item" v-for="city in cities" :key="city.id">
          <div>{{city.name}}</div>
          <div>{{city.country}}</div>
          <div>{{parseInt(city.population).toLocaleString()}}</div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
  .list {
    padding: 6vh 6vw;
  }
    ul {
      list-style-type: none;
    }
    .sort.ascending::after {
      content: ' ▲'
    }
    .sort.descending::after {
      content: ' ▼'
    }

    .items, .labels {
      display: grid;
      gap: 1rem;
    }
    @media (min-width: 640px) {
      .item, .label {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
</style>