<script setup>
import WeatherIcons from './WeatherIcons.vue';

defineProps(['dateStr', 'icon', "temp", "description"])

const convertDateFormat = (dateStr) => {
    const date = new Date(dateStr);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    const hours = String(date.getHours()).padStart(2, '0');

    const formattedDate = `${day}/${month}/${year} ${hours}h`;


    return formattedDate;
}

</script>
<template>
    <div class="p-3 h-auto mx-auto dark:bg-gray-700 bg-white rounded-xl shadow-md overflow-hidden">
        <div class="font-mono">
            <h2 class="text-md text-gray-900 dark:text-lime-400">{{ convertDateFormat(dateStr) }}</h2>
        </div>
        <WeatherIcons :icon="icon" />
        <p class=" text-xl text-gray-900 dark:text-lime-300">
            {{ temp }}°C
        </p>
        <p class="text-xl	text-gray-900 dark:text-lime-300">
            {{ description }}
        </p>
    </div>
</template>

<style scoped></style>