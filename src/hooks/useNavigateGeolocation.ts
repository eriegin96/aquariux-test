import { ROUTE } from "@/constants/route";
import { useAppStore } from "@/store/appStore";
import { THistoryItem } from "@/types";
import { useNavigate } from "react-router";
import { v6 as uuid } from "uuid";

export const useNavigateGeolocation = () => {
  const navigate = useNavigate();
  const storeHistory = useAppStore((state) => state.storeHistory);
  const setCoordinate = useAppStore((state) => state.setCoordinate);
  const setCity = useAppStore((state) => state.setCity);

  const handleNavigate = (locationInfo: THistoryItem) => {
    storeHistory({ ...locationInfo, id: uuid() });
    setCoordinate({ lat: locationInfo.lat, lon: locationInfo.lon });
    setCity({ cityName: locationInfo.name, countryCode: locationInfo.country });
    navigate(ROUTE.HOME);
  };

  return { handleNavigate };
};
