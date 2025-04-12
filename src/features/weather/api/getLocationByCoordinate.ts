import axiosClient from "@/configs/axios";
import { API_KEY, API_ROUTE } from "../constants";
import { useQuery } from "@tanstack/react-query";
import { TCoordinateResponse } from "../types";

type TParams = {
  lat: number;
  lon: number;
  limit?: number;
};

export const getLocationByCoordinate = async (
  params: TParams
): Promise<TCoordinateResponse[]> => {
  const response = await axiosClient.get(API_ROUTE.LOCATION, {
    params: {
      ...params,
      appId: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
    },
  });
  return response.data;
};

export const useGetLocationByCoordinate = (
  loaded: boolean,
  params: TParams
) => {
  return useQuery({
    queryKey: [API_KEY.LOCATION],
    queryFn: () => getLocationByCoordinate(params),
    enabled: loaded,
  });
};
