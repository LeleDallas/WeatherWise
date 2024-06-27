export type City = {
    country: string;
    country_code: string;
    country_id: number;
    elevation: number;
    feature_code: string;
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    population: number;
    timezone: string;
    admin1: string;
    admin2: string;
};

export type Forecasting = {
    current: {
        temperature_2m: number;
        relative_humidity_2m: number;
        surface_pressure: number;
    };
    current_units: {
        surface_pressure: string;
        relative_humidity_2m: string;
    };
    daily: {
        apparent_temperature_max: number[];
        apparent_temperature_min: number[];
        precipitation_hours: number[];
        precipitation_probability_max: number[];
        precipitation_sum: number[];
        rain_sum: number[];
        showers_sum: number[];
        snowfall_sum: number[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        time: string[];
        uv_index_max: number[];
        weather_code: number[];
        wind_gusts_10m_max: number[];
        wind_speed_10m_max: number[];
        sunrise: string[];
        sunset: string[];
    };
    daily_units: {
        apparent_temperature_max: string;
        apparent_temperature_min: string;
        precipitation_hours: string;
        precipitation_probability_max: string;
        precipitation_sum: string;
        rain_sum: string;
        showers_sum: string;
        snowfall_sum: string;
        temperature_2m_max: string;
        temperature_2m_min: string;
        time: string;
        uv_index_max: string;
        weather_code: string;
        wind_gusts_10m_max: string;
        wind_speed_10m_max: string;
    };
    elevation: number;
    generationtime_ms: number;
    latitude: number;
    longitude: number;
    timezone_abbreviation: string;
    timezone: string;
    utc_offset_seconds: number;
};

type UnitsData = {
    value: number | string;
    unit: string;
    title: string;
    icon: string;
};

export type ForecastingUnits = {
    icon: string;
    current: number;
    apparent_temperature_max: UnitsData;
    apparent_temperature_min: UnitsData;
    precipitation_probability_max: UnitsData;
    temperature_2m_max: UnitsData;
    temperature_2m_min: UnitsData;
    time: string;
    uv_index_max: UnitsData;
    weather_code: string;
    wind_gusts_10m_max: UnitsData;
    wind_speed_10m_max: UnitsData;
    sunrise: UnitsData;
    sunset: UnitsData;
    pressure: UnitsData;
    humidity: UnitsData;
};

export type ForecastingResponse = Record<string, ForecastingUnits>;

export enum WeatherCode {
    'Clear Sky' = 0,
    'Mainly Clear' = 1,
    'Partly Cloudy' = 2,
    'Overcast' = 3,
    'Fog' = 45,
    'Rime Fog' = 48,
    'Drizzle Light' = 51,
    'Drizzle Moderate' = 53,
    'Drizzle Dense' = 55,
    'Freezing Drizzle Light' = 56,
    'Freezing Drizzle Dense' = 57,
    'Rain Slight' = 61,
    'Rain Moderate' = 63,
    'Rain Heavy' = 65,
    'Freezing RainLight' = 66,
    'Freezing RainHeavy' = 67,
    'Snow Fall Slight' = 71,
    'Snow Fall Moderate' = 73,
    'Snow Fall Heavy' = 75,
    'Snow Grains' = 77,
    'Rain Showers Slight' = 80,
    'Rain Showers Moderate' = 81,
    'Rain Showers Violent' = 82,
    'Snow Showers Slight' = 85,
    'Snow Showers Heavy' = 86,
    'Thunderstorm' = 95,
    'Thunderstorm Slight' = 96,
    'Thunderstorm Heavy' = 99,
}
