const BASE_API_URL = import.meta.env.VITE_BLIZZARD_BASE_API_URL;
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
const TOKEN_URL = import.meta.env.VITE_TOKEN_URL;

async function getAccessToken() {
  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch access token");
  }

  const data = await response.json();
  return data.access_token;
}

export async function getCards(tier = "", type = "") {
  const token = await getAccessToken();
  const headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${token}`);

  const params = new URLSearchParams({
    locale: "en_US",
    gameMode: "battlegrounds",
  });

  if (tier) params.append("tier", tier);

  if (type && type !== "All") params.append("minionType", type.toLowerCase());

  const response = await fetch(
    `${BASE_API_URL}?${params.toString()}&sort=tier:asc`,
    {
      method: "GET",
      headers,
    }
  );

  if (!response.ok) {
    const { error } = await response.json();
    throw new Error(error.message || "An error occurred while fetching cards.");
  }

  return await response.json();
}
