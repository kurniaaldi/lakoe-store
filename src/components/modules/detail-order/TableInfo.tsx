import React from "react";

import TableIcon from "@/assets/icons/TableIcon";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge, type BadgeVariant } from "@/components/ui/badge";
import Typography from "@/components/ui/typography";

interface ITableInfo {
  orderId?: string;
  status: "waiting" | "onProses" | "success";
}

const TableInfo = ({ orderId, status }: ITableInfo) => {
  const statusType: Record<ITableInfo["status"], BadgeVariant> = {
    waiting: "solid",
    onProses: "warning",
    success: "success",
  };

  const variantBadge = statusType[status] || "solid";

  return (
    <div className="w-full top-0 left-0 space-y-2">
      <Typography
        variant="lead"
        className="font-black text-neutral-dark-darkest"
      >
        Order #{orderId}
      </Typography>
      <div className="flex items-center justify-between bg-neutral-light-light gap-4 p-3 border border-neutral-light-medium rounded-md">
        <Badge className="rounded" variant={variantBadge}>
          Dalam Antrian
        </Badge>
        <Typography variant="muted" className="text-neutral-dark-light">
          28 Agu 2014 - 20:18
        </Typography>
      </div>
      <div className="flex items-center gap-4 p-2 border border-neutral-light-medium rounded-md">
        <Avatar className="w-8 h-8">
          <AvatarFallback className="bg-highlight-lighest">
            <TableIcon />
          </AvatarFallback>
        </Avatar>
        <div className="flex items-center justify-between w-full">
          <Typography variant="muted" className="text-neutral-dark-light">
            No. Meja
          </Typography>
          <Typography>T-01 (Luar)</Typography>
        </div>
      </div>
    </div>
  );
};

export default TableInfo;
