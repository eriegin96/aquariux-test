import { Loader } from "@/components/common";
import { Layout } from "@/components/common/Layout";
import { ROUTE } from "@/constants/route";
import { lazy, Suspense } from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import { Toaster } from "sonner";

// Lazy load pages
const HomePage = lazy(() => import("../pages/home/HomePage"));
const SearchPage = lazy(() => import("../pages/search/SearchPage"));
const ErrorPage = lazy(() => import("../pages/error/ErrorPage"));

export const router = createBrowserRouter([
  {
    path: ROUTE.HOME,
    element: (
      <Suspense
        fallback={
          <div className="w-screen h-screen flex items-center justify-center">
            <Loader />
          </div>
        }
      >
        <Layout />
        <Toaster />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTE.SEARCH,
        element: <SearchPage />,
      },
      {
        path: "*",
        loader: () => redirect(ROUTE.HOME),
      },
    ],
  },
]);
