import { SquareArrowOutUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

const mockupList = ["Sydney, AU", "Tokyo, JP", "Seoul, KR", "Vancouver, CA"];

type TSearchResultCardProps = {
  isLoading: boolean;
};

export function SearchResultCard({ isLoading }: TSearchResultCardProps) {
  return (
    <div className="rounded-lg p-4 border border-gray-300 bg-white w-full">
      {!isLoading &&
        mockupList.length !== 0 &&
        mockupList.map((city) => (
          <div
            key={city}
            className="flex justify-between items-center gap-4 py-1"
          >
            <div>{city}</div>
            <div className="flex gap-1">
              <Button variant="ghost">
                <SquareArrowOutUpRight />
              </Button>
            </div>
          </div>
        ))}

      {!isLoading && mockupList.length === 0 && <div>No search result</div>}
      {isLoading && (
        <>
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index}>
              <Skeleton className="w-full h-10 my-1" />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
