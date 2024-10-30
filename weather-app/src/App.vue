<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="min-h-screen bg-slate-100 dark:bg-gray-800">
    <header
      class="flex p-3 h-auto mx-auto dark:bg-gray-700 bg-white rounded-b-xl shadow-md overflow-hidden justify-between">
      <h1 class="text-xl text-gray-900 dark:text-lime-300">
        Weather App
      </h1>
      <nav>
        <RouterLink class="text-lg p-3 text-gray-900 dark:text-lime-300 dark:hover:text-orange-600" to="/">
          Home
        </RouterLink>
        <RouterLink class="text-lg p-3 text-gray-900 dark:text-lime-300 dark:hover:text-orange-600" to="/forecast">
          Forecast
        </RouterLink>
      </nav>
    </header>
    <div class="flex justify-center items-center py-4">
      <RouterView />
    </div>
  </div>

</template>

<style scoped></style>
