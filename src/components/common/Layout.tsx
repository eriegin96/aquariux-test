import { Outlet } from "react-router";
import { Header } from "./Header";

export function Layout() {
  return (
    <div className="bg-gray-200 flex flex-col items-center min-h-svh">
      <Header />
      <div className="max-w-3xl w-md md:w-2xl">
        <Outlet />
      </div>
    </div>
  );
}
