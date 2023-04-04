import React from "react";
import "./input.css";

const Input = ({ name, onChange, placeholder, value, type = "text" }) => {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value || ""}
      onChange={onChange}
    />
  );
};

export default Input;
