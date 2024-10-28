<script setup>
// import { RouterLink, RouterView } from 'vue-router';
// import HelloWorld from './components/WeatherItem.vue';
import CitySearch from './components/CitySearch.vue';
import Layout from './components/Layout.vue';
// import WeatherCard from './components/WeatherCard.vue';
// import WeatherItem from './components/WeatherItem.vue';
</script>

<template>
  <Layout />
  <div class="flex justify-content items-center h-screen bg-slate-100 dark:bg-gray-800">

    <!-- <WeatherItem /> -->
    <CitySearch />
    <!-- <WeatherCard :forecast="{ 'description': 'description', 'temp': '12', 'icon': '04d', 'date': '10/10/24' }" /> -->
  </div>

</template>

<style scoped></style>
