import {
  TWeatherCity,
  TWeatherCloud,
  TWeatherMain,
  TWeatherRain,
  TWeatherSnow,
  TWeatherWeatherDetail,
  TWeatherWind,
} from "./common";

export type T5Day3HourDetail = {
  dt: number; // Time of data forecasted, unix, UTC
  main: TWeatherMain;
  weather: TWeatherWeatherDetail[];
  clouds: TWeatherCloud;
  wind: TWeatherWind;
  rain: TWeatherRain;
  snow?: TWeatherSnow;
  visibility: number;
  pop: number; // Probability of precipitation. The values vary between 0 and 1
  sys: {
    pod: "d";
  };
  dt_txt: string; // Time of data forecasted, ISO, UTC
};

export type T5Day3HourResponse = {
  cnt: number; // A number of timestamps returned in the API response
  list: T5Day3HourDetail[];
  city: TWeatherCity;
};
