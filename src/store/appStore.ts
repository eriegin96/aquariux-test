import { TGeoLocation } from "@/types";
import { create } from "zustand";

type TAppStore = {
  geoLocation: TGeoLocation;
  setGeoLocation: (newLocation: TGeoLocation) => void;
};

export const useAppStore = create<TAppStore>((set) => ({
  geoLocation: {
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
    error: "",
  },
  setGeoLocation: (newLocation) => set({ geoLocation: newLocation }),
}));
