const apiKey = process.env.TCG_API_KEY;
export default async function getStaticProps(page: number) {
  try {
    const pageSize = 12;
    const apiUrl = `https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=${pageSize}`;

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
    return cards;
  } catch (error) {
    console.error("Error fetching cards:", error);
    throw error;
  }
}
