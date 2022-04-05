import React from "react";
import ReactDOM from "react-dom";

export const NewItem = ({ openNewItem }) => {
  if (!openNewItem) return null;
  return ReactDOM.createPortal(
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-70 flex">
      <div className="m-auto p-6 bg-white flex flex-col rounded-md"></div>
    </div>,
    document.getElementById("modalNewItem")
  );
};
