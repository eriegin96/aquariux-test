import { Outlet } from "react-router";
import { Header } from "./Header";
import { useGeolocation } from "@/hooks";

export function Layout() {
  useGeolocation();

  return (
    <div className="bg-gray-200 flex flex-col items-center min-h-svh">
      <Header />
      <div className="w-sm sm:w-md">
        <Outlet />
      </div>
    </div>
  );
}
