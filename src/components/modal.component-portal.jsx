import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import RadioInput from "./modal-radio.component";
import ButtonComponent from "./button.component";
const inputs = [
  { id: "all", value: "all", label: "All" },
  { id: "fruit", value: "fruit", label: "Fruit" },
  { id: "vegetables", value: "vegetables", label: "Vegetables" },
  { id: "dairy", value: "dairy", label: "Dairy" },
  { id: "grains", value: "grains", label: "Grains" },
  { id: "protein", value: "protein", label: "Protein" },
];

const Modal = ({ openPortal, handleChange, handleOpenModal }) => {
  if (!openPortal) return null;
  return ReactDOM.createPortal(
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-70 flex">
      <div className="m-auto p-6 bg-white flex flex-col rounded-md">
        {inputs.map(({ id, value, label }, idx) => (
          <RadioInput
            id={id}
            value={value}
            label={label}
            handleChange={handleChange}
            key={idx}
          />
        ))}

        <ButtonComponent click={handleOpenModal}>Return</ButtonComponent>
      </div>
    </div>,
    document.getElementById("modal")
  );
};
//tukej in newItem.component ne javla napake za propTypes.. zakaj?
Modal.propTypes = {
  openPortal: PropTypes.func.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Modal;
