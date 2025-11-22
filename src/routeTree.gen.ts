/* eslint-disable @typescript-eslint/no-explicit-any */
import { createFileRoute } from "@tanstack/react-router";

import { Route as rootRoute } from "./routes/__root";
import { Route as orderDetailRoute } from "./routes/order/order.$invoice";
import { Route as orderRoute } from "./routes/order/order.index";

const IndexLazyImport = createFileRoute("/")();

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/index.lazy").then((d) => d.Route));

const OrderRoute = orderRoute.update({
  id: "/order",
  path: "/order",
  getParentRoute: () => rootRoute,
} as any);

const OrderDetailRoute = orderDetailRoute.update({
  id: "/order/$invoiceId",
  path: "$invoiceId",
  getParentRoute: () => orderRoute,
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
    "/order/$invoiceId": {
      id: "/order/$invoiceId";
      path: "/order/$invoiceId";
      fullPath: "/order/$invoiceId";
      preLoaderRoute: typeof OrderDetailRoute;
      parentRoute: typeof orderRoute;
    };
  }
}

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  OrderRoute,
  OrderDetailRoute,
});
