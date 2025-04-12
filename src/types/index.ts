export type TGeoLocation = {
  loaded: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
  error: string;
};
