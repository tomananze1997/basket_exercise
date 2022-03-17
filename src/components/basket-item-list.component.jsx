import React from "react";
import { BsBasket2Fill } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import SingleItemComponent from "./single-item.component";

export const BasketComponent = () => {
  const first = true;
  const bought = true;
  const quantity = 1;
  return (
    <div>
      <div className="flex text-xl font-semibold  items-center  mb-5">
        <BsBasket2Fill className="mr-2" />

        <span>Basket</span>
        <FaRegTrashAlt className="ml-auto text-base text-red-300 hover:text-red-500 hover:scale-110" />
      </div>
      <section className="flex flex-col">
        <SingleItemComponent first={first} quantity={quantity} />
        <SingleItemComponent overline={bought} quantity={quantity} />
        <SingleItemComponent first={first} quantity={quantity} />
      </section>
    </div>
  );
};
