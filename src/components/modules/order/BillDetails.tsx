import React from "react";

import StampIcon from "@/assets/icons/StampIcon";
import Typography from "@/components/ui/typography";

interface IBillDetails {
  withReturn?: boolean;
  isPaidOff?: boolean;
}

const BillDetails = ({
  withReturn = false,
  isPaidOff = false,
}: IBillDetails) => {
  return (
    <div>
      <div className="bg-neutral-light-light rounded-xl p-4 space-y-2">
        <div className="grid grid-cols-2">
          <Typography
            variant="muted"
            className="font-normal text-neutral-dark-darkest"
          >
            Total Pesanan
          </Typography>
          <Typography
            variant="muted"
            className="text-end font-semibold text-neutral-dark-darkest"
          >
            Rp14.000
          </Typography>
        </div>
        <div className="grid grid-cols-2">
          <Typography
            variant="muted"
            className="font-normal text-neutral-dark-darkest"
          >
            Pajak (5%)
          </Typography>
          <Typography
            variant="muted"
            className="text-end font-semibold text-neutral-dark-darkest"
          >
            Rp550
          </Typography>
        </div>
        <div className="w-full h-px border-b-2 border-dashed" />
        <div className="grid grid-cols-2">
          <Typography
            variant="p"
            className="font-bold text-neutral-dark-darkest"
          >
            Total Tagihan
          </Typography>
          <Typography
            variant="lead"
            className="text-end font-black text-neutral-dark-darkest"
          >
            Rp14.550
          </Typography>
        </div>
      </div>
      <div className="h-px border-b-2 border-dashed mx-4" />
      <div className="bg-neutral-light-light rounded-xl p-4 space-y-2 relative">
        {isPaidOff && (
          <div className="absolute right-16 -top-5">
            <StampIcon />
          </div>
        )}
        <div className="grid grid-cols-2">
          <Typography
            variant="muted"
            className="font-normal text-neutral-dark-darkest"
          >
            Yang harus dibayar
          </Typography>
          <Typography
            variant="muted"
            className="text-end font-semibold text-neutral-dark-darkest"
          >
            Rp14.550
          </Typography>
        </div>
        {withReturn && (
          <>
            <div className="grid grid-cols-2">
              <Typography
                variant="muted"
                className="font-normal text-neutral-dark-darkest"
              >
                Cash (Tunai)
              </Typography>
              <Typography
                variant="muted"
                className="text-end font-semibold text-neutral-dark-darkest"
              >
                Rp20.000
              </Typography>
            </div>
            <div className="h-px border-b-2 border-dashed" />
            <div className="grid grid-cols-2">
              <Typography
                variant="p"
                className="font-bold text-neutral-dark-darkest"
              >
                Kembalian
              </Typography>
              <Typography
                variant="lead"
                className="text-end font-black text-neutral-dark-darkest"
              >
                Rp5.450
              </Typography>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BillDetails;
