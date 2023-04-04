import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const Button = ({ variant, type, fullWidth, to, children }) => {
  const style = {
    width: fullWidth ? "100%" : "",
  };

  return (
    <>
      {to ? (
        <Link className={`btn ${variant}`} to={to}>
          {children}
        </Link>
      ) : (
        <button type={type} style={style} className={`btn ${variant}`}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
