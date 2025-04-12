import { ROUTE } from "@/constants/route";
import { MapPin, Search } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="w-full bg-white flex justify-center">
      <header className="w-md md:w-2xl flex justify-between py-4">
        <Link to={ROUTE.HOME} className="flex gap-2">
          <MapPin />
          <span>Singapore, SG</span>
        </Link>
        <Link to={ROUTE.SEARCH}>
          <Search />
        </Link>
      </header>
    </div>
  );
}
