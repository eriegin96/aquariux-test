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
    country: Pick<TWeatherCity, "country">;
    sunrise: Pick<TWeatherCity, "sunrise">;
    sunset: Pick<TWeatherCity, "sunset">;
  };
};
