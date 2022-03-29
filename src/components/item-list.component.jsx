import React, { useContext, useEffect, useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import SingleItemComponent from "./single-item.component";
import { searchContext } from "../pages/homepage.component";
import { filterItemList } from "../redux/items/item.actions";

const ItemListComponent = () => {
  // radio --------
  const [radioValue, setRadioValue] = useState("all");
  const [displayRadio, setRadioDisplay] = useState(false);

  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };
  const handleClick = () => {
    setRadioDisplay(!displayRadio);
  };
  // --------------
  const add = true;
  const reduxItems = useSelector((store) => store.items.items);
  const reduxQuery = useSelector((store) => store.items.filter.query);
  const [filteredItems, setFilteredItems] = useState(reduxItems);
  const [items, setItems] = useState(reduxItems);

  useEffect(() => {
    if (radioValue !== "all") {
      console.log(radioValue);
      console.log("first if " + reduxItems);
      const TypeArray = reduxItems.filter(({ type }) => type === radioValue);
      console.log(TypeArray);
      setFilteredItems(TypeArray);
    } else {
      console.log("second if " + reduxItems);
      setFilteredItems(reduxItems);
      console.log("************");
      console.log(filteredItems);
    }
  }, [radioValue]);

  useEffect(() => {
    if (reduxQuery !== "") {
      const filteredArray = filteredItems.filter(({ name }) =>
        name.toLowerCase().includes(reduxQuery)
      );
      setItems(filteredArray);
    } else {
      setItems(reduxItems);
    }
  }, [reduxQuery]);

  return (
    <div>
      <span className="flex text-xl font-semibold items-center mb-5 relative">
        <FaLeaf className="mr-2" /> Groceries
        <span
          onClick={handleClick}
          className="ml-auto text-xs cursor-pointer bg-slate-100 p-1 rounded-md"
        >
          Search Type:
          {" " + radioValue.charAt(0).toUpperCase() + radioValue.slice(1)}
        </span>
        <div
          className={`absolute -right-32 top-0 text-sm bg-slate-200 p-3 rounded-md bg-opacity-40 ${
            displayRadio ? "block" : "hidden"
          }`}
        >
          <div className="flex items-center">
            <input
              type="radio"
              id="all"
              className="h-2 w-2 "
              name="type"
              value="all"
              onChange={handleChange}
            />
            <label className="ml-2" htmlFor="all">
              All
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="fruit"
              className="h-2 w-2 "
              name="type"
              value="fruit"
              onChange={handleChange}
            />
            <label className="ml-2" htmlFor="fruit">
              Fruit
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="vegetables"
              name="type"
              className="h-2 w-2 "
              value="vegetables"
              onChange={handleChange}
            />
            <label className="ml-2" htmlFor="vegetables">
              Vegetables
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="dairy"
              className="h-2 w-2 "
              name="type"
              value="dairy"
              onChange={handleChange}
            />
            <label className="ml-2" htmlFor="dairy">
              Dairy
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="grains"
              className="h-2 w-2 "
              name="type"
              value="grains"
              onChange={handleChange}
            />
            <label className="ml-2" htmlFor="grains">
              Grains
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="protein"
              className="h-2 w-2 "
              name="type"
              value="protein"
              onChange={handleChange}
            />
            <label className="ml-2" htmlFor="protein">
              Protein
            </label>
          </div>
        </div>
      </span>

      <section className="flex flex-col">
        {items.map((item, idx) => (
          <SingleItemComponent
            add={add}
            item={item}
            key={item.id}
            first={idx % 2 === 0}
          />
        ))}
      </section>
    </div>
  );
};

export default ItemListComponent;
