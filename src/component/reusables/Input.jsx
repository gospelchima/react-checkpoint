import React from "react";

const Input = ({ value, onChange, type, name, placeholder }) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
