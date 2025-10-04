import React from "react";

const GridBackground = ({ children }) => {
  return (
    <div className="grid-background-container">
      <div className="grid-background-content">{children}</div>
    </div>
  );
};

export default GridBackground;
