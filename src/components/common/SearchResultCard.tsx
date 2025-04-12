import { SquareArrowOutUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { TCoordinateResponse } from "@/features/weather/types";

type TSearchResultCardProps = {
  isLoading: boolean;
  data?: TCoordinateResponse[];
};

export function SearchResultCard({ data, isLoading }: TSearchResultCardProps) {
  return (
    <div className="rounded-lg p-4 border border-gray-300 bg-white w-full">
      {!isLoading &&
        data?.length !== 0 &&
        data?.map(({ name, country }) => (
          <div
            key={name}
            className="flex justify-between items-center gap-4 py-1"
          >
            <div>
              {name}, {country}
            </div>
            <div className="flex gap-1">
              <Button variant="ghost">
                <SquareArrowOutUpRight />
              </Button>
            </div>
          </div>
        ))}

      {!isLoading && (!data || data.length === 0) && <>No search result</>}
      {isLoading && (
        <>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
              <Skeleton className="w-full h-10 my-2" />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
