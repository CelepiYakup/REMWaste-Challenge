import React from 'react';
import { Sparkles } from 'lucide-react';
import "../PageHeader/pageHeader.css";

const PageHeader: React.FC = () => {
  return (
    <div className="page-header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-title-section">
            <Sparkles className="sparkles-icon" />
            <h1 className="page-title">Choose Your Skip Size</h1>
          </div>
          <p className="page-subtitle">
            Select the skip size that best suits your needs
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;