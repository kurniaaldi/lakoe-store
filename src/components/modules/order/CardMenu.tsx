import React from "react";

import Button from "@/components/ui/button";
import Counter from "@/components/ui/counter";
import Typography from "@/components/ui/typography";

interface ICardMenu {
  showCounter?: boolean;
}

const CardMenu = ({ showCounter = true }: ICardMenu) => {
  return (
    <div className="flex justify-between border-b pb-2">
      <div className="flex gap-4">
        <img
          src="/images/beverage.png"
          alt="beverage.png"
          className="h-11 w-11 rounded-xl"
        />
        <div className="flex flex-col">
          <Typography variant="small">Minuman</Typography>
          <Typography variant="small" className="text-neutral-dark-light">
            Minuman
          </Typography>
          <Typography variant="caption" className="text-neutral-dark-light">
            "Gulanya sedikit aja"
          </Typography>
          {showCounter && (
            <Button
              variant="link"
              size="icon-sm"
              className="p-0 justify-start text-sm!"
            >
              Ubah
            </Button>
          )}
        </div>
      </div>
      {showCounter && (
        <div className="w-28">
          <Counter />
        </div>
      )}
    </div>
  );
};

export default CardMenu;
