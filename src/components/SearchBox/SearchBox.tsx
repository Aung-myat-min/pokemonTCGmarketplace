"use client";

import getTypes from "@/data/getTypes";
import Input from "../common/Input/Input";
import Selector from "../common/Selector/Selector";
import {
  transformOptions,
  transformSetToOptions,
} from "@/utils/poke/transformOptions";
import getSets from "@/data/getSets";
import getRarities from "@/data/getRarities";
import cn from "@/utils/style/cn";
import { useEffect, useState } from "react";
import searchFilter from "@/data/searchFilter";

// Style Configuration
const searchBoxStyle = {
  container:
    "relative w-full md:max-w-[385px] mx-auto flex flex-col gap-y-[20px] md:gap-y-0 md:flex-row md:rounded-full drop-shadow-poke md:bg-white z-40",
  containerSpacing: "mb-[40px]",
  // Input Style
  inputContainer: "h-[35px] flex-1",
};

const selectorStyle = {
  containerWrapper:
    "h-[35px] grid grid-cols-3 md:flex md:flex-row gap-x-[20px] md:gap-x-0",
  button:
    "bg-white md:bg-transparent rounded-full md:rounded-none flex-1 md:border-l drop-shadow-poke overflow-x-hidden",
  container: "w-full md:w-auto h-[35px] flex flex-1",
};

const SearchBox = ({
  onSearch,
}: {
  onSearch: (searchParams: {
    name: string;
    type: string;
    set: string;
    rarity: string;
  }) => void;
}) => {
  const [rarity, setRarity] = useState<string[]>([]);
  const [set, setSet] = useState<PokemonCardSet[] | { notFound: boolean }>([]);
  const [type, setType] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<any>(null);
  const [selectedRarity, setSelectedRarity] = useState<any>(null);
  const [selectedSet, setSelectedSet] = useState<any>(null);
  const [name, setName] = useState<string>(""); // Add state for the name

  useEffect(() => {
    const fetchData = async () => {
      try {
        const raritiesData = await getRarities();
        const setData = await getSets();
        const typeData = await getTypes();

        setRarity(raritiesData);
        setSet(setData as PokemonCardSet[]);
        setType(typeData);
      } catch (error) {
        console.error("Error fetching rarities:", error);
      }
    };

    fetchData();
  }, []);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const cards = await searchFilter({
        name: name,
        type: selectedType?.value || "",
        set: selectedSet?.value || "",
        rarity: selectedRarity?.value || "",
      });
      onSearch({
        name: name,
        type: selectedType?.value || "",
        set: selectedSet?.value || "",
        rarity: selectedRarity?.value || "",
      });
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  return (
    <div
      className={cn(searchBoxStyle.container, searchBoxStyle.containerSpacing)}
    >
      <form
        className={cn(searchBoxStyle.inputContainer)}
        onSubmit={handleFormSubmit}
      >
        <Input
          placeholder="Name.."
          className="rounded-full md:rounded-l-full block w-full"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update name on input change
        />
      </form>

      {/* Start: Selector Group */}
      <div className={cn(selectorStyle.containerWrapper)}>
        <Selector
          placeHolder={{ name: "Type" }}
          options={transformOptions(type)}
          className={selectorStyle.button}
          containerClassName={selectorStyle.container}
          onChange={(selectedType) => setSelectedType(selectedType)}
        />
        <Selector
          placeHolder={{ name: "Rarity" }}
          options={transformOptions(rarity as string[])}
          className={selectorStyle.button}
          containerClassName={selectorStyle.container}
          onChange={(selectedRarity) => setSelectedRarity(selectedRarity)}
        />
        <Selector
          placeHolder={{ name: "Set" }}
          options={transformSetToOptions(set as PokemonCardSet[])}
          className={selectorStyle.button}
          containerClassName={selectorStyle.container}
          onChange={(selectedSet) => setSelectedSet(selectedSet)}
        />
      </div>
      {/* End: Selector Group*/}
    </div>
  );
};

export default SearchBox;
