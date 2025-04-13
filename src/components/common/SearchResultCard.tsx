import { SquareArrowOutUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { TSearchItem } from "@/features/weather/types";
import { useNavigateGeolocation } from "@/hooks";

type TSearchResultCardProps = {
  isLoading: boolean;
  data?: TSearchItem[];
};

export function SearchResultCard({ data, isLoading }: TSearchResultCardProps) {
  const { handleNavigate } = useNavigateGeolocation();

  return (
    <div className="rounded-lg p-4 border border-gray-300 bg-white w-full">
      {!isLoading &&
        data?.length !== 0 &&
        data?.map(({ id, name, country, lat, lon }) => (
          <Button
            key={id}
            variant="ghost"
            size="lg"
            className="w-full flex justify-between items-center gap-4 my-1"
            onClick={() => handleNavigate({ id, name, country, lat, lon })}
          >
            <div>
              {name}, {country}
            </div>

            <SquareArrowOutUpRight className="size-5" />
          </Button>
        ))}
      {!isLoading && (!data || data?.length === 0) && <>No search result</>}
      {isLoading && (
        <>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
              <Skeleton className="w-full h-10 my-1" />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
