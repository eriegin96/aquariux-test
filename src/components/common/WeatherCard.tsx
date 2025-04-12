import { ArrowLeft } from "lucide-react";

export function WeatherCard() {
  return (
    <div className="rounded-lg p-4 border border-gray-300 bg-white w-full">
      <span className="text-xl">Januray 24, 2024</span>
      <div className="flex items-center justify-center px-8 gap-4">
        <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" />
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">26oC</span>
          <span>Broken Clouds</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8">
        <div className="flex flex-col items-center">
          <span className="text-gray-500 text-md">Humidity</span>
          <span className="text-lg font-semibold">96%</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-gray-500 text-md">Winds</span>
          <span className="flex items-center text-lg font-semibold">
            <span>
              <ArrowLeft
                size={18}
                className="transform"
                style={{ rotate: `${120}deg` }}
              />
            </span>
            1.54m/s
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-gray-500 text-md">Visibility</span>
          <span className="text-lg font-semibold">8km</span>
        </div>
      </div>
    </div>
  );
}
