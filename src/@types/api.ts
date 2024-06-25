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
}

type HourlyForecast = {
    time: string;
    temperature_2m: string;
}

export type Forecasting = {
    latitude: number,
    longitude: number,
    generationtime_ms: number,
    utc_offset_seconds: number,
    timezone: string,
    timezone_abbreviation: string,
    elevation: number
    hourly_units: HourlyForecast,
    hourly: HourlyForecast
}