import React from "react";
import { BsBasket2Fill } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import SingleItemComponent from "./single-item.component";
import { useDispatch, useSelector } from "react-redux";
import { removeAllFromBasket } from "../redux/basket/basket.actions";

export const BasketComponent = () => {
  const bought = true;
  const items = useSelector((store) => store.basket.items);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeAllFromBasket());
  };

  return (
    <div>
      <div className="flex text-xl font-semibold  items-center  mb-5">
        <BsBasket2Fill className="mr-2" />

        <span>Basket</span>
        <FaRegTrashAlt
          onClick={handleClick}
          className="ml-auto text-base text-red-300 hover:text-red-500 hover:scale-110"
        />
      </div>
      <section className="flex flex-col">
        {items.map((item, idx) => (
          <SingleItemComponent
            item={item}
            first={idx % 2 === 0}
            quantity={item.quantity}
          />
        ))}
      </section>
    </div>
  );
};

export default BasketComponent;
