import React from "react";
import "./App.css";

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      <a>VIEW ALL TRENDING</a>
      {children}
    </button>
  );
};

export default Button;
