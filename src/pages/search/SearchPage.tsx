import { HistoryCard, SearchResultCard } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearchPage } from "./useSearchPage";

export default function SearchPage() {
  const { inputRef, handleSearch, searchResult, isPending } = useSearchPage();

  return (
    <div className="flex flex-col items-center justify-center py-4">
      <div className="w-full flex justify-between gap-4">
        <Input
          ref={inputRef}
          placeholder="Search country or city here..."
          size={20}
          className="bg-white"
        />
        <Button disabled={isPending} onClick={handleSearch}>
          Search
        </Button>
      </div>
      <div className="text-red-500 self-start mt-1">
        {searchResult?.length === 0 && "Invalid country or city"}
      </div>

      <div className="text-2xl text-left font-semibold w-full py-4">
        Search Result
      </div>
      <SearchResultCard data={searchResult} isLoading={isPending} />

      <div className="text-2xl text-left font-semibold w-full py-4">
        Search History
      </div>
      <HistoryCard />
    </div>
  );
}
