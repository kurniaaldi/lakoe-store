import React from "react";

import Button from "@/components/ui/button";
import Typography from "@/components/ui/typography";

interface IDrawerCashier {
  onClose: () => void;
}

const DrawerCashier = ({ onClose }: IDrawerCashier) => {
  return (
    <div className="flex flex-col w-full gap-4 py-4">
      <Typography
        variant="lead"
        className="text-neutral-dark-darkest font-black"
      >
        Bayar di kasir ya…
      </Typography>
      <Typography
        variant="muted"
        className="font-normal text-neutral-dark-medium"
      >
        Saat ini kamu hanya bisa melakukan pembayaran di kasir. Silahkan pergi
        ke kasir dan tunjukan nomor order kamu.
      </Typography>
      <Button
        onClick={() => onClose()}
        className="w-full"
        size={"xl"}
        variant={"outline"}
      >
        Oke! Siap
      </Button>
    </div>
  );
};

export default DrawerCashier;
