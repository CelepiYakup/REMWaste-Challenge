import type { Skip } from "../types";

export const fetchSkips = async (): Promise<Skip[]> => {
  try {
    const response = await fetch("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft");

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
