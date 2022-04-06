import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  addToBasket,
  RemoveItemFromBasket,
} from "../redux/basket/basket.actions";
const SingleItemComponent = ({ item, first, add, showFilter }) => {
  const { name, quantity, bought } = item;
  const dispatch = useDispatch();

  const handleOnAdd = () => {
    if (add) {
      dispatch(addToBasket(item));
    } else if (!add) {
      dispatch(RemoveItemFromBasket(item));
    }
  };

  return (
    <div
      onClick={showFilter}
      className={classNames(
        { "bg-itemCustomOne": first },
        { "bg-itemCustomTwo": !first },
        "w-full flex items-center cursor-pointer my-1 py-2"
      )}
    >
      {add ? ( //a nej className uporablam za vse?
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
      <span className={classNames({ "line-through": bought })}>{name}</span>
    </div>
  );
};

SingleItemComponent.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    bought: PropTypes.bool.isRequired,
    type: PropTypes.string, //nikoli ga ne uporabim v komponenti.. a ga morem še zmer dat?
  }),
  first: PropTypes.bool.isRequired,
  add: PropTypes.bool,
  showFilter: PropTypes.bool,
};
SingleItemComponent.defaultProp = {
  item: {
    type: "all",
  },
  add: false,
  showFilter: null,
};

export default SingleItemComponent;
