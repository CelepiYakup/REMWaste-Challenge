import type { Skip } from "../types";

const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchSkips = async (): Promise<Skip[]> => {
  try {
    const response = await fetch(`${BASE_URL}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Skip[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching skips:", error);
    throw new Error("Failed to fetch skip options");
  }
};
