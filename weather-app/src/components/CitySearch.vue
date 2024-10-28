<script setup>
import { getDailyForecastWeather } from '@/services/dailyForecastService';
import { getLocalisation } from '@/services/localisationService';
import { ref, onMounted } from 'vue';
import WeatherCard from './WeatherCard.vue';

const suggestions = ref('');
const city = ref('');
const forecasts = ref({});

const fetchCity = async () => {
    try {
        // console.log('Fetching weather data...');
        if (city.value.length >= 3) {
            const data = await getLocalisation(city.value);
            // console.log('Weather data received:', data);
            suggestions.value = data;
        }

    } catch (error) {
        console.error('Error during data fetching:', error);
        throw error;
    }
};

const fetchWeather = async (lat, lon) => {
    try {
        if (!suggestions.value) return;
        if (!lat || !lon) {
            lat = suggestions.value[0].lat;
            lon = suggestions.value[0].lon;
            console.log(lat, lon)
        }
        // console.log('Fetching weather data...');
        const data = await getDailyForecastWeather(lat, lon);
        forecasts.value = data.list;
        // console.log('Weather data received:', data);
        suggestions.value = "";
        city.value = data.city.name;

    }
    catch (error) {
        console.error('Error during data fetching:', error);
        throw error;
    }
};

onMounted(() => {
    fetchCity();
});

</script>
<template>
    <div class="flex flex-col p-12 h-auto max-w-xl mx-auto">
        <h2>{{ city }}</h2>
        <form @submit.prevent="fetchWeather()">
            <label for="city-search" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City
                Search
            </label>
            <div class="flex flex-row">
                <input id="city-search" v-model.trim="city" type="text" placeholder="City" @input="fetchCity"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-4 col-5">
                <button
                    class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Search
                </button>
            </div>
        </form>
        <ul class="bg-gray-50 dark:bg-gray-700  text-gray-900 dark:text-white">
            <li v-for="suggestion in suggestions" v-bind:key="suggestion.lat">
                <button v-on:click="fetchWeather(suggestion.lat, suggestion.lon)">
                    <span v-if="suggestion.local_names && suggestion.local_names.fr">
                        {{ suggestion.local_names.fr }}
                    </span>
                    <span v-else-if="suggestion.local_names && suggestion.local_names.en">
                        {{ suggestion.local_names.en }}
                    </span>
                    <span v-else>
                        {{ suggestion.name }}
                    </span>&nbsp;
                    <span v-if="suggestion.country">
                        {{ suggestion.country }}
                    </span>&nbsp;
                    <span v-if="suggestion.state">
                        {{ suggestion.state }}
                    </span>
                </button>
            </li>
        </ul>
        <div class="flex flex-row">
            <ul class="flex flex-row" v-if="forecasts">
                <li v-for="forecast in forecasts" v-bind:key="forecast.dt" class="p-3">
                    <WeatherCard :icon="forecast.weather[0].icon" :dateStr="forecast.dt_txt" :temp="forecast.main.temp"
                        :descritpion="forecast.weather[0].description" />
                </li>
            </ul>
        </div>
    </div>
</template>