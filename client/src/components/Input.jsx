import React from "react";

function Input({ className, placeholder, type, handleOnKeyUp }) {
  return (
    <input type={type} className={className} placeholder={placeholder} onKeyUp={handleOnKeyUp} />
  );
};

export default Input;
