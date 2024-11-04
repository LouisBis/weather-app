<script setup>
import { ref, onMounted } from 'vue';
import { getCurrentWeather } from '@/services/currentWeatherService';
import WeatherCard from './WeatherCard.vue';
import { convertDateFormat } from '@/services/handleDate';


const city = ref("Montreuil");
const weather = ref("");
const temp = ref("");
const icon = ref("10d");
const error = ref(null);

const fetchWeather = async () => {
  try {
    // console.log('Fetching weather data...');
    const data = await getCurrentWeather(city.value);
    // console.log('Weather data received:', data);
    weather.value = data.weather[0].main;
    icon.value = data.weather[0].icon;
    temp.value = Math.round(data.main.temp * 10) / 10;

  } catch (error) {
    console.error('Error during data fetching:', error);
    throw error;
  }
};

onMounted(() => {
  const date = convertDateFormat()
  fetchWeather();
});

</script>

<template>
  <div class="font-mono">
    <h1 class="text-xl text-gray-900 dark:text-lime-300">Current weather</h1>
    <h2 class="text-xl text-gray-900 dark:text-lime-400">{{ city }}</h2>
  </div>
  <div v-if="weather">
    <WeatherCard :icon="icon" :dateStr="date" :temp="temp" />
  </div>
  <input type="text" v-model.trim="city" v-on:keyup.enter="fetchWeather"
    class="mt-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-white dark:border-none" />
</template>