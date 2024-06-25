import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_GEOCODING_API_KEY,
});

export const weatherApi = axios.create({
    baseURL: import.meta.env.VITE_WEATHER_API_KEY,
});


export default {
    cities: {
        fetch: async (name: string) => await api.get(`search?name=${name}&count=10&language=en&format=json`).then((response) => response.data),
    },
    weather: {
        fetchForecast: async (latitude: number, longitude: number) => await weatherApi.get(`forecast?latitude=${latitude}&longitude=${longitude}&timezone=Europe/Paris&format=json`).then((response) => response.data)
    },
}