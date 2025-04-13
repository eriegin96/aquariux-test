export type TGeoLocation = {
  loaded: boolean;
  coordinates: {
    lat: number;
    lng: number;
    cityName: string;
    countryCode: string;
  };
  error: string;
};

export type THistoryItem = {
  id: string;
  name: string;
  country: string;
  lat: number;
  lon: number;
};
