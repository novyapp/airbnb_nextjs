"use client";

import React from "react";

interface MenuItem {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItem> = ({ onClick, label }) => {
  return (
    <div
      className=" px-4 py-3 font-semibold transition hover:bg-neutral-100"
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default MenuItem;
