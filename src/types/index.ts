export interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  price_before_vat: number;
  vat: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  name?: string;
  imageUrl?: string;
}

export interface SkipCardProps {
  skip: Skip;
  onSelect: (id: number) => void;
  isSelected: boolean;
}

export interface FilterState {
  size: number | null;
  allowedOnRoad: boolean;
  heavyWaste: boolean;
}

export const filterSkips = (skips: Skip[], filters: FilterState): Skip[] => {
  return skips.filter((skip) => {
    const matchesSize = filters.size === null || skip.size >= filters.size;
    const matchesAllowedOnRoad = !filters.allowedOnRoad || skip.allowed_on_road;
    const matchesHeavyWaste = !filters.heavyWaste || skip.allows_heavy_waste;
    return matchesSize && matchesAllowedOnRoad && matchesHeavyWaste;
  });
};

export interface FilterBarProps {
  filterState: FilterState;
  onFilterChange: (filterState: FilterState) => void;
  onClearSelection: () => void;
}

export interface ProgressStep {
  name: string;
  icon: React.ComponentType<any>;
  completed?: boolean;
  active?: boolean;
}

export interface SelectionBarProps {
  selectedSkip: Skip;
  totalPrice: string;
  onContinue: () => void;
}