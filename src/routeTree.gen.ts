/* eslint-disable @typescript-eslint/no-explicit-any */
import { createFileRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./routes/__root";
import { Route as orderRoute } from "./routes/order/order.route";

const IndexLazyImport = createFileRoute("/")();

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/index.lazy").then((d) => d.Route));

const OrderRoute = orderRoute.update({
  path: "/order/",
  getParentRoute: () => rootRoute,
} as any);

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      preLoaderRoute: typeof IndexLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/order": {
      id: "/order";
      path: "/order";
      preLoaderRoute: typeof OrderRoute;
      parentRoute: typeof rootRoute;
    };
  }
}

export const routeTree = rootRoute.addChildren({ IndexLazyRoute, OrderRoute });
