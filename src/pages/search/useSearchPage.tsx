import { useGetCoordinateByLocation } from "@/features/weather/api";
import { TSearchItem } from "@/features/weather/types";
import { useRef } from "react";
import { v6 as uuid } from "uuid";

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

  const searchList = searchResult?.map((item) => ({
    ...item,
    id: uuid(),
  })) as TSearchItem[];

  return { inputRef, handleSearch, searchResult: searchList, isPending };
};
