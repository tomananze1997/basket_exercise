import React from "react";
import PropTypes from "prop-types";

const RadioInput = ({ label, id, value, handleChange }) => {
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

RadioInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RadioInput;
