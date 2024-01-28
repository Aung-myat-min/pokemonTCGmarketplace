import React, { useState } from "react";
import CallToAction from "../CallToAction/CallToAction";
import PokemonModalBox from "../Pokemon/PokemonModalBox/PokemonModalBox";
import PaymentSuccess from "../Pokemon/PokemonModalBox/PaymentSuccess";

interface CTAPlaceProps {
  selectedCards: ModelCardInfo[];
  removeItemByName: (pokemonName: string) => void;
  removeAllItems: () => void;
}

const CTAPlace: React.FC<CTAPlaceProps> = ({
  selectedCards,
  removeItemByName,
  removeAllItems,
}) => {
  const [showModelBox, setshowModelBox] = useState<boolean>(false);
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);

  const handleClick = () => setshowModelBox((value) => !value);
  const handlePaymentSuccess = () => {
    setPaymentSuccess((value) => {
      if (value) {
        setshowModelBox(false);
      }
      return !value;
    });
  };

  return (
    <div className="fixed bottom-[45px] left-[50%] -translate-x-1/2 cursor-pointer hover:opacity-90 z-10">
      {!showModelBox ? (
        <CallToAction
          show={handleClick}
          totalSelectedCards={selectedCards.length}
        />
      ) : !paymentSuccess ? (
        <PokemonModalBox
          isOpen={showModelBox}
          onClose={handleClick}
          paymentProcess={handlePaymentSuccess}
          selectedCards={selectedCards}
          removeItemByName={removeItemByName}
          removeAllItems={removeAllItems}
        />
      ) : (
        <PaymentSuccess
          isOpen={paymentSuccess}
          onClose={handlePaymentSuccess}
        />
      )}
    </div>
  );
};

export default CTAPlace;
