import { TGeoLocation, THistoryItem } from "@/types";
import { create } from "zustand";

type TSetCity = { cityName: string; countryCode: string };
type TSetCoordinate = { lat: number; lon: number };

type TAppStore = {
  geoLocation: TGeoLocation;
  historyList: THistoryItem[];
  setGeoLocation: (newLocation: TGeoLocation) => void;
  setCity: (city: TSetCity) => void;
  setCoordinate: (coordinate: TSetCoordinate) => void;
  storeHistory: (history: THistoryItem) => void;
  deleteHistory: (id: string) => void;
  getHistoryByName: (id: string) => THistoryItem | undefined;
};

export const useAppStore = create<TAppStore>((set, get) => ({
  geoLocation: {
    loaded: false,
    coordinates: { lat: 0, lng: 0, cityName: "", countryCode: "" },
    error: "",
  },
  historyList: JSON.parse(localStorage.getItem("history") ?? "[]"),
  setGeoLocation: (newLocation) => set({ geoLocation: newLocation }),
  setCoordinate: ({ lat, lon }) =>
    set((state) => ({
      geoLocation: {
        ...state.geoLocation,
        coordinates: {
          ...state.geoLocation.coordinates,
          lat,
          lon,
        },
      },
    })),
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
  storeHistory: (newHistory) =>
    set((state) => {
      const newHistoryList = [...state.historyList, newHistory];
      localStorage.setItem("history", JSON.stringify(newHistoryList));
      return { historyList: newHistoryList };
    }),
  deleteHistory: (id) =>
    set((state) => {
      const newHistoryList = state.historyList.filter((i) => i.id !== id);
      localStorage.setItem("history", JSON.stringify(newHistoryList));
      return {
        historyList: newHistoryList,
      };
    }),
  getHistoryByName: (id) => get().historyList.find((i) => i.id === id),
}));
