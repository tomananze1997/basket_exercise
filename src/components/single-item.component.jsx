import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { FaPlusSquare } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaMinusSquare } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  addToBasket,
  RemoveItemFromBasket,
} from "../redux/basket/basket.actions";
import { RemoveItem } from "../redux/items/item.actions";
const SingleItemComponent = ({ item, first, add, showFilter }) => {
  const { name, bought } = item;
  const dispatch = useDispatch();

  const handleOnAdd = () => {
    dispatch(addToBasket(item));
  };
  const handleOnRemove = () => {
    if (add) {
      dispatch(RemoveItem(item));
    } else if (!add) {
      dispatch(RemoveItemFromBasket(item));
    }
  };

  const iconStyle = "mx-3 text-white group-hover:scale-110 cursor-pointer";
  return (
    <div
      onClick={showFilter}
      className={classNames(
        { "bg-itemCustomOne": first },
        { "bg-itemCustomTwo": !first },
        { "cursor-pointer": !add },
        "w-full flex items-center text-sm my-1 py-1 md:text-base"
      )}
    >
      {add ? (
        <FaPlusSquare
          className={classNames(iconStyle, "hover:text-green-500")}
          onClick={handleOnAdd}
          style={{ fontWeight: "500" }}
        />
      ) : (
        <FaMinusSquare
          onClick={handleOnRemove}
          className={classNames(iconStyle, "hover:text-red-500")}
        />
      )}

      {item.quantity && <span className="mr-1">{item.quantity}</span>}
      <span className={classNames({ "line-through": bought })}>{name}</span>

      {add && (
        <MdOutlineDeleteForever
          className={classNames(iconStyle, "hover:text-red-500 ml-auto")}
          onClick={handleOnRemove}
        />
      )}
    </div>
  );
};

SingleItemComponent.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number,
    bought: PropTypes.bool,
  }),
  first: PropTypes.bool.isRequired,
  add: PropTypes.bool,
  showFilter: PropTypes.func,
};
SingleItemComponent.defaultProp = {
  item: {
    type: "all",
    quantity: null,
  },
  add: false,
  showFilter: null,
};

export default SingleItemComponent;
