import axios from "axios";
import { Forecasting, ForecastingUnits, WeatherCode } from "../@types/api";
import { enumToIconName } from "../feature";
import { t } from "i18next";

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
        fetchForecast: async (latitude: number, longitude: number) => await weatherApi.get(`forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,uv_index_max,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,sunrise,sunset&current=relative_humidity_2m,apparent_temperature,surface_pressure,temperature_2m`).then((response) => {
            const forecasting: Forecasting = response.data
            return forecasting.daily.time.reduce((acc, date, index) => {
                acc[date] = {
                    precipitation_probability_max: {
                        value: forecasting.daily.precipitation_probability_max[index],
                        unit: forecasting.daily_units.precipitation_probability_max,
                        title: t('precipitation_probability_max'),
                        icon: "icon-Rain3"
                    },
                    wind_speed_10m_max: {
                        value: forecasting.daily.wind_speed_10m_max[index],
                        unit: forecasting.daily_units.wind_speed_10m_max,
                        title: t('wind_speed_10m_max'),
                        icon: "icon-Windy"
                    },
                    sunrise: {
                        title: t("sunrise"),
                        unit: "",
                        value: new Date(forecasting.daily.sunrise[index]).toLocaleTimeString(),
                        icon: 'icon-Surise1'

                    },
                    sunset: {
                        title: t("sunset"),
                        unit: "",
                        value: new Date(forecasting.daily.sunset[index]).toLocaleTimeString(),
                        icon: 'icon-Sunset'

                    },
                    uv_index_max: {
                        value: forecasting.daily.uv_index_max[index],
                        unit: forecasting.daily_units.uv_index_max,
                        title: t('uv_index_max'),
                        icon: 'icon-Sun'
                    },
                    pressure: {
                        value: forecasting.current.surface_pressure,
                        unit: forecasting.current_units.surface_pressure,
                        title: t("pressure"),
                        icon: "icon-HotTemperature"
                    },

                    apparent_temperature_max: {
                        value: forecasting.daily.apparent_temperature_max[index],
                        unit: forecasting.daily_units.apparent_temperature_max,
                        title: t('apparent_temperature_max'),
                        icon: "icon-Cloudy"
                    },
                    apparent_temperature_min: {
                        value: forecasting.daily.apparent_temperature_min[index],
                        unit: forecasting.daily_units.apparent_temperature_min,
                        title: t('apparent_temperature_min'),
                        icon: "icon-Cloudy"
                    },

                    temperature_2m_max: {
                        value: forecasting.daily.temperature_2m_max[index],
                        unit: forecasting.daily_units.temperature_2m_max,
                        title: t('temperature_2m_max'),
                        icon: "icon-Temperatureup"
                    },
                    temperature_2m_min: {
                        value: forecasting.daily.temperature_2m_min[index],
                        unit: forecasting.daily_units.temperature_2m_min,
                        title: t('temperature_2m_min'),
                        icon: "icon-Temperaturedown"
                    },
                    time: date,
                    humidity: {
                        value: forecasting.current.relative_humidity_2m,
                        unit: forecasting.current_units.relative_humidity_2m,
                        title: t("humidity"),
                        icon: "icon-Humidity"
                    },
                    weather_code: WeatherCode[forecasting.daily.weather_code[index]],
                    wind_gusts_10m_max: {
                        value: forecasting.daily.wind_gusts_10m_max[index],
                        unit: forecasting.daily_units.wind_gusts_10m_max,
                        title: t('wind_gusts_10m_max'),
                        icon: "icon-Wind"
                    },
                    current: forecasting.current.temperature_2m,
                    icon: enumToIconName(forecasting.daily.weather_code[index]),

                };
                return acc;
            }, {} as Record<string, ForecastingUnits>);
        })
    },
}