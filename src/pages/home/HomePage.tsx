import { ForecastCard, WeatherCard } from "@/components/common";
import { useGetCurrentWeather } from "@/features/weather/api/getCurrentWeather";
import { useAppStore } from "@/store/appStore";
import { useEffect } from "react";

export default function HomePage() {
  const geoLocation = useAppStore((state) => state.geoLocation);
  const setCity = useAppStore((state) => state.setCity);
  const { data, isLoading } = useGetCurrentWeather(geoLocation.loaded, {
    lat: geoLocation.coordinates.lat,
    lon: geoLocation.coordinates.lng,
  });

  useEffect(() => {
    if (data) setCity({ cityName: data.name, countryCode: data.sys.country });
  }, [data, setCity]);

  return (
    <div className="flex flex-col items-center justify-center py-4">
      <WeatherCard data={data} isLoading={isLoading} />

      <div className="text-2xl text-left w-full py-4">
        5-day Forecase (3 Hours)
      </div>
      <ForecastCard />
    </div>
  );
}
