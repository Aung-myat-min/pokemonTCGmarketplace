const apiKey = process.env.TCG_API_KEY;

interface SearchCriteria {
  name?: string;
  type?: string;
  set?: string;
  rarity?: string;
}

export default async function searchFilter(SearchCriteria: SearchCriteria) {
  const { name, type, set, rarity } = SearchCriteria;
  const queryParams = new URLSearchParams({
    q: `name:${name ? name : ""} types:${type ? type : "*"} set.id:"${
      set ? set : "*"
    }" rarity:"${rarity ? rarity : "*"}"`,
  });

  try {
    const apiUrl = `https://api.pokemontcg.io/v2/cards?${queryParams.toString()}`;
    console.log(apiUrl);

    const response = await fetch(apiUrl, {
      headers: {
        "X-Api-Key": apiKey as string,
      },
    });

    const data = await response.json();

    if (!data || !data.data) {
      throw new Error("Error fetching cards");
    }

    const cards = data.data;
    console.log(cards);

    return cards;
  } catch (error) {
    console.error("Error fetching cards:", error);
    throw error;
  }
}
