import axiosClient from "@/configs/axios";
import { API_KEY, API_ROUTE, DEFAULT_REQUEST_UNITS } from "../constants";
import { useQuery } from "@tanstack/react-query";
import { TCurrentWeatherResponse, TWeatherUnits } from "../types";

type TParams = {
  lat: number;
  lon: number;
  units?: TWeatherUnits;
};

export const getCurrentWeather = async (
  params: TParams
): Promise<TCurrentWeatherResponse> => {
  const response = await axiosClient.get(API_ROUTE.CURRENT, {
    params: {
      ...params,
      units: params.units ?? DEFAULT_REQUEST_UNITS,
      appId: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
    },
  });
  return response.data;
};

export const useGetCurrentWeather = (
  locationLoaded: boolean,
  params: TParams
) => {
  return useQuery({
    queryKey: [API_KEY.CURRENT, params],
    queryFn: () => getCurrentWeather(params),
    enabled: locationLoaded,
  });
};
