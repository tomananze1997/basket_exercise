import React from "react";
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  addToBasket,
  RemoveItemFromBasket,
  purchaseItem,
} from "../redux/basket/basket.actions";

const SingleItemComponent = ({
  item = { name: "" },
  first,
  add,
  overline,
  quantity,
  showFilter,
}) => {
  const { name } = item;
  const dispatch = useDispatch();

  const handleOnAdd = () => {
    if (add) {
      dispatch(addToBasket(item));
    } else if (!add) {
      dispatch(RemoveItemFromBasket(item));
    }
  };
  // const handleItemClick = () => {
  //   dispatch(purchaseItem(item));
  // };
  return (
    <div
      // onClick={handleItemClick}
      onClick={showFilter}
      className={`${
        first ? "bg-itemCustomOne" : "bg-itemCustomTwo"
      } w-full flex items-center cursor-pointer my-1 py-2`}
    >
      {add ? (
        <FaPlusSquare
          className="mx-3 text-white group-hover:scale-110 hover:text-green-500"
          onClick={handleOnAdd}
          style={{ fontWeight: "500" }}
        />
      ) : (
        <FaMinusSquare
          onClick={handleOnAdd}
          className="mx-3 text-white group-hover:scale-110 hover:text-red-500"
        />
      )}

      <span className="mr-1">{quantity}</span>
      <span className={`${item.bought ? "line-through" : null}`}>{name}</span>
    </div>
  );
};

export default SingleItemComponent;
