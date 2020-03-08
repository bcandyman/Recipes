import React from "react";

function Button({ children, className, handleOnClick, name, value }) {
  return (
    <button type="button" className={'btn ' + className} name={name} value={value} onClick={handleOnClick}>{children}</button>
  );
}

export default Button;
