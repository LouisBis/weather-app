<script setup>
import { ref } from 'vue';
import { getDailyForecastWeather } from '@/services/dailyForecastService';
import CitySearch from './CitySearch.vue';
import WeatherCard from './WeatherCard.vue';

const lat = ref(null);
const lon = ref(null);
const forecasts = ref([]);
const city = ref('');
const error = ref(null)

const handleSearch = async (latitude, longitude) => {
    lat.value = latitude;
    lon.value = longitude;
    await fetchWeather(latitude, longitude);
};

const fetchWeather = async (lat, lon) => {
    try {
        const data = await getDailyForecastWeather(lat, lon);
        forecasts.value = data.list;
        city.value = data.city.name;
    } catch (err) {
        console.error('Error during data fetching:', err);
        error.value = 'Failed to fetch weather data. Please try again later.';
    }
};
</script>

<template>
    <div class="flex flex-col p-12 h-auto max-w-xl mx-auto">
        <CitySearch @search="handleSearch" />
        <div v-if="error" class=" text-orange-600">
            <p>{{ error }}</p>
        </div>

        <div v-if="city">
            <h2 class="text-2xl text-gray-900 dark:text-lime-400">{{ city }}</h2>
            <ul class="flex flex-row items-stretch" v-if="forecasts.length">
                <li v-for="forecast in forecasts" :key="forecast.dt" class="p-3">
                    <WeatherCard :icon="forecast.weather[0].icon" :dateStr="forecast.dt_txt" :temp="forecast.main.temp"
                        :description="forecast.weather[0].description" />
                </li>
            </ul>
        </div>
    </div>
</template>
