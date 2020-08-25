import React from "react";

const Logo = ({ logoSrc, logoName }) => {
  return (
    <div className="logo-container">
      <img
        style={{ width: "80%", height: "auto" }}
        src={logoSrc}
        alt={logoName}
      />
    </div>
  );
};
export default Logo;
