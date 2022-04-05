import React, { useContext, useEffect, useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import SingleItemComponent from "./single-item.component";
import { searchContext } from "../pages/homepage.component";
import { filterItemList } from "../redux/items/item.actions";
import { Modal } from "./modal.component-portal";
import { NewItem } from "./newItem.component-portal";

const ItemListComponent = () => {
  // modal --------
  const [modalValue, setmodalValue] = useState("all");
  const [displayModal, setModalDisplay] = useState(false);
  const [displayModalNewItem, setModalDisplayNewItem] = useState(false);

  const handleChange = (event) => {
    setmodalValue(event.target.value);
  };
  const handleClickModal = () => {
    setModalDisplay(!displayModal);
  };
  const handleClickModalNewItem = () => {
    setModalDisplayNewItem(!displayModalNewItem);
  };
  // --------------
  const add = true;
  const reduxItems = useSelector((store) => store.items.items);
  const reduxQuery = useSelector((store) => store.items.filter.query);
  const [filteredItems, setFilteredItems] = useState(reduxItems);

  useEffect(() => {
    const filteredQueryItems = reduxQuery
      ? reduxItems.filter(({ name }) =>
          name.toLowerCase().includes(reduxQuery.toLowerCase())
        )
      : reduxItems;
    const filterRadioItems =
      modalValue === "all"
        ? filteredQueryItems
        : filteredQueryItems.filter(({ type }) => type === modalValue);
    setFilteredItems(filterRadioItems);
  }, [reduxQuery, modalValue]);

  return (
    <div>
      <span className="flex text-xl font-semibold items-center mb-5 relative">
        <FaLeaf className="mr-2" /> Groceries
        <div>
          <span
            onClick={handleClickModal}
            className="ml-auto text-xs cursor-pointer bg-slate-100 p-1 rounded-md"
          >
            Search Type:
            {" " + modalValue.charAt(0).toUpperCase() + modalValue.slice(1)}
            <Modal
              openPortal={displayModal}
              handleChange={handleChange}
              handleClickModal={handleClickModal}
            />
          </span>
          <span
            onClick={handleClickModalNewItem}
            className="ml-auto text-xs cursor-pointer bg-slate-100 p-1 rounded-md"
          >
            Create New Item
          </span>
        </div>
      </span>

      <section className="flex flex-col">
        {filteredItems.map((item, idx) => (
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
