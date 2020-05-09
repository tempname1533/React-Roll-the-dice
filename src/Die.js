import React from "react";
import "./Die.css";

const Die = ({ face, rolling }) => {
  return (
    <div>
      <i className={`Die fas fa-dice-${face}  ${rolling && "shaking"}`}></i>
    </div>
  );
};

export default Die;
