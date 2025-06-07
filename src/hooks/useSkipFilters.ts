import { useState } from "react";
import type { Skip, FilterState } from "../types";

export const useSkipFilters = (skips: Skip[]) => {
  const [filterState, setFilterState] = useState<FilterState>({
    size: null,
    allowedOnRoad: false,
    heavyWaste: false,
  });

  const filteredSkips = skips.filter((skip) => {
    if (filterState.size !== null && skip.size < filterState.size) {
      return false;
    }
    if (filterState.allowedOnRoad && !skip.allowed_on_road) {
      return false;
    }
    if (filterState.heavyWaste && !skip.allows_heavy_waste) {
      return false;
    }
    return true;
  });

  return {
    filterState,
    setFilterState,
    filteredSkips,
  };
};
