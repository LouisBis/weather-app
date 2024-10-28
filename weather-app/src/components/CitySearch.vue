<script setup>
import { getLocalisation } from '@/services/localisationService';
import { ref, onMounted } from 'vue';


const suggestions = ref('');
const city = ref('paris')

const fetchCity = async () => {
    try {
        // console.log('Fetching weather data...');
        const data = await getLocalisation(city.value);
        // console.log('Weather data received:', data);
        suggestions.value = data;

    } catch (error) {
        console.error('Error during data fetching:', error);
        throw error;
    }
};

onMounted(() => {
    fetchCity();
});

</script>
<template>
    <div class="flex flex-col p-12 h-auto max-w-md mx-auto">

        <h2>City Search</h2>
        <form @submit.prevent="fetchCity">
            <input v-model.trim="city" type="text" placeholder="Add an item">
            <button
                class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Search</button>
        </form>
        <ul>
            <li v-for="suggestion in suggestions" v-bind:key="suggestion.lat">
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
            </li>
        </ul>

    </div>
</template>