import { T5Day3HourResponse } from "@/features/weather/types";
import { transform5Day3HourListToData } from "@/features/weather/utils";
import { formatHour } from "@/lib/dayjs/format";
import dayjs from "dayjs";
import { memo } from "react";
import isToday from "dayjs/plugin/isToday";
import { Skeleton } from "../ui/skeleton";

dayjs.extend(isToday);

type TForecastCardProps = {
  isLoading: boolean;
  data?: T5Day3HourResponse;
};

export const ForecastCard = memo(function ForecastCard({
  data,
  isLoading,
}: TForecastCardProps) {
  if (isLoading) return;
  <>
    {Array.from({ length: 5 }).map((_, index) => (
      <Skeleton key={index} className="w-full h-52 my-4" />
    ))}
  </>;
  if (!data)
    return (
      <div className="rounded-lg py-6 px-4 border border-gray-300 bg-white w-full">
        No data
      </div>
    );

  const transformData = transform5Day3HourListToData(data.list);

  return (
    <div className="rounded-lg py-6 px-4 border border-gray-300 bg-white w-full">
      {Object.entries(transformData)
        .slice(0, 5)
        .map(([group, list]) => (
          <div key={group} className="mb-8 last:mb-0">
            <div className="text-gray-500 mb-4">
              {dayjs(list[0].dt * 1000).isToday() ? "Today" : group}
            </div>

            {list.map(({ dt, weather, main }) => (
              <div key={dt} className="flex items-center justify-between gap-4">
                <span className="text-md font-semibold w-12">
                  {formatHour(dt * 1000)}
                </span>
                <span className="inline-flex items-center gap-2 flex-1">
                  <img
                    src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                    width={48}
                    height={48}
                    alt=""
                  />
                  <span className="text-gray-500 text-sm">
                    {main.temp_min} / {main.temp_max}°C
                  </span>
                </span>
                <span className="font-semibold">{weather[0].description}</span>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
});
