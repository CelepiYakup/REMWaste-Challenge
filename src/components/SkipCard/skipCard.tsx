import React from "react";
import { Check, AlertTriangle, Calendar } from "lucide-react";
import type { SkipCardProps } from "../../types";
import ContainerImage from "../ContainerImage/containerImage";
import "../SkipCard/skipCard.css";

const SkipCard: React.FC<SkipCardProps> = ({ skip, onSelect, isSelected }) => {
  const totalPrice = (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(0);
  const isDisabled = !skip.allowed_on_road && !skip.allows_heavy_waste;

  const handleClick = () => {
    if (!isDisabled) {
      onSelect(skip.id);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`skip-card ${isSelected ? "selected" : ""} ${
        isDisabled ? "disabled" : ""
      }`}
    >
      {isSelected && !isDisabled && <div className="glow-effect"></div>}

      <div
        className={`card-content ${isSelected ? "selected" : ""} ${
          isDisabled ? "disabled" : ""
        }`}
      >
        <div className="card-header">
          <div className="background-pattern">
            <div className="gradient-overlay"></div>
          </div>
          <div className="skip-illustration">
            <div className={`skip-container ${isSelected ? "selected" : ""}`}>
              <ContainerImage
                size={skip.size}
                className={isSelected ? "selected" : ""}
              />
            </div>
          </div>
          <div className="size-badge">
            <span>{skip.size} Yards</span>
          </div>
          {isSelected && !isDisabled && (
            <div className="selected-indicator">
              <div className="check-container">
                <Check className="check-icon" />
              </div>
            </div>
          )}
          {!skip.allowed_on_road && (
            <div className="road-restriction">
              <AlertTriangle className="alert-icon" />
              Not Allowed On Road
            </div>
          )}
          {!skip.allows_heavy_waste && (
            <div className="road-restriction heavy-waste-restriction">
              <AlertTriangle className="alert-icon" />
              No Heavy Waste
            </div>
          )}
        </div>

        <div className="card-body">
          <div className="card-info">
            <h3 className="skip-name">{skip.size} Yard Skip</h3>
            <div className="hire-period">
              <Calendar className="calendar-icon" />
              <span>{skip.hire_period_days} day hire period</span>
            </div>
          </div>

          <div className="price-section">
            <div className="price">£{totalPrice}</div>
          </div>

          <button
            className={`action-button ${isSelected ? "selected" : ""} ${
              isDisabled ? "disabled" : ""
            }`}
            disabled={isDisabled}
          >
            {isDisabled ? (
              <div className="button-content">
                <AlertTriangle className="button-check" />
                Not Available
              </div>
            ) : isSelected ? (
              <div className="button-content">
                <Check className="button-check" />
                Selected
              </div>
            ) : (
              "Select This Skip →"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkipCard;
