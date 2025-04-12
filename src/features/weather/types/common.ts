export type TWeatherMain = {
  temp: number; // Temperature, Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
  feels_like: number; // Temperature
  temp_min: number; // Minimum temperature at the moment
  temp_max: number; // Maximum temperature at the moment
  pressure: number; // Atmospheric pressure on the sea level, hPa
  humidity: number; // Humidity, %
  sea_level: number; // Atmospheric pressure on the sea level, hPa
  grnd_level: number; // Atmospheric pressure on the ground level, hPa
};

export type TWeatherWeatherDetail = {
  id: number; // Weather condition id
  main: string; // Group of weather parameters (Rain, Snow, Clouds etc.)
  description: string; // Weather condition within the group.
  icon: string; // Weather icon id
};

export type TWeatherWind = {
  speed: number; // Wind speed, meter/sec
  deg: number; // Wind direction, degrees
  gust: number; // Wind gust, meter/sec
};

export type TWeatherCloud = {
  all: number; // Cloudiness, %
};

export type TWeatherRain = { "1h"?: number; "3h"?: number };

export type TWeatherSnow = { "1h"?: number; "3h"?: number };

export type TWeatherCoord = {
  lat: number; // Geo location, latitude
  lon: number; // Geo location, longitude
};

export type TWeatherCity = {
  id: number; // City ID
  name: string; // City name
  coord: TWeatherCoord;
  country: string; // Country code
  population: number; // City population
  timezone: number; // Shift in seconds from UTC
  sunrise: number; // Sunrise time, Unix, UTC
  sunset: number; // Sunset time, Unix, UTC
};

export type TWeatherUnits = "standard" | "metric" | "imperial";
