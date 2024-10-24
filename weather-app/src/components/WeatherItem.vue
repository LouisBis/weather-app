<script setup>
import { ref, onMounted } from 'vue';
import IconWeather01d from './icons/IconWeather01d.vue';
import IconWeather02d from './icons/IconWeather02d.vue';
import IconWeather03d from './icons/IconWeather03d.vue';
import IconWeather04d from './icons/IconWeather04d.vue';
import IconWeather09d from './icons/IconWeather09d.vue';
import IconWeather10d from './icons/IconWeather10d.vue';
import IconWeather13d from './icons/IconWeather13d.vue';
import IconWeather50d from './icons/IconWeather50d.vue';
import { getWeather } from '@/services/weatherService';


let city = ref("Montreuil");
let weather = ref("");
let temp = ref("");
let icon = ref("10d");

const fetchWeather = async () => {
  try {
    // console.log('Fetching weather data...');
    const data = await getWeather(city.value);
    // console.log('Weather data received:', data);
    weather.value = data.weather[0].main;
    icon.value = data.weather[0].icon;
    temp.value = Math.round(data.main.temp * 10) / 10;

  } catch (error) {
    console.error('Erreur lors de la récupération des données météo:', error);
    throw error;
  }
};

onMounted(() => {
  fetchWeather();
});

</script>

<template>
  <div class="p-12 h-auto max-w-md mx-auto dark:bg-gray-700 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div class="font-mono">
      <h1 class="text-5xl text-gray-900 dark:text-lime-300">Weather</h1>
      <h2 class="text-2xl text-gray-900 dark:text-lime-400">{{ city }}</h2>
    </div>
    <div v-if="weather">
      <IconWeather01d v-if="icon === '01d'" />
      <IconWeather02d v-if="icon === '02d'" />
      <IconWeather03d v-if="icon === '03d'" />
      <IconWeather04d v-if="icon === '04d'" />
      <IconWeather09d v-if="icon === '09d'" />
      <IconWeather10d v-if="icon === '10d'" />
      <IconWeather13d v-if="icon === '13d'" />
      <IconWeather50d v-if="icon === '50d'" />
      <p class="text-8xl	text-gray-900 dark:text-lime-300">
        {{ temp }}°C
      </p>
    </div>
    <div v-else-if="error">
      <p>Error during weather fetching {{ error }}</p>
    </div>

    <div v-else>
      <p>Loading...</p>
    </div>

    <input type="text" v-model="city" v-on:keyup.enter="fetchWeather"
      class="mt-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
  </div>
</template>