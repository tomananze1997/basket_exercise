import React from "react";

export const ButtonComponent = ({ children, click, active }) => {
  return (
    <button
      onClick={click}
      className={`text-white font-sans px-2 py-1 bg-gray-700 m-4 rounded ${
        active ? "bg-slate-400" : null
      }`}
    >
      {children}
    </button>
  );
};
