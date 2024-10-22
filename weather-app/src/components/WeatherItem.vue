<script setup>
import { ref } from 'vue';
import axios from 'axios';


let city = ref("Montreuil");
let temp = ref("");

function getTemp(city) {
  axios.get("https://api.openweathermap.org/data/2.5/weather", {
    params: {
      q: city,
      units: "metric",
      appid: import.meta.env.VITE_API_KEY
    }
  }).then(function (response) {
    temp.value = Math.round(response.data.main.temp * 10) / 10;
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });
}
getTemp("Paris"); // on défini un ville au chargement de la page
</script>

<template>
  <div>
    <section>
      <div>
        <h1 class='light'>Météo</h1>
        <h2 class='light'>{{ city }}</h2>
      </div>
      <p class='light'>
        <span id='temp' class='light'>{{ temp }}</span>°C
      </p>

      <input v-model="city" v-on:keyup.enter="getTemp(city)"/>
    </section>
  </div>
</template>

<style scoped>
section {
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}

div {
  display: flex;
  flex-flow: column wrap;
}

h1 {
  font-size: 5em;
  margin: 0;
  line-height: 0.6em;
}


h2 {
  font-size: 2em;
  margin: 0;
  text-transform: capitalize;
}

p {
  font-size: 6em;
  margin: 0;
  font-weight: bold;
  margin-bottom: 0.1em;
  margin-top: 0.3em;
}

#cityChange {
  border: none;
  font-size: 1.5em;
  height: 1.5em;
  width: 8em;
  border-radius: 10px;
}

#cityChange:hover {
  box-shadow: 0px 0px 7px #4285F4;
  cursor: pointer;
}

#darkMode {
  display: inline-block;
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  font-size: 1.2em;
  height: 1.5em;
  width: 2em;
  border-radius: 10px;
}

#darkMode:hover {
  box-shadow: 0px 0px 7px #c6c6c6;
  cursor: pointer;
}

/*----------------Gestion du Light Mode----------------*/

h1.light {
  color: #4285F4;
}

h2.light {
  color: #F4B400;
}

p.light {
  color: #0F9D58;
}

button#cityChange.light {
  background-color: #4285F4;
  color: white;
}

button#darkMode.light {
  background-color: #112F41;
  color: rgb(216, 216, 185);
}

/*----------------Gestion du Dark Mode----------------*/

button#darkMode.dark {
  background-color: rgb(216, 216, 185);
  color: #112F41;
}

button#darkMode.dark:hover {
  box-shadow: 0px 0px 7px rgb(216, 216, 185);
  ;
  cursor: pointer;
}

.dark {
  color: rgb(216, 216, 185);
}

button#cityChange.dark {
  background-color: rgb(216, 216, 185);
  color: #112F41;
}

button#cityChange.dark:hover {
  box-shadow: 0px 0px 7px rgb(216, 216, 185);
  cursor: pointer;
}
</style>
