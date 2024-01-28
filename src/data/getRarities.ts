const apiKey = process.env.TCG_API_KEY;
export default async function getStaticProps() {
  // Fetch rarities data from the API
  const response = await fetch("https://api.pokemontcg.io/v2/rarities", {
    headers: {
      "X-Api-Key": apiKey as string,
    },
  });
  const data = await response.json();

  if (!data || !data.data) {
    return ["not-found"];
  }

  const rarities: string[] = data.data;

  return rarities;
}
