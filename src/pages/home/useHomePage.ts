import { useGet5Day3Hour, useGetCurrentWeather } from "@/features/weather/api";
import { useAppStore } from "@/store/appStore";

export const useHomePage = () => {
  const geoLocation = useAppStore((state) => state.geoLocation);

  const { data: currentWeatherData, isLoading: isLoadingCurrentWeather } =
    useGetCurrentWeather(geoLocation.loaded && !geoLocation.error, {
      lat: geoLocation.coordinates.lat,
      lon: geoLocation.coordinates.lng,
    });
  const { data: fiveDay3HourData, isLoading: isLoading5Day3Hour } =
    useGet5Day3Hour(geoLocation.loaded && !geoLocation.error, {
      lat: geoLocation.coordinates.lat,
      lon: geoLocation.coordinates.lng,
    });

  return {
    currentWeatherData,
    isLoadingCurrentWeather,
    fiveDay3HourData,
    isLoading5Day3Hour,
  };
};
