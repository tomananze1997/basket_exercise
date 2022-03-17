import React from "react";
import { FaLeaf } from "react-icons/fa";
import { BsPlusSquare } from "react-icons/bs";

export const ItemListComponent = () => {
  return (
    <div>
      <span className="flex text-lg font-semibold items-center ">
        <FaLeaf className="mr-2" /> Groceries
      </span>
      <section className="flex flex-col ">
        <div className="flex bg-itemCustomOne w-full items-center">
          <BsPlusSquare />
          <span className=" w-full">ačsdmčkas</span>
        </div>
      </section>
    </div>
  );
};
