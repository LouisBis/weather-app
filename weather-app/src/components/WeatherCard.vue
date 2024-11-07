<script setup>
import { convertDateFormat } from '@/services/handleDate';
import WeatherIcons from './WeatherIcons.vue';

defineProps(['dateStr', 'icon', "temp", "description", "error"])

</script>
<template>
    <div class="p-6 mx-auto dark:bg-gray-700 bg-white rounded-xl shadow-md overflow-hidden h-full">
        <div v-if="error" class=" text-orange-600">
            <p>Error during weather fetching {{ error }}</p>
        </div>
        <div v-else-if="temp">
            <div class="font-mono">
                <h2 class="text-md text-gray-900 dark:text-lime-400">{{ convertDateFormat(dateStr) }}</h2>
            </div>

            <WeatherIcons :icon="icon" />
            <p data-cy-temp class=" text-xl text-gray-900 dark:text-lime-300">
                {{ temp }}°C
            </p>
            <p class="text-xl text-gray-900 dark:text-emerald-400">
                {{ description }}
            </p>
        </div>
        <div v-else>
            <p>Loading... <span class="relative animate-bounce ">⌛</span></p>
        </div>
    </div>
</template>

<style scoped></style>