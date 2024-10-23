<script setup>
import { ref } from 'vue';
import axios from 'axios';
import IconWeather01d from './icons/IconWeather01d.vue';
import IconWeather02d from './icons/IconWeather02d.vue';
import IconWeather03d from './icons/IconWeather03d.vue';
import IconWeather04d from './icons/IconWeather04d.vue';
import IconWeather09d from './icons/IconWeather09d.vue';
import IconWeather10d from './icons/IconWeather10d.vue';
import IconWeather13d from './icons/IconWeather13d.vue';
import IconWeather50d from './icons/IconWeather50d.vue';


let city = ref("Montreuil");
let weather = ref("");
let temp = ref("");
let icon = ref("10d")


function getTemp(city) {
  axios.get("https://api.openweathermap.org/data/2.5/weather", {
    params: {
      q: city,
      units: "metric",
      appid: import.meta.env.VITE_API_KEY
    }
  }).then(function (response) {
    temp.value = Math.round(response.data.main.temp * 10) / 10;
    weather.value = response.data.weather[0].main;
    icon.value = response.data.weather[0].icon;

    // console.log(response)
  }).catch(function (error) {
    console.log(error);
  });
}
getTemp("Paris"); 
</script>

<template>
  <div class="p-12 h-auto max-w-md mx-auto dark:bg-gray-700 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div class="font-mono">
      <h1 class="text-5xl text-gray-900 dark:text-lime-300">Weather</h1>
      <h2 class="text-2xl text-gray-900 dark:text-lime-400">{{ city }}</h2>
    </div>
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




    <input type="text" v-model="city" v-on:keyup.enter="getTemp(city)"
      class="mt-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
  </div>
</template>