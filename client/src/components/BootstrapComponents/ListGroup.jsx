import React from "react";

export function Ul({ children, className }) {
  return (
    <ul className={'list-group ' + className}>
      {children}
    </ul>
  );
};

export function Li({ children, className }) {
  return (
    <li className={'list-group-item ' + className}>
      {children}
    </li>
  );
};
