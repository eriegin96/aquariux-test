export const API_ROUTE = {
  CURRENT: (lat: number, lon: number, units = "metric") =>
    `/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${
      import.meta.env.VITE_OPEN_WEATHER_API_KEY
    }`,
  "5DAY_3HOUR": (lat: number, lon: number, cnt: number, units = "metric") =>
    `/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=${cnt}&units=${units}&appid=${
      import.meta.env.VITE_OPEN_WEATHER_API_KEY
    }`,
  ICON: (icon: string) => `/img/wn/${icon}@2x.png`,
  LOCATION: (location: string) =>
    `/geo/1.0/direct?q=${location}&limit=1&appid=${
      import.meta.env.VITE_OPEN_WEATHER_API_KEY
    }`,
};
