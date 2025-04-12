import axiosClient from "@/configs/axios";
import { API_KEY, API_ROUTE, DEFAULT_REQUEST_UNITS } from "../constants";
import { useQuery } from "@tanstack/react-query";
import { T5Day3HourResponse, TWeatherUnits } from "../types";

type TParams = {
  lat: number;
  lon: number;
  units?: TWeatherUnits;
};

export const get5Day3Hour = async (
  params: TParams
): Promise<T5Day3HourResponse> => {
  const response = await axiosClient.get(API_ROUTE["5DAY_3HOUR"], {
    params: {
      ...params,
      units: params.units ?? DEFAULT_REQUEST_UNITS,
      appId: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
    },
  });
  return response.data;
};

export const useGet5Day3Hour = (locationLoaded: boolean, params: TParams) => {
  return useQuery({
    queryKey: [API_KEY["5DAY_3HOUR"]],
    queryFn: () => get5Day3Hour(params),
    enabled: locationLoaded,
  });
};
