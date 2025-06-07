import React from "react";
import {
  Check,
  AlertTriangle,
  Calendar,
  ArrowRight,
  MapPin,
  Trash2,
} from "lucide-react";
import type { ProgressStep } from "../../types";
import "../ProgressStep/ProgresStep.css";

const ProgressSteps: React.FC = () => {
  const steps: ProgressStep[] = [
    { name: "Postcode", icon: MapPin, completed: true },
    { name: "Waste Type", icon: Trash2, completed: true },
    { name: "Select Skip", icon: Check, active: true },
    { name: "Permit Check", icon: AlertTriangle },
    { name: "Choose Date", icon: Calendar },
    { name: "Payment", icon: ArrowRight },
  ];

  return (
    <div className="progress-steps">
      <div className="progress-container">
        <div className="steps-wrapper">
          {steps.map((step, index) => (
            <div key={step.name} className="step-item">
              <div
                className={`step-content ${
                  step.completed
                    ? "completed"
                    : step.active
                    ? "active"
                    : "inactive"
                }`}
              >
                <div
                  className={`step-icon ${
                    step.completed
                      ? "completed"
                      : step.active
                      ? "active"
                      : "inactive"
                  }`}
                >
                  <step.icon className="icon" />
                </div>
                <span className="step-name">{step.name}</span>
              </div>
              {index < steps.length - 1 && <div className="step-divider"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;
