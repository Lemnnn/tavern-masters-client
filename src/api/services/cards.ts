const BASE_API_URL = import.meta.env.VITE_APP_BASE_URL;

export async function getCommonCards(tier = "", type = "") {
  const params = new URLSearchParams();

  if (tier) params.append("tier", tier);
  if (type && type !== "All") params.append("type", type);

  const response = await fetch(
    `${BASE_API_URL}/blizzard/cards/common?${params.toString()}`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  if (!response.ok) {
    const { error } = await response.json();
    throw new Error(error?.message || "Failed to fetch common cards.");
  }

  return response.json();
}

export async function getHeroCards() {
  const response = await fetch(`${BASE_API_URL}/blizzard/cards/hero`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    const { error } = await response.json();
    throw new Error(error?.message || "Failed to fetch hero cards.");
  }

  return response.json();
}

export async function getSpellCards(tier = "") {
  const params = new URLSearchParams();
  if (tier) params.append("tier", tier);

  const response = await fetch(
    `${BASE_API_URL}/blizzard/cards/spell?${params.toString()}`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  if (!response.ok) {
    const { error } = await response.json();
    throw new Error(error?.message || "Failed to fetch spell cards.");
  }

  return response.json();
}
