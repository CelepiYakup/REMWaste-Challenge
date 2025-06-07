import React from "react";

import greenContainer from "/images/green-container.svg";
import redContainer from "/images/red-container.svg";
import yellowContainer from "/images/yellow-container.svg";
import "../ContainerImage/ContainerImage.css";

interface ContainerImageProps {
  size: number;
  width?: number;
  height?: number;
  className?: string;
}

const ContainerImage: React.FC<ContainerImageProps> = ({
  size,
  width,
  height,
  className = "",
}) => {
  const getContainerInfo = (skipSize: number) => {
    if (skipSize >= 4 && skipSize <= 12) {
      return {
        image: greenContainer,
        color: "green",
        type: "small",
        defaultWidth: 300,
        defaultHeight: 300,
      };
    } else if (skipSize >= 14 && skipSize <= 20) {
      return {
        image: yellowContainer,
        color: "yellow",
        type: "medium",
        defaultWidth: 300,
        defaultHeight: 300,
      };
    } else if (skipSize >= 20 && skipSize <= 40) {
      return {
        image: redContainer,
        color: "red",
        type: "large",
        defaultWidth: 300,
        defaultHeight: 300,
      };
    }

    return {
      image: greenContainer,
      color: "green",
      type: "small",
      defaultWidth: 200,
      defaultHeight: 60,
    };
  };

  const containerInfo = getContainerInfo(size);
  const finalWidth = width || containerInfo.defaultWidth;
  const finalHeight = height || containerInfo.defaultHeight;

  return (
    <div className={`container-image-wrapper ${className}`}>
      <img
        src={containerInfo.image}
        alt={`${containerInfo.color} container`}
        className={`container-image waste-container-${containerInfo.type}`}
        width={finalWidth}
        height={finalHeight}
      />
      <div className="container-overlay-text"></div>
    </div>
  );
};

export default ContainerImage;
