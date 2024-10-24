<script setup>
import IconWeather01d from './icons/IconWeather01d.vue';
import IconWeather02d from './icons/IconWeather02d.vue';
import IconWeather03d from './icons/IconWeather03d.vue';
import IconWeather04d from './icons/IconWeather04d.vue';
import IconWeather09d from './icons/IconWeather09d.vue';
import IconWeather10d from './icons/IconWeather10d.vue';
import IconWeather13d from './icons/IconWeather13d.vue';
import IconWeather50d from './icons/IconWeather50d.vue';

defineProps(['icon'])

</script>

<template>
    <IconWeather01d class="fill-amber-500 dark:fill-lime-300 animate-pulse w-48 md:w-56 lg:w-auto"
        v-if="icon === '01d' || icon === '01n'" />
    <IconWeather02d class="fill-stone-400 dark:fill-lime-300 animate-pulse w-48 md:w-56 lg:w-auto"
        v-if="icon === '02d' || icon === '02n'" />
    <IconWeather03d class="fill-amber-500 dark:fill-lime-300 animate-pulse w-48 md:w-56 lg:w-auto"
        v-if="icon === '03d' || icon === '03n'" />
    <IconWeather04d class="fill-amber-500 dark:fill-lime-300 animate-pulse w-48 md:w-56 lg:w-auto"
        v-if="icon === '04d' || icon === '04n'" />
    <IconWeather09d class="fill-amber-500 dark:fill-lime-300 animate-pulse w-48 md:w-56 lg:w-auto"
        v-if="icon === '09d' || icon === '09n'" />
    <IconWeather10d class="fill-amber-500 dark:fill-lime-300 animate-pulse w-48 md:w-56 lg:w-auto"
        v-if="icon === '10d' || icon === '10n'" />
    <IconWeather13d class="fill-amber-500 dark:fill-lime-300 animate-pulse w-48 md:w-56 lg:w-auto"
        v-if="icon === '13d' || icon === '13n'" />
    <IconWeather50d class="fill-amber-500 dark:fill-lime-300 animate-pulse w-48 md:w-56 lg:w-auto"
        v-if="icon === '50d' || icon === '50n'" />
</template>

<style scoped></style>
