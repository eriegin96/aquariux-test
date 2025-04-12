import axiosClient from "@/configs/axios";
import { API_KEY, API_ROUTE, DEFAULT_REQUEST_LIMIT } from "../constants";
import { useMutation } from "@tanstack/react-query";
import { TCoordinateResponse } from "../types";

type TParams = {
  q: string;
  limit?: number;
};

export const getCoordinateByLocation = async (
  params: TParams
): Promise<TCoordinateResponse[]> => {
  const response = await axiosClient.get(API_ROUTE.COORDINATE, {
    params: {
      ...params,
      limit: params.limit ?? DEFAULT_REQUEST_LIMIT,
      appId: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
    },
  });
  return response.data;
};

export const useGetCoordinateByLocation = (limit?: number) => {
  return useMutation({
    mutationKey: [API_KEY.COORDINATE],
    mutationFn: (q: string) => getCoordinateByLocation({ q, limit }),
  });
};
