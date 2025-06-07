import React from "react";
import "../Loading/loading.css";

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
        <h2 className="loading-title">Loading Skip Options</h2>
        <p className="loading-subtitle">Finding the perfect skip for you...</p>
      </div>
    </div>
  );
};

export default Loading;
