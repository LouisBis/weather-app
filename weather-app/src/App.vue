<script setup>
// import { RouterLink, RouterView } from 'vue-router';
// import HelloWorld from './components/WeatherItem.vue';
import CitySearch from './components/CitySearch.vue';
// import WeatherItem from './components/WeatherItem.vue';
</script>

<template>
  <div class="flex justify-content items-center h-screen bg-slate-100 dark:bg-gray-800">


    <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper"> -->
    <!-- <HelloWorld msg="You did it!" /> -->

    <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    <!-- </div>
  </header> -->
    <!-- <WeatherItem /> -->
    <CitySearch />
  </div>

</template>

<style scoped></style>
