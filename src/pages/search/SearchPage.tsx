import { HistoryCard, SearchResultCard } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const isLoading = false;

export default function SearchPage() {
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <div className="w-full flex justify-between gap-4">
        <Input
          placeholder="Search country or city here..."
          size={20}
          className="bg-white"
        />
        <Button disabled={isLoading}>Search</Button>
      </div>

      <div className="text-2xl text-left font-semibold w-full py-4">
        Search Result
      </div>
      <SearchResultCard isLoading={isLoading} />

      <div className="text-2xl text-left font-semibold w-full py-4">
        Search History
      </div>
      <HistoryCard />
    </div>
  );
}
