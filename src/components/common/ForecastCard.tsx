import { T5Day3HourDetail } from "@/features/weather/types";
import { formatHour } from "@/lib/dayjs/format";

const mockupDetail: T5Day3HourDetail = {
  dt: 1661871600,
  main: {
    temp: 296.76,
    feels_like: 296.98,
    temp_min: 296.76,
    temp_max: 297.87,
    pressure: 1015,
    sea_level: 1015,
    grnd_level: 933,
    humidity: 69,
  },
  weather: [
    {
      id: 500,
      main: "Rain",
      description: "light rain",
      icon: "10d",
    },
  ],
  clouds: {
    all: 100,
  },
  wind: {
    speed: 0.62,
    deg: 349,
    gust: 1.18,
  },
  visibility: 10000,
  pop: 0.32,
  rain: {
    "3h": 0.26,
  },
  sys: {
    pod: "d",
  },
  dt_txt: "2022-08-30 15:00:00",
};

/* TODO: group by date */
const mockupList = [mockupDetail, mockupDetail, mockupDetail, mockupDetail];

export function ForecastCard() {
  return (
    <div className="rounded-lg p-4 border border-gray-300 bg-white w-full">
      {mockupList.map((weather) => (
        <div key={weather.dt} className="mb-4">
          <div className="text-gray-500 mb-4">Today</div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-md font-semibold">
              {formatHour(weather.dt * 1000)}
            </span>
            <span className="inline-flex items-center gap-2">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                width={40}
                height={40}
                alt=""
              />
              <span className="text-gray-500 text-sm">
                {weather.main.temp_min} / {weather.main.temp_max} *C
              </span>
            </span>
            <span className="font-semibold">
              {weather.weather[0].description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
