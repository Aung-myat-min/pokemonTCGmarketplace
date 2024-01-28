"use client";

import CloseIcon from "@/components/Icon/CloseIcon";
import Button from "@/components/common/Button/Button";
import cn from "@/utils/style/cn";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import PokemonModalBoxItem from "./PokemonModalBoxItem";
import WhiteShadowUp from "@/components/common/WhiteShadow/WhiteShadowUp";

const modalStyle = {
  overlayContainer: "fixed inset-0 z-[100] overflow-y-auto bg-white/60",
  containerWrapper: "min-h-screen flex justify-center items-center",
  contentContainer:
    "max-w-[416px] h-screen fixed bottom-[62px] max-h-[613px] w-full bg-white drop-shadow-poke rounded-[20px] pt-[34px] pb-[40px] px-[40px]",

  // Actions
  closeButton:
    "bg-red-500 drop-shadow-poke w-[35px] h-[35px] bg-alert flex justify-center items-center rounded-[10px] absolute -bottom-[22.5px] left-[50%] -translate-x-1/2 cursor-pointer hover:opacity-90",
};

interface PokemonModalBoxProps {
  isOpen: boolean;
  onClose: () => void;
  paymentProcess: () => void;
  selectedCards: ModelCardInfo[];
  removeItemByName: (pokemonName: string) => void;
  removeAllItems: () => void;
}

/// ... (import statements)

const PokemonModalBox: React.FC<PokemonModalBoxProps> = (props) => {
  const [totalCard, setTotalCard] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateTotalCard = (newTotalCard: number) => {
    setTotalCard((prev) => prev + newTotalCard);
  };

  const updateTotalPrice = (newTotalPrice: number) => {
    console.log("newTotalPrice", newTotalPrice);
    setTotalPrice((prev) => prev + newTotalPrice);
    console.log(totalPrice);
  };

  const clear = () => {
    props.removeAllItems();
    props.onClose();
  };

  return (
    <Dialog
      as="div"
      className={cn(modalStyle.overlayContainer)}
      open={props.isOpen}
      onClose={props.onClose}
    >
      <div className={cn(modalStyle.containerWrapper)}>
        <Dialog.Panel className={cn(modalStyle.contentContainer)}>
          {/* CardItemList: Start */}
          {!(props.selectedCards.length > 0) ? (
            <div className="text-center text-blue-500 text-2xl font-bold mt-[65%]">
              No Cards Selected
            </div>
          ) : (
            <>
              <div className="relative">
                <div className="max-h-[370px] h-full overflow-y-auto grid grid-cols-1 gap-y-[28px] relative pb-[8px] pt-[8px] no-scrollbar">
                  {/* Map over selectedCards and render PokemonModalBoxItem for each */}
                  {props.selectedCards.map((card, index) => (
                    <PokemonModalBoxItem
                      key={index}
                      pokemonName={card.pokemonName}
                      image={card.image}
                      price={card.price}
                      stockCount={card.stockCount}
                      removeItemByName={() =>
                        props.removeItemByName(card.pokemonName)
                      }
                      updateTotalCard={updateTotalCard}
                      updateTotalPrice={updateTotalPrice}
                    />
                  ))}
                </div>
                <WhiteShadowUp className="absolute -top-[2px] h-[32px] rotate-180" />
                <WhiteShadowUp className="absolute bottom-[0] h-[32px]" />
              </div>

              <div className="pt-[4px] mb-[24px] flex justify-center items-center">
                <p
                  className="font-[12px] text-info underline cursor-pointer"
                  onClick={clear}
                >
                  Clear all
                </p>
              </div>

              {/* CardItemList: End */}

              {/* CardPriceInfo: Start */}
              <div className="text-center max-w-[210px] mx-auto">
                <div className="flex flex-row justify-between">
                  <p className="text-[16px]">Total Cards</p>
                  <p className="text-[16px] text-alert ">{totalCard}</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="text-[20px] font-bold">Total Price</p>
                  <p className="text-[20px] text-alert font-bold ">
                    ${totalPrice.toFixed(2)}
                  </p>
                </div>
              </div>
              {/* CardPriceInfo: End */}

              {/* Action Button: Start */}
              <Button
                color="blue"
                className="mx-auto mt-[25px]"
                style={{ background: "#298bfd" }}
                onClick={props.paymentProcess}
              >
                Pay now
              </Button>
              {/* Action Button: End */}
            </>
          )}

          {/* Close Button: Start */}
          <button
            type="button"
            onClick={props.onClose}
            style={{ backgroundColor: "red" }}
            className={cn(modalStyle.closeButton)}
          >
            <CloseIcon className="text-white w-[14px] h-[14px]" />
          </button>

          {/* Close Button: End */}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default PokemonModalBox;
