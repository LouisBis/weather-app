<script setup>
import { ref } from 'vue';
import { getLocalisation } from '@/services/localisationService';

const suggestions = ref([]);
const city = ref('');

const fetchCity = async () => {
    try {
        if (city.value.length >= 3) {
            const data = await getLocalisation(city.value);
            suggestions.value = data;
        }
    } catch (error) {
        console.error('Error during data fetching:', error);
        throw error;
    }
};
</script>

<template>
    <div class="flex flex-col p-12 h-auto max-w-xl mx-auto">
        <h2 class="text-2xl text-gray-900 dark:text-lime-400">{{ city }}</h2>
        <form @submit.prevent="$emit('search', suggestions[0].lat, suggestions[0].lon)">
            <label for="city-search" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City Search</label>
            <div class="flex flex-row">
                <input id="city-search" v-model.trim="city" type="text" placeholder="City" @input="fetchCity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-4 col-5" />
                <button type="submit" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded dark:bg-orange-600 dark:border-orange-800 dark:hover:bg-orange-500  dark:hover:border-orange-700">Search</button>
            </div>
        </form>
        <ul class="bg-gray-50 dark:bg-gray-700  text-gray-900 dark:text-white ">
            <li v-for="suggestion in suggestions" :key="suggestion.lat">
                <button @click="$emit('search', suggestion.lat, suggestion.lon)">
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
    </div>
</template>