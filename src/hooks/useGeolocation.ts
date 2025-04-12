import { useAppStore } from "@/store/appStore";
import { useEffect } from "react";

export const useGeolocation = () => {
  const geoLocation = useAppStore((state) => state.geoLocation);
  const setGeoLocation = useAppStore((state) => state.setGeoLocation);

  const onSuccess = (position: GeolocationPosition) => {
    setGeoLocation({
      loaded: true,
      coordinates: {
        ...geoLocation.coordinates,
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      },
      error: "",
    });
  };

  const onError = (error: GeolocationPositionError) => {
    console.error("error");
    setGeoLocation({
      ...geoLocation,
      loaded: true,
      error: error.message,
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setGeoLocation({
        ...geoLocation,
        loaded: true,
        error: "Geolocation is not supported",
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return geoLocation;
};

export default useGeolocation;
