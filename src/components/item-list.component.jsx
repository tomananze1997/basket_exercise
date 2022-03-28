import React, { useContext, useEffect, useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import SingleItemComponent from "./single-item.component";
import { searchContext } from "../pages/homepage.component";
import { filterItemList } from "../redux/items/item.actions";

const ItemListComponent = () => {
  const add = true;
  // const dispatch = useDispatch();
  const reduxItems = useSelector((store) => store.items.items);
  const reduxQuery = useSelector((store) => store.items.filter.query);
  const { search } = useContext(searchContext);
  const [items, setItems] = useState(reduxItems);

  useEffect(() => {
    if (reduxQuery !== "") {
      const filteredArray = reduxItems.filter(({ name }) =>
        name.toLowerCase().includes(reduxQuery)
      );
      setItems(filteredArray);
    } else {
      setItems(reduxItems);
    }
  }, [reduxQuery]);
  return (
    <div>
      <span className="flex text-xl font-semibold items-center mb-5">
        <FaLeaf className="mr-2" /> Groceries
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
