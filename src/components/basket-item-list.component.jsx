import React from "react";
import { BsBasket2Fill } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import SingleItemComponent from "./single-item.component";
import {useSelector} from "react-redux";

export const BasketComponent = () => {
  const first = true;
  const bought = true;
  const quantity = 1;
  const items = useSelector(store => store.basket.items)


  return (
    <div>
      <div className="flex text-xl font-semibold  items-center  mb-5">
        <BsBasket2Fill className="mr-2" />

        <span>Basket</span>
        <FaRegTrashAlt className="ml-auto text-base text-red-300 hover:text-red-500 hover:scale-110" />
      </div>
      <section className="flex flex-col">
          {items.map((item)=>(
              <SingleItemComponent item={item} first={first} quantity={item.quantity} />
          ))}
      </section>
    </div>
  );
};

export default BasketComponent