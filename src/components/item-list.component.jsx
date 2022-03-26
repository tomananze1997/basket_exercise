import React, { useContext, useEffect, useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { useSelector } from "react-redux";
import SingleItemComponent from "./single-item.component";
import { searchContext } from "../pages/homepage.component";

const ItemListComponent = () => {
  const add = true;
  //tukej mi vrne undefined oz nek error
  const { search } = useContext(searchContext);
  const storeItems = useSelector((store) => store.items.items);
  const [items, setItems] = useState(storeItems);
  useEffect(
    (storeItems) => {
      console.log(storeItems);
      if (search !== "") {
        let filteredItems = storeItems.filter(({ name }) => {
          return name.contains(search);
        });
        setItems(filteredItems);
      } else {
        setItems(storeItems);
      }
    },
    [search]
  );
  //..................
  return (
    <div>
      <span className="flex text-xl font-semibold items-center mb-5">
        <FaLeaf className="mr-2" /> Groceries
      </span>
      <section className="flex flex-col ">
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
