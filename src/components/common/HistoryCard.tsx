import { Search, Trash } from "lucide-react";
import { Button } from "../ui/button";

const mockupList = ["Sydney, AU", "Tokyo, JP", "Seoul, KR", "Vancouver, CA"];

export function HistoryCard() {
  return (
    <div className="rounded-lg p-4 border border-gray-300 bg-white w-full">
      {mockupList.map((city) => (
        <div
          key={city}
          className="flex justify-between items-center gap-4 py-1"
        >
          <div>{city}</div>
          <div className="flex gap-1">
            <Button variant="ghost">
              <Search />
            </Button>
            <Button variant="ghost">
              <Trash />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
