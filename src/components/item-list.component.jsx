import React from "react";
import { FaLeaf } from "react-icons/fa";
import { useSelector } from "react-redux";
import SingleItemComponent from "./single-item.component";

const ItemListComponent = () => {
  const add = true;

  const items = useSelector((store) => store.items.items);

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
