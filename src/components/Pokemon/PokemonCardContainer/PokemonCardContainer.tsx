import { useEffect, useRef, useState } from "react";
import MagnifyingIcon from "@/components/Icon/MagnifyingIcon";
import getTCGCards from "@/data/getTCGCards";
import React from "react";
import CTAPlace from "@/components/CTAPlace/CTAPlace";
import PokemonCardItem from "../PokemonCardItem/PokemonCardItem";

interface PokemonCardContainerProps {
  searchResult: PokemonCardInfo[];
}

const PokemonCardContainer: React.FC<PokemonCardContainerProps> = ({
  searchResult = [],
}) => {
  const [tcgCards, setTcgCards] = useState<PokemonCardInfo[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState<ModelCardInfo[]>([]);
  const isFirstRender = useRef(true);
  const fetchData = async () => {
    try {
      console.log("API call started");
      setLoading(true);
      const CardData = await getTCGCards(pageNumber);
      setPageNumber((value) => value + 1);
      setTcgCards((prevCards) => prevCards.concat(CardData));
      console.log("API call successful");
    } catch (error) {
      console.error("Error fetching TCG Cards:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      console.log("Component mounted");
      fetchData();
    }
  }, [isFirstRender]);

  const handleShowMore = () => {
    fetchData();
  };

  const handleCardSelect = (cardInfo: ModelCardInfo) => {
    setSelectedCard((prevSelectedCards) => {
      const isSelected = prevSelectedCards.some(
        (selectedCard) => selectedCard.pokemonName === cardInfo.pokemonName
      );

      if (isSelected) {
        // Deselect the card
        return prevSelectedCards.filter(
          (card) => card.pokemonName !== cardInfo.pokemonName
        );
      } else {
        // Select the card
        return [...prevSelectedCards, cardInfo];
      }
    });
  };

  const removeItemByName = (pokemonName: string) => {
    setSelectedCard((prevSelectedCards: any[]) =>
      prevSelectedCards.filter((card) => card.pokemonName !== pokemonName)
    );
    // Implement the logic to remove the item by name
    console.log(`Removing item by name: ${pokemonName}`);
  };

  const removeAllItems = () => {
    setSelectedCard([]);
    // Implement the logic to remove all items
    console.log("Removing all items");
  };

  return (
    <React.Fragment>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-x-[80px] gap-y-[22px] md:gap-y-[42px]">
        {searchResult.length > 0
          ? searchResult.map((card: any, i: number) => {
              const cardInfo: ModelCardInfo = {
                image: card.images?.large,
                pokemonName: card.name,
                price: card.cardmarket?.prices?.averageSellPrice ?? 0,
                rarity: card.rarity ?? "Unknown",
                stockCount: card.set?.total ?? 0,
              };

              const isSelected = selectedCard.some(
                (selectedCard) =>
                  selectedCard.pokemonName === cardInfo.pokemonName
              );

              return (
                <PokemonCardItem
                  key={i}
                  image={cardInfo.image}
                  selected={isSelected}
                  pokemonName={cardInfo.pokemonName}
                  price={cardInfo.price}
                  rarity={cardInfo.rarity}
                  stockCount={cardInfo.stockCount}
                  onSelect={() => handleCardSelect(cardInfo)}
                />
              );
            })
          : tcgCards.map((card: any, i: number) => {
              const cardInfo: ModelCardInfo = {
                image: card.images?.large,
                pokemonName: card.name,
                price: card.cardmarket?.prices?.averageSellPrice ?? 0,
                rarity: card.rarity ?? "Unknown",
                stockCount: card.set?.total ?? 0,
              };

              const isSelected = selectedCard.some(
                (selectedCard) =>
                  selectedCard.pokemonName === cardInfo.pokemonName
              );

              return (
                <PokemonCardItem
                  key={i}
                  image={cardInfo.image}
                  selected={isSelected}
                  pokemonName={cardInfo.pokemonName}
                  price={cardInfo.price}
                  rarity={cardInfo.rarity}
                  stockCount={cardInfo.stockCount}
                  onSelect={() => handleCardSelect(cardInfo)}
                />
              );
            })}
      </section>{" "}
      {loading && (
        <p className="text-4xl font-bold text-center my-4">Loading...</p>
      )}
      <CTAPlace
        selectedCards={selectedCard}
        removeItemByName={removeItemByName}
        removeAllItems={removeAllItems}
      />
      <button
        className="flex w-[113px] h-6 justify-center items-center gap-[9px] shrink-0 m-auto mb-[80px]"
        onClick={handleShowMore}
      >
        <MagnifyingIcon className="w-[14px] h-[14px]" />
        Show More
      </button>
    </React.Fragment>
  );
};

export default PokemonCardContainer;
