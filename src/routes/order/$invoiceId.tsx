import { createFileRoute } from "@tanstack/react-router";

import TableInfo from "@/components/modules/detail-order/TableInfo";
import BillDetails from "@/components/modules/order/BillDetails";
import CardMenu from "@/components/modules/order/CardMenu";
import Button from "@/components/ui/button";
import Typography from "@/components/ui/typography";

export const Route = createFileRoute("/order/$invoiceId")({
  params: {
    parse: (params) => ({
      invoiceId: params.invoiceId,
    }),
    stringify: ({ invoiceId }) => ({ invoiceId: `${invoiceId}` }),
  },
  component: OrderDetailIndexComponent,
});

function OrderDetailIndexComponent() {
  const params = Route.useParams();

  return (
    <div className="flex h-100vh min-w-full w-full p-4 relative">
      <div className="flex flex-col gap-4 w-full">
        <TableInfo orderId={params?.invoiceId} status="waiting" />
        <div className="flex items-center justify-between w-full">
          <Typography variant="lead">Pesanan</Typography>
        </div>
        <div className="space-y-2">
          <CardMenu showCounter={false} />
          <CardMenu showCounter={false} />
        </div>
        <div className="flex items-center justify-between w-full">
          <Typography variant="lead">Ringkasan tagihan</Typography>
        </div>
        <BillDetails withReturn isPaidOff />
      </div>
      <div className="fixed w-full justify-center items-center flex bottom-0 left-0 p-4 bg-neutral-light-lighest border-y">
        <Button className="w-full" size={"xl"} variant={"outline"}>
          Bagikan Struk (Bill)
        </Button>
      </div>
    </div>
  );
}
