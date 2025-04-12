import { TGeoLocation } from "@/types";
import { create } from "zustand";

type TSetCity = { cityName: string; countryCode: string };

type TAppStore = {
  geoLocation: TGeoLocation;
  setGeoLocation: (newLocation: TGeoLocation) => void;
  setCity: (city: TSetCity) => void;
};

export const useAppStore = create<TAppStore>((set) => ({
  geoLocation: {
    loaded: false,
    coordinates: { lat: 0, lng: 0, cityName: "", countryCode: "" },
    error: "",
  },
  setGeoLocation: (newLocation) => set({ geoLocation: newLocation }),
  setCity: ({ cityName, countryCode }) =>
    set((state) => ({
      geoLocation: {
        ...state.geoLocation,
        coordinates: {
          ...state.geoLocation.coordinates,
          cityName,
          countryCode,
        },
      },
    })),
}));
