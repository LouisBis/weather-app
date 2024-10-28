// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

import axios from 'axios'

export const getDailyForecastWeather = async (lat, lon) => {
  try {
    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/forecast',
      {
        params: {
          lat: lat,
          lon: lon,
          cnt: '16',
          mode: 'json',
          units: 'metric',
          appid: import.meta.env.VITE_API_KEY,
        },
      },
    )
    console.log(response)
    return response.data
  } catch (error) {
    console.error('Erreur lors de la récupération des données météo:', error)
    throw error
  }
}
