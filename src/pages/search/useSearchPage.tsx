import { useGetCoordinateByLocation } from "@/features/weather/api";
import { useRef } from "react";

export const useSearchPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    mutate,
    data: searchResult,
    isPending,
  } = useGetCoordinateByLocation();

  const handleSearch = () => {
    if (!inputRef.current) return;
    mutate(inputRef.current.value);
  };

  return { inputRef, handleSearch, searchResult, isPending };
};
