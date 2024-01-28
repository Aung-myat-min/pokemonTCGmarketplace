type PokemonCardSet = {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: {
    unlimited: string;
  };
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: {
    symbol: string;
    logo: string;
  };
};
type PokemonCardInfo = {
  image?: string;
  selected?: boolean;
  pokemonName: string;
  price: number;
  rarity: string;
  stockCount: number;
};
type ModelCardInfo = {
  image?: string;
  pokemonName: string;
  price: number;
  rarity: string;
  stockCount: number;
};
