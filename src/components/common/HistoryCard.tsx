import { Search, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { useAppStore } from "@/store/appStore";
import { useNavigateGeolocation } from "@/hooks";

export function HistoryCard() {
  const historyList = useAppStore((state) => state.historyList);
  const deleteHistory = useAppStore((state) => state.deleteHistory);
  const { handleNavigate } = useNavigateGeolocation();

  return (
    <div className="rounded-lg p-4 border border-gray-300 bg-white w-full">
      {historyList.length !== 0 &&
        historyList.map(({ id, name, country, lat, lon }) => (
          <div
            key={id}
            className="flex justify-between items-center gap-4 py-1"
          >
            <div>
              {name}, {country}, ({lat}, {lon})
            </div>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                onClick={() => handleNavigate({ id, name, country, lat, lon })}
              >
                <Search />
              </Button>
              <Button variant="ghost" onClick={() => deleteHistory(id)}>
                <Trash />
              </Button>
            </div>
          </div>
        ))}

      {historyList.length === 0 && <>No history</>}
    </div>
  );
}
