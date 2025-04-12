export const API_ROUTE = {
  CURRENT: "/data/2.5/weather",
  "5DAY_3HOUR": "/data/2.5/forecast?",
  ICON: (icon: string) => `/img/wn/${icon}@2x.png`,
  LOCATION: (location: string) =>
    `/geo/1.0/direct?q=${location}&limit=1&appid=${
      import.meta.env.VITE_OPEN_WEATHER_API_KEY
    }`,
};

export const API_KEY = {
  CURRENT: "current",
  "5DAY_3HOUR": "5 day 3 hour",
};
