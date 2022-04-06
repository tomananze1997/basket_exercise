import React, { useState } from "react";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from "uuid";
import { addItem } from "../redux/items/item.actions";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import ButtonComponent from "./button.component";

const NewItem = ({ openPortal, handleOpenModal }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(null);
  const [type, setType] = useState("fruit");

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, type, id: uuidv4() };
    dispatch(addItem(item));
    handleOpenModal();
  };

  if (!openPortal) return null;
  return ReactDOM.createPortal(
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-70 flex">
      <div className="m-auto p-6 bg-white flex flex-col rounded-md">
        <form action="" onSubmit={handleSubmit} className="flex ">
          <div>
            <div className="flex items-center ">
              <label htmlFor="item" className="mr-2">
                Name The Item:
              </label>
              <input
                type="text"
                id="item"
                className="border border-slate-400 rounded-md focus:border-black focus:outline-none px-2 py-1 w-52 "
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex items-center mt-2">
              <label htmlFor="type" className="mr-2">
                Select Type:
              </label>
              <select
                id="type"
                className="border border-slate-400 rounded-md focus:border-black focus:outline-none px-1 py-1  w-52 ml-auto"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="fruit">Fruit</option>
                <option value="vegetables">Vegetable</option>
                <option value="dairy">Dairy</option>
                <option value="grains">Grains</option>
                <option value="protein">Protein</option>
              </select>
            </div>
          </div>
          <div className="m-auto pl-6">
            <ButtonComponent>Submit</ButtonComponent>
            <ButtonComponent type="button" click={handleOpenModal}>
              Cencel
            </ButtonComponent>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("modalNewItem")
  );
};

NewItem.propTypes = {
  openPortal: PropTypes.bool.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};

export default NewItem;
