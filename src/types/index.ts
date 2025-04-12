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
