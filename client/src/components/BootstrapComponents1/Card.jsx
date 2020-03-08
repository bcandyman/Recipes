import React from "react";

export function Card({ children }) {
  return (
    <div className="Card">
      {children}
    </div>
  );
};

export function CardHeader({ children }) {
  return (
    <div className="card-header">
      {children}
    </div>
  );
};
