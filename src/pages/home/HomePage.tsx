import { ForecastCard, WeatherCard } from "@/components/common";
import { useGetCurrentWeather } from "@/features/weather/api/getCurrentWeather";
import { useAppStore } from "@/store/appStore";

export default function HomePage() {
  const geoLocation = useAppStore((state) => state.geoLocation);
  const { data } = useGetCurrentWeather(geoLocation.loaded, {
    lat: geoLocation.coordinates.lat,
    lon: geoLocation.coordinates.lng,
  });
  console.log({ data });

  return (
    <div className="flex flex-col items-center justify-center py-4">
      <WeatherCard />
      <div className="text-2xl text-left w-full py-4">
        5-day Forecase (3 Hours)
      </div>
      <ForecastCard />
    </div>
  );
}
