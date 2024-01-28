"use client";

import Button from "@/components/common/Button/Button";
import Image from "next/image";

const cardStyle = {
  container: "relative",
  image: "w-[194.36px]",
  imageContainer: "flex justify-center items-center relative z-10",

  cardContentContainer:
    "bg-white rounded-[20px] text-center pt-[74px] px-[40px] pb-[36px] w-full max-w-[294px] mx-auto -top-[58px] relative drop-shadow-poke",
  cardTitleText: "text-[25px] font-bold",
  cardRarityText: "text-[16px] font-normal text-active mb-[6px]",
  cardPriceInfoContainer:
    "flex flex-row gap-x-[20px] justify-center items-center gap-x-[20px]",
  cardPriceInfoText: "text-[20px] font-normal text-info",
  cardActionContainer: "absolute -bottom-[22px] w-full",
};

interface PokemonCardProps {
  image?: string;
  selected?: boolean;
  pokemonName: string;
  price: number;
  rarity: string;
  stockCount: number;
  onSelect: (cardInfo: ModelCardInfo) => void; // Pass the card information to the onSelect function
}

const PokemonCardItem: React.FC<PokemonCardProps> = ({
  image = "/images/max-cure.png",
  onSelect,
  pokemonName,
  price,
  rarity,
  stockCount,
  selected = false,
}) => {
  const cardInfo: ModelCardInfo = {
    image: image,
    pokemonName: pokemonName,
    price: price,
    rarity: rarity,
    stockCount: stockCount,
  };

  return (
    <div className={cardStyle.container}>
      <div className={cardStyle.imageContainer}>
        <Image alt={pokemonName} src={image} width={194.36} height={271.13} />
      </div>

      {/* CardContent: Start */}
      <div className={cardStyle.cardContentContainer}>
        <h3 className={cardStyle.cardTitleText}>{pokemonName}</h3>
        <p className={cardStyle.cardRarityText}>{rarity}</p>

        {/* PriceInfo: Start */}
        <div className={cardStyle.cardPriceInfoContainer}>
          <p className={cardStyle.cardPriceInfoText}>${price}</p>
          <p className={cardStyle.cardPriceInfoText}>{stockCount} left</p>
        </div>
        {/* PriceInfo: End */}

        {/* Action Button */}
        <div className={cardStyle.cardActionContainer}>
          <Button
            onClick={() => onSelect(cardInfo)}
            color={selected ? "black" : "yellow"}
          >
            Select Card
          </Button>
        </div>
      </div>
      {/* CardContent: End */}
    </div>
  );
};

export default PokemonCardItem;
