import { RouterProvider } from "react-router";
import { router } from "./configs";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./configs/tanStackQuery";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
