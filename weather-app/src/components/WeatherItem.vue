<script setup>
import { ref, onMounted } from 'vue';
import WeatherIcons from './WeatherIcons.vue';
import { getCurrentWeather } from '@/services/currentWeatherService';


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
      <WeatherIcons :icon="icon" />
      <p class="text-4xl md:text-6xl lg:text-8xl	text-gray-900 dark:text-lime-300">
        {{ temp }}°C
      </p>
    </div>
    <div v-else-if="error" class="text-orange-600">
      <p>Error during weather fetching {{ error }}</p>
    </div>

    <div v-else>
      <p>Loading... <span class="relative animate-bounce ">⌛</span></p>
    </div>
    <input type="text" v-model.trim="city" v-on:keyup.enter="fetchWeather"
      class="mt-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800 dark:text-white dark:border-none" />
  </div>
</template>