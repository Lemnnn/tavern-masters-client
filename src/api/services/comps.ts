import { TCreateComp } from "@/schemas/comps";

const BASE_API_URL = import.meta.env.VITE_APP_BASE_URL;

export async function createComp(compData: TCreateComp) {
  const response = await fetch(`${BASE_API_URL}/comps/create`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(compData),
  });

  if (!response.ok) {
    const { error } = await response.json();
    throw new Error(error?.message || "Failed to create comp.");
  }

  return response.json();
}

export async function getMyComps() {
  const response = await fetch(`${BASE_API_URL}/comps/my-comps`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const { error } = await response.json();
    throw new Error(error?.message || "Failed to get your comps.");
  }

  return response.json();
}

export async function getCompById(id: string) {
  const response = await fetch(`${BASE_API_URL}/comps/${id}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const { error } = await response.json();
    throw new Error(error?.message || "Failed to get comp.");
  }

  return response.json();
}
