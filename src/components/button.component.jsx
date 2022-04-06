import React from "react";
import PropTypes from "prop-types";

const ButtonComponent = ({ children, click, type }) => {
  return (
    <button
      onClick={click}
      type={type}
      className={`text-white font-sans px-2 py-1 bg-gray-700 m-4 rounded active:bg-gray-500 active:scale-95`}
    >
      {children}
    </button>
  );
};

ButtonComponent.propTypes = {
  children: PropTypes.string.isRequired,
  click: PropTypes.func,
  active: PropTypes.bool,
  type: PropTypes.string,
};
ButtonComponent.defaultProps = {
  type: "submit",
  active: null,
  click: null,
};

export default ButtonComponent;
