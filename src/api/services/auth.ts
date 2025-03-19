import { TLogin, TRegister } from "../../schemas/auth";
import { TUser } from "../../schemas/user";

const BASE_API_URL = "http://localhost:8080/api/v1";

export async function register(credentials: TRegister) {
  const headers = new Headers();

  headers.append("Content-Type", "application/json");

  const response = await fetch(`${BASE_API_URL}/auth/register`, {
    method: "POST",
    headers,
    body: JSON.stringify(credentials),
    credentials: "include",
  });

  if (!response.ok) {
    const { error } = await response.json();

    if (error.message) {
      throw new Error(error.message);
    }

    throw new Error(
      "An error occurred while registering. Please try again later."
    );
  }

  const result = await response.json();

  return result;
}

export async function login(credentials: TLogin) {
  const headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  const response = await fetch(`${BASE_API_URL}/auth/login`, {
    method: "POST",
    headers,
    body: JSON.stringify(credentials),
    credentials: "include",
  });

  if (!response.ok) {
    const { error } = await response.json();

    if (error.message) {
      throw new Error(error.message);
    }

    throw new Error(
      "An error occurred while logging in. Please try again later."
    );
  }

  const result = await response.json();

  return result.success;
}

export async function getMe(): Promise<TUser> {
  const headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  const response = await fetch(`${BASE_API_URL}/auth/me`, {
    method: "GET",
    headers,
    credentials: "include",
  });

  if (!response.ok) {
    const { error } = await response.json();

    if (error.message) {
      throw new Error(error.message);
    }

    throw new Error(
      "An error occurred while fetching user information. Please try again later."
    );
  }

  const result = await response.json();

  return result.data.user;
}

export async function logout() {
  const headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  const response = await fetch(`${BASE_API_URL}/auth/logout`, {
    method: "POST",
    headers,
    credentials: "include",
  });

  if (!response.ok) {
    const { error } = await response.json();

    if (error.message) {
      throw new Error(error.message);
    }

    throw new Error(
      "An error occurred while logging out. Please try again later."
    );
  }

  return response.ok;
}
