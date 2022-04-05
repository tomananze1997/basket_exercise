import React from "react";
import ReactDOM from "react-dom";

export const Modal = ({ openPortal, handleChange, handleClickModal }) => {
  if (!openPortal) return null;
  return ReactDOM.createPortal(
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-70 flex">
      <div className="m-auto p-6 bg-white flex flex-col rounded-md">
        <div className="flex items-center">
          <input
            type="radio"
            id="all"
            className="h-2 w-2 "
            name="type"
            value="all"
            onChange={handleChange}
          />
          <label className="ml-2" htmlFor="all">
            All
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="fruit"
            className="h-2 w-2 "
            name="type"
            value="fruit"
            onChange={handleChange}
          />
          <label className="ml-2" htmlFor="fruit">
            Fruit
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="vegetables"
            name="type"
            className="h-2 w-2 "
            value="vegetables"
            onChange={handleChange}
          />
          <label className="ml-2" htmlFor="vegetables">
            Vegetables
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="dairy"
            className="h-2 w-2 "
            name="type"
            value="dairy"
            onChange={handleChange}
          />
          <label className="ml-2" htmlFor="dairy">
            Dairy
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="grains"
            className="h-2 w-2 "
            name="type"
            value="grains"
            onChange={handleChange}
          />
          <label className="ml-2" htmlFor="grains">
            Grains
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="protein"
            className="h-2 w-2 "
            name="type"
            value="protein"
            onChange={handleChange}
          />
          <label className="ml-2" htmlFor="protein">
            Protein
          </label>
        </div>
        <button
          onClick={handleClickModal}
          className="bg-slate-300 p-1 rounded-md mt-5"
        >
          Return
        </button>
      </div>
    </div>,
    document.getElementById("modal")
  );
};
