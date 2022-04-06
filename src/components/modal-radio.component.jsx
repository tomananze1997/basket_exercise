import React from "react";

export const RadioInput = ({ label, id, value, handleChange }) => {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        id={id}
        className="h-2 w-2 "
        name="type"
        value={value}
        onChange={handleChange}
      />
      <label className="ml-2" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
