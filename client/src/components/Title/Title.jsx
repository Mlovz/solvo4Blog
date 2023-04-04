import React from "react";
import "./title.css";

export const TitleSize = {
  XS: "size_xs",
  S: "size_s",
  M: "size_m",
  L: "size_l",
  XL: "size_xl",
};

export const TitleAlign = {
  CENTER: "center",
  RIGHT: "right",
};

const Title = ({
  size = "S",
  component = "h1",
  align = "left",
  className,
  children,
}) => {
  return (
    <>
      {component === "h1" && (
        <h1 className={`title ${size} ${align} ${className}`}>{children}</h1>
      )}

      {component === "span" && (
        <span className={`title ${size} ${align} ${className}`}>
          {children}
        </span>
      )}

      {component === "p" && (
        <p className={`title ${size} ${align} ${className}`}>{children}</p>
      )}

      {component === "h2" && (
        <h2 className={`title ${size} ${align} ${className}`}>{children}</h2>
      )}
    </>
  );
};

export default Title;
