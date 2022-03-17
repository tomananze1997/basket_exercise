import React from "react";
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";

const SingleItemComponent = ({ item, first, add, overline, quantity }) => {
  return (
    <div
      className={`${
        first ? "bg-itemCustomOne" : "bg-itemCustomTwo"
      } w-full flex items-center cursor-pointer my-1 py-2 group`}
    >
      {add ? (
        <FaPlusSquare
          className="mx-3 text-white group-hover:scale-110 group-hover:text-green-500"
          style={{ fontWeight: "500" }}
        />
      ) : (
        <FaMinusSquare className="mx-3 text-white group-hover:scale-110 group-hover:text-red-500" />
      )}

      <span className="mr-1">{quantity}</span>
      <span className={`${overline ? "line-through	" : null}`}>
        Item component
      </span>
    </div>
  );
};

export default SingleItemComponent;
