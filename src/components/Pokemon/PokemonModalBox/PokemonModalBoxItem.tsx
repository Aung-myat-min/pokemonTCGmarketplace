"use client";

import CloseIcon from "@/components/Icon/CloseIcon";
import DropDownIcon from "@/components/Icon/DropDownIcon";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface PokemonModalBoxItemProps {
  image?: string;
  pokemonName: string;
  price: number;
  stockCount: number;
  updateTotalCard: (newTotalCard: number) => void;
  updateTotalPrice: (newTotalPrice: number) => void;
  removeItemByName: (pokemonName: string) => void;
}

const PokemonModalBoxItem: React.FC<PokemonModalBoxItemProps> = ({
  image = "/images/max-cure.png",
  pokemonName,
  price,
  stockCount,
  updateTotalCard,
  updateTotalPrice,
  removeItemByName,
}) => {
  const [quantity, setQuantity] = useState<number>(0);
  const [stock, setStock] = useState<number>(stockCount);

  const increaseQuantity = () => {
    if (quantity < stockCount) {
      setQuantity((prev) => prev + 1);
      setStock((prev) => prev - 1);
      memoizedUpdateTotalCard(1);
      memoizedUpdateTotalPrice(price);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      setStock((prev) => prev + 1);
      memoizedUpdateTotalCard(-1);
      memoizedUpdateTotalPrice(-price);
    } else {
      removeItemByName(pokemonName);
    }
  };

  const memoizedUpdateTotalCard = useCallback(updateTotalCard, [
    updateTotalCard,
  ]);
  const memoizedUpdateTotalPrice = useCallback(updateTotalPrice, [
    updateTotalPrice,
  ]);

  useEffect(() => {
    // Update total card and total price when quantity changes
  }, [quantity, price, memoizedUpdateTotalCard, memoizedUpdateTotalPrice]);

  return (
    <div className="flex flex-row gap-x-[16px]">
      {/* LeftSideImage: Start */}
      <Image alt={pokemonName} src={image} width={77} height={106} />
      {/* LeftSideImage: End */}

      {/* RightSideContent: Start */}
      <div className="flex-1 py-[14px]">
        <div className="flex flex-row justify-between items-center">
          {/* Text: Start */}
          <div className="flex-1">
            <h2 className="text-[20px]">{pokemonName}</h2>
            <p className="text-[12px]">
              <span>${price.toFixed(2)}</span>
              <span className="inline-block pl-[4px] text-placeholder">
                per card
              </span>
            </p>
          </div>
          {/* Text: End */}
          {/* Counter: Start */}
          <div className="flex gap-x-[4px] justify-center items-center relative">
            <span className="text-active text-[20px] font-semibold">
              {quantity}
            </span>
            <div className="flex flex-col gap-y-[2px] relative h-[30px] -top-[6px]">
              <button
                type="button"
                onClick={increaseQuantity}
                className="px-[2px] cursor-pointer h-[12px] flex justify-center items-center outline-none"
              >
                <DropDownIcon className="text-active inline-block w-[8px] rotate-180 cursor-pointer" />
              </button>

              <button
                type="button"
                onClick={decreaseQuantity}
                className="px-[2px] cursor-pointer h-[12px] flex justify-center items-center outline-none"
              >
                {!(quantity <= 1) ? (
                  <DropDownIcon className="text-active inline-block w-[8px] cursor-pointer" />
                ) : (
                  <CloseIcon className="text-red-500" />
                )}
              </button>
            </div>
          </div>
          {/* Counter: End */}
        </div>

        <div className="flex flex-row justify-end items-center">
          <span className="text-[12px]">price</span>
        </div>

        <div className="flex flex-row justify-between items-center">
          <p className="text-[14px] font-normal">
            <span className="text-alert">{stock}</span>{" "}
            <span className="text-placeholder">cards left</span>
          </p>
          <p className="text-[16px] text-active font-bold">
            ${(price * quantity).toFixed(2)}
          </p>
        </div>
      </div>

      {/* RightSideContent: End */}
    </div>
  );
};

export default PokemonModalBoxItem;
