import React, { useCallback } from "react";
import type { FilterBarProps } from "../../types";
import "./filterBar.css";


const FilterBar: React.FC<FilterBarProps & { sizes: number[] }> = ({
  filterState,
  onFilterChange,
  onClearSelection,
  sizes,
}) => {
  const handleSizeChange = useCallback(
    (value: string) => {
      const newSize = value === "" ? null : Number(value);
      onFilterChange({ ...filterState, size: newSize });
      onClearSelection();
    },
    [filterState, onFilterChange, onClearSelection]
  );

  const handleCheckboxChange = useCallback(
    (key: "allowedOnRoad" | "heavyWaste", checked: boolean) => {
      onFilterChange({ ...filterState, [key]: checked });
      onClearSelection();
    },
    [filterState, onFilterChange, onClearSelection]
  );

  const handleResetFilters = useCallback(() => {
    onFilterChange({
      size: null,
      allowedOnRoad: false,
      heavyWaste: false,
    });
    onClearSelection();
  }, [onFilterChange, onClearSelection]);

  return (
    <div className="filter-bar">
      <div className="filter-item">
        <label htmlFor="size-filter">Size ≥</label>
        <select
          id="size-filter"
          value={filterState.size || ""}
          onChange={(e) => handleSizeChange(e.target.value)}
        >
          <option value="">All</option>
          {sizes.map((s) => (
            <option key={s} value={s}>
              {s} Yards
            </option>
          ))}
        </select>
      </div>

      <div className="checkbox-row">
        <div className="checkbox-container">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={filterState.allowedOnRoad}
              onChange={(e) => handleCheckboxChange("allowedOnRoad", e.target.checked)}
              className="checkbox-input"
            />
            <span className="checkbox-custom"></span>
            <span className="checkbox-text">Allowed on Road</span>
          </label>
        </div>

        <div className="checkbox-container">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={filterState.heavyWaste}
              onChange={(e) => handleCheckboxChange("heavyWaste", e.target.checked)}
              className="checkbox-input"
            />
            <span className="checkbox-custom"></span>
            <span className="checkbox-text">Allows Heavy Waste</span>
          </label>
        </div>
      </div>

      <button onClick={handleResetFilters} className="reset-button">
        Clear All
      </button>
    </div>
  );
};

export default FilterBar;