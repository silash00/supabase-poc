import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { routeTree } from "./routeTree";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function Router() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
