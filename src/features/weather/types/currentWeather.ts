import {
  TWeatherCity,
  TWeatherCloud,
  TWeatherMain,
  TWeatherRain,
  TWeatherWeatherDetail,
  TWeatherWind,
} from "./common";

export type TCurrentWeatherResponse = Pick<
  TWeatherCity,
  "id" | "name" | "timezone" | "coord"
> & {
  base: string; // Internal parameter
  main: TWeatherMain;
  weather: TWeatherWeatherDetail[];
  clouds: TWeatherCloud;
  wind: TWeatherWind;
  visibility: number; // Visibility, meter.
  rain: TWeatherRain; // Precipitation, mm/h.
  dt: number; // UTC
  sys: {
    country: TWeatherCity["country"];
    sunrise: TWeatherCity["sunrise"];
    sunset: TWeatherCity["sunset"];
  };
};
