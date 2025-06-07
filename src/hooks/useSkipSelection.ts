import { useState } from "react";
import type { Skip } from "../types";

export const useSkipSelection = (skips: Skip[]) => {
  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);

  const handleSelect = (id: number): void => {
    setSelectedSkipId(id === selectedSkipId ? null : id);
  };

  const clearSelection = (): void => {
    setSelectedSkipId(null);
  };

  const selectedSkip = skips.find((skip) => skip.id === selectedSkipId);

  const totalPrice = selectedSkip
    ? (selectedSkip.price_before_vat * (1 + selectedSkip.vat / 100)).toFixed(0)
    : "0";

  return {
    selectedSkipId,
    selectedSkip,
    totalPrice,
    handleSelect,
    clearSelection,
  };
};
