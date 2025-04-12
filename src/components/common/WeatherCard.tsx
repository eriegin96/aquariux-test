import { TCurrentWeatherResponse } from "@/features/weather/types";
import { formatFullDate } from "@/lib/dayjs/format";
import { ArrowLeft } from "lucide-react";
import { memo } from "react";
import { Skeleton } from "../ui/skeleton";

type TWeatherCardProps = { isLoading: boolean; data?: TCurrentWeatherResponse };

export const WeatherCard = memo(function WeatherCard({
  isLoading,
  data,
}: TWeatherCardProps) {
  if (isLoading) return <Skeleton className="w-full h-52" />;
  if (!data)
    return (
      <div className="rounded-lg p-4 border border-gray-300 bg-white w-full">
        No data
      </div>
    );

  const {
    main: { temp, humidity },
    weather: [{ description, icon }],
    visibility,
    wind: { deg, speed },
  } = data;

  return (
    <div className="rounded-lg p-4 border border-gray-300 bg-white w-full">
      <span className="text-xl">{formatFullDate(new Date())}</span>
      <div className="flex items-center justify-center px-8 gap-4">
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">{temp}°C</span>
          <span>{description}</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8">
        <div className="flex flex-col items-center">
          <span className="text-gray-500 text-md">Humidity</span>
          <span className="text-lg font-semibold">{humidity}%</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-gray-500 text-md">Winds</span>
          <span className="flex items-center text-lg font-semibold">
            <span>
              <ArrowLeft
                size={18}
                className="transform"
                style={{ rotate: `${deg}deg` }}
              />
            </span>
            {speed}m/s
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-gray-500 text-md">Visibility</span>
          <span className="text-lg font-semibold">{visibility / 1000} km</span>
        </div>
      </div>
    </div>
  );
});
