import { createFileRoute, useRouter } from "@tanstack/react-router";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Button from "@/components/ui/button";
import Typography from "@/components/ui/typography";

import CardMenu from "./components/CardMenu";

export const Route = createFileRoute("/order")({
  component: OrderIndexComponent,
});

function OrderIndexComponent() {
  const router = useRouter();

  return (
    <div className="flex h-100vh min-w-full w-full p-4 relative pt-28">
      <div className="fixed w-full top-0 left-0 p-4">
        <div className="flex items-center bg-[#F8F9FE] gap-4 p-4 border-[#EBEDF6] rounded-md">
          <Avatar className="w-10 h-10">
            <AvatarFallback className="bg-highlight-lighest">CN</AvatarFallback>
          </Avatar>
          <div className="flex items-center justify-between w-full">
            <Typography variant="muted" className="text-neutral-dark-light">
              No. Meja
            </Typography>
            <Typography>T-01 (Luar)</Typography>
          </div>
        </div>
      </div>
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
      </div>
      <div className="fixed w-full bottom-0 left-0 p-4 bg-neutral-light-lighest border-y">
        <Button
          onClick={() => router.navigate({ to: "/order" })}
          size={"xl"}
          className="w-full flex justify-between"
        >
          <Typography variant="small" className="font-semibold">
            Rp10.000
          </Typography>
          <Typography variant="small" className="font-semibold">
            Proses Pesanan (2)
          </Typography>
        </Button>
      </div>
    </div>
  );
}
