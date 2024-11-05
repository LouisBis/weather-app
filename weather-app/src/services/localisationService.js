import axios from 'axios';

export const getLocalisation = async city => {
  try {
    const response = await axios.get(
      'http://api.openweathermap.org/geo/1.0/direct',
      {
        params: {
          q: city,
          limit: '5',
          appid: import.meta.env.VITE_API_KEY,
        },
      },
    );
    // console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error during logalisation fecthing:', error);
    throw error;
  }
};
