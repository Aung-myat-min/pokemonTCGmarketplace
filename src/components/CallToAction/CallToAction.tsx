"use client";

import React from "react";
import { useState, useEffect } from "react";
import CartIcon from "@/components/Icon/CartIcon";
import cn from "@/utils/style/cn";

interface CallToActionProps {
  show: () => void;
  totalSelectedCards: number; // New prop to receive the total selected cards count
}

const CallToAction = (props: CallToActionProps) => {
  const CTAStyle = {
    buttonStyle:
      "flex w-[108px] h-[41px] justify-center items-center shadow-[0px_3px_10px_0px_rgba(0,0,0,0.15)] text-[white] text-xs text-xs relative rounded-[10px] border-0 bg-[#298bfd]",
    svgStyle: "w-[21px] h-[21px] pr-[9px]",
    indicatorStyle:
      "w-4 h-4 absolute left-[-7px] top-[-4px] rounded-full bg-red-500",
  };

  // Use state to manage the totalSelectedCards
  const [totalSelectedCards, setTotalSelectedCards] = useState<number>(0);

  // Update totalSelectedCards when the prop changes
  useEffect(() => {
    setTotalSelectedCards(props.totalSelectedCards);
  }, [props.totalSelectedCards]);

  return (
    <button onClick={props.show} className={CTAStyle.buttonStyle}>
      <p className={CTAStyle.indicatorStyle}>{totalSelectedCards}</p>
      <CartIcon
        className={cn(CTAStyle.svgStyle, "w-[21px] h-[21px] text-white ")}
      />
      View Cart
    </button>
  );
};

export default CallToAction;
