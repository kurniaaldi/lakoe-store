import React from "react";

import TableIcon from "@/assets/icons/TableIcon";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Typography from "@/components/ui/typography";

const TableInfo = () => {
  return (
    <div className="fixed w-full top-0 left-0 p-4">
      <div className="flex items-center bg-[#F8F9FE] gap-4 p-4 border-[#EBEDF6] rounded-md">
        <Avatar className="w-10 h-10">
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
