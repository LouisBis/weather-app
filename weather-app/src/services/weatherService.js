import axios from 'axios';

export const getWeather = async (city) => {
    try {
        const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
            params: {
                q: city,
                units: "metric",
                appid: import.meta.env.VITE_API_KEY
            }
        });
        // console.log(response);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données météo:', error);
        throw error;
    }
};
