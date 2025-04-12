import { ForecastCard, WeatherCard } from "@/components/common";
import { useHomePage } from "./useHomePage";

export default function HomePage() {
  const {
    currentWeatherData,
    isLoadingCurrentWeather,
    fiveDay3HourData,
    isLoading5Day3Hour,
  } = useHomePage();

  return (
    <div className="flex flex-col items-center justify-center py-4">
      <WeatherCard
        data={currentWeatherData}
        isLoading={isLoadingCurrentWeather}
      />

      <div className="text-2xl text-left font-semibold w-full py-4">
        5-day Forecast (3 Hours)
      </div>
      <ForecastCard data={fiveDay3HourData} isLoading={isLoading5Day3Hour} />
    </div>
  );
}
