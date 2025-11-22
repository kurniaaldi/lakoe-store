import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import Button from "@/components/ui/button";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import Typography from "@/components/ui/typography";

import BillDetails from "./components/BillDetails";
import CardMenu from "./components/CardMenu";
import DrawerCashier from "./components/DrawerCashier";
import TableInfo from "./components/TableInfo";

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
  const invoice = Route.useLoaderData();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  console.log(invoice);

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
      <div className="fixed w-full justify-center items-center flex bottom-0 left-0 p-4 bg-neutral-light-lighest border-y">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-full"
          size={"xl"}
          variant={"outline"}
        >
          Bagikan Struk (Bill)
        </Button>
      </div>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent className="px-5">
          <DrawerCashier onClose={() => setIsOpen(false)} />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
