const apiKey = process.env.TCG_API_KEY;
export default async function getStaticProps() {
  // Fetch sets data from the API
  const response = await fetch("https://api.pokemontcg.io/v2/sets", {
    headers: {
      "X-Api-Key": apiKey as string,
    },
  });
  const data = await response.json();

  if (!data || !data.data) {
    return {
      notFound: true,
    };
  }

  const rarities: PokemonCardSet[] = data.data;

  return rarities;
}
