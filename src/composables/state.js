import citiesJson from '../assets/cities.json'
import { ref } from 'vue'

export const cities = ref(citiesJson)

export const searchTerm = ref('')