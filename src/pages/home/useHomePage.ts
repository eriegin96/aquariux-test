import { useGet5Day3Hour, useGetCurrentWeather } from "@/features/weather/api";
import { useAppStore } from "@/store/appStore";
import { useEffect } from "react";

export const useHomePage = () => {
  const geoLocation = useAppStore((state) => state.geoLocation);
  const setCity = useAppStore((state) => state.setCity);
  const { data: currentWeatherData, isLoading: isLoadingCurrentWeather } =
    useGetCurrentWeather(geoLocation.loaded, {
      lat: geoLocation.coordinates.lat,
      lon: geoLocation.coordinates.lng,
    });
  const { data: fiveDay3HourData, isLoading: isLoading5Day3Hour } =
    useGet5Day3Hour(geoLocation.loaded, {
      lat: geoLocation.coordinates.lat,
      lon: geoLocation.coordinates.lng,
    });

  useEffect(() => {
    if (currentWeatherData)
      setCity({
        cityName: currentWeatherData.name,
        countryCode: currentWeatherData.sys.country,
      });
  }, [currentWeatherData, setCity]);

  return {
    currentWeatherData,
    isLoadingCurrentWeather,
    fiveDay3HourData,
    isLoading5Day3Hour,
  };
};
