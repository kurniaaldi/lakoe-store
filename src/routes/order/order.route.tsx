import { createFileRoute } from "@tanstack/react-router";

import Button from "@/components/ui/button";
import Typography from "@/components/ui/typography";

import BillDetails from "./components/BillDetails";
import CardMenu from "./components/CardMenu";
import TableInfo from "./components/TableInfo";

export const Route = createFileRoute("/order")({
  component: OrderIndexComponent,
});

function OrderIndexComponent() {
  return (
    <div className="flex h-100vh min-w-full w-full p-4 relative pt-28">
      <TableInfo />
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between w-full">
          <Typography variant="lead">Pesanan</Typography>
          <Button variant="link">Tambah Pesanan</Button>
        </div>
        <div className="space-y-2">
          <CardMenu />
          <CardMenu />
        </div>
        <div className="flex items-center justify-between w-full">
          <Typography variant="lead">Ringkasan tagihan</Typography>
        </div>
        <BillDetails />
      </div>
      <div className="fixed w-full justify-center items-center gap-4 flex bottom-0 left-0 p-4 bg-neutral-light-lighest border-y">
        <Button className="w-[45%]" size={"xl"} variant={"outline"}>
          Bayar Nanti
        </Button>
        <Button className="w-[45%]" size={"xl"}>
          Bayar Sekarang
        </Button>
      </div>
    </div>
  );
}
