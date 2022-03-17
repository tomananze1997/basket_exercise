import React from "react";
import { FaLeaf } from "react-icons/fa";
import { BsPlusSquare } from "react-icons/bs";
import SingleItemComponent from "./single-item.component";

export const ItemListComponent = () => {
  const add = true;
  const first = true;

  return (
    <div>
      <span className="flex text-xl font-semibold items-center mb-5">
        <FaLeaf className="mr-2" /> Groceries
      </span>
      <section className="flex flex-col ">
        <SingleItemComponent add={add} first={first} />
        <SingleItemComponent add={add} />
        <SingleItemComponent add={add} first={first} />
      </section>
    </div>
  );
};
