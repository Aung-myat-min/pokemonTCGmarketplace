"use client";
import CTAPlace from "@/components/CTAPlace/CTAPlace";
import PokemonCardContainer from "@/components/Pokemon/PokemonCardContainer/PokemonCardContainer";
import SearchBox from "@/components/SearchBox/SearchBox";
import searchFilter from "@/data/searchFilter";
import React, { useState } from "react";

export default function Home() {
  const [searchResult, setSearchResult] = useState<PokemonCardInfo[]>([]);

  const handleSearch = async (searchParams: any) => {
    try {
      const cards = await searchFilter(searchParams);
      setSearchResult(cards);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  return (
    <React.Fragment>
      <SearchBox onSearch={handleSearch} />
      <PokemonCardContainer searchResult={searchResult} />
    </React.Fragment>
  );
}
