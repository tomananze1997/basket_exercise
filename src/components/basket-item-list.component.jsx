import React, { useEffect, useState } from "react";
import { BsBasket2Fill } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import SingleItemComponent from "./single-item.component";
import { useDispatch, useSelector } from "react-redux";
import {
  removeAllFromBasket,
  purchaseItem,
} from "../redux/basket/basket.actions";

export const BasketComponent = () => {
  const dispatch = useDispatch();

  const reduxItems = useSelector((store) => store.basket.items);
  const showFilter = useSelector((store) => store.basket.filter.show);
  const [items, setItems] = useState(reduxItems);

  const handleTrashClick = () => {
    dispatch(removeAllFromBasket());
  };
  useEffect(() => {
    if (showFilter === "SHOW_ALL") {
      setItems(reduxItems);
    } else if (showFilter === "SHOW_PENDING") {
      setItems();
      console.log(reduxItems);
      const pendingItems = reduxItems.filter(({ bought }) => bought === false);
      setItems(pendingItems);
    } else if ("SHOW_PURCHASED") {
      console.log(reduxItems);
      const purchasedItems = reduxItems.filter(({ bought }) => bought === true);
      setItems(purchasedItems);
    } else {
      console.log("Error, could not show basket items");
    }
  }, [showFilter, reduxItems]);

  const handleItemClick = (item) => {
    dispatch(purchaseItem(item));
  };
  return (
    <div>
      <div className="flex text-xl font-semibold  items-center  mb-5">
        <BsBasket2Fill className="mr-2" />

        <span>Basket </span>

        <FaRegTrashAlt
          onClick={handleTrashClick}
          className="ml-auto text-base text-red-300 hover:text-red-500 hover:scale-110"
        />
      </div>
      <section className="flex flex-col">
        {items.map((item, idx) => (
          <SingleItemComponent
            item={item}
            first={idx % 2 === 0}
            quantity={item.quantity}
            key={item.id}
            showFilter={handleItemClick}
          />
        ))}
      </section>
    </div>
  );
};

export default BasketComponent;
