import React from "react";

const Button = ({ width, color, text, height, border, bg, br, ml }) => {
  return (
    <button
      style={{
        width: width,
        color: color,
        borderRadius: border,
        height: height,
        background: bg,
        border: br,
        marginLeft: ml,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
