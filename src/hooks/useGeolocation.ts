import { useGetLocationByCoordinate } from "@/features/weather/api";
import { useAppStore } from "@/store/appStore";
import { useEffect } from "react";
import { toast } from "sonner";

export const useGeolocation = () => {
  const geoLocation = useAppStore((state) => state.geoLocation);
  const setGeoLocation = useAppStore((state) => state.setGeoLocation);
  const setCity = useAppStore((state) => state.setCity);

  const { data } = useGetLocationByCoordinate(
    geoLocation.loaded && !geoLocation.error,
    {
      lat: geoLocation.coordinates.lat,
      lon: geoLocation.coordinates.lng,
    }
  );

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
    console.error(error);
    setGeoLocation({
      ...geoLocation,
      loaded: true,
      error: error.message,
    });
    toast("Please enable geolocation, we need it to provide weather data");
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

  useEffect(() => {
    if (data)
      setCity({
        cityName: data?.[0]?.name,
        countryCode: data?.[0]?.country,
      });
  }, [data, setCity]);

  return geoLocation;
};

export default useGeolocation;
