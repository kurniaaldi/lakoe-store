import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/order")({
  component: OrderIndexComponent,
});

function OrderIndexComponent() {
  return (
    <div className="p-2">
      <div className="p-2">
        Welcome to the dashboard! You have <strong> total invoices</strong>.
      </div>
    </div>
  );
}
