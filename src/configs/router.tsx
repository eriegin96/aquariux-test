import { Loader } from "@/components";
import { homeLoader } from "@/pages/home/homeLoader";
import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

// Lazy load pages
const Home = lazy(() => import("../pages/home/HomePage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div className="w-screen h-screen flex items-center justify-center">
            <Loader />
          </div>
        }
      >
        {<Outlet />}
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Home />,
        // loader: homeLoader,
      },
    ],
  },
]);
