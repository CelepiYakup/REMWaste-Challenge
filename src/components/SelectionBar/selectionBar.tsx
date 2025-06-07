import React from "react";
import { Truck, ArrowRight } from "lucide-react";
import type { SelectionBarProps } from "../../types";
import "../SelectionBar/selectionBar.css";

const SelectionBar: React.FC<SelectionBarProps> = ({
  selectedSkip,
  totalPrice,
  onContinue,
}) => {
  return (
    <div className="selection-bar animated-selection-bar">
      <div className="icon-segment">
        <Truck className="truck-icon-bar" />
      </div>

      <div className="info-segment">
        <div className="info-title">{selectedSkip.size} Yard Skip</div>
        <div className="info-subtitle">
          {selectedSkip.hire_period_days} day hire
        </div>
      </div>

      <div className="price-segment">£{totalPrice}</div>

      <button className="arrow-segment" onClick={onContinue}>
        <ArrowRight className="arrow-icon-bar" />
      </button>
    </div>
  );
};

export default SelectionBar;
