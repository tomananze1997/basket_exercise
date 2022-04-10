import React, { useEffect, useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { useSelector } from "react-redux";
import SingleItemComponent from "./single-item.component";
import Modal from "./modal.component-portal";
import NewItem from "./newItem.component-portal";

const ItemListComponent = () => {
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
  const add = true;
  const reduxItems = useSelector((store) => store.items.items);
  const reduxQuery = useSelector((store) => store.items.filter.query);
  const [filteredItems, setFilteredItems] = useState(reduxItems);

  useEffect(() => {
    const filteredQueryItems = reduxQuery
      ? reduxItems.filter(({ name }) => {
          console.log(reduxQuery);
          return name.toLowerCase().includes(reduxQuery.toLowerCase());
        })
      : reduxItems;
    const filterRadioItems =
      modalValue === "all"
        ? filteredQueryItems
        : filteredQueryItems.filter(({ type }) => type === modalValue);
    setFilteredItems(filterRadioItems);
  }, [reduxQuery, modalValue, reduxItems]);

  return (
    <div>
      <span className="flex text-xl font-semibold items-center mb-5 relative">
        <FaLeaf className="mr-2" /> Groceries
        <div className="absolute right-0 translate-x-10 text-center">
          <span
            onClick={handleClickModal}
            className="ml-auto text-xs cursor-pointer bg-slate-200 p-1 rounded-md block"
          >
            Search Type:
            {" " + modalValue.charAt(0).toUpperCase() + modalValue.slice(1)}
          </span>
          <Modal
            openPortal={displayModal}
            handleChange={handleChange}
            handleOpenModal={handleClickModal}
          />
          <span
            onClick={handleClickModalNewItem}
            className="block ml-auto text-xs cursor-pointer bg-slate-200 p-1 rounded-md mt-3"
          >
            Create New Item
          </span>
          <NewItem
            openPortal={displayModalNewItem}
            handleOpenModal={handleClickModalNewItem}
          />
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
