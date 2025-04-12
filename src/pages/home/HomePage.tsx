import { ForecastCard, WeatherCard } from "@/components/common";

export default function Home() {
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
