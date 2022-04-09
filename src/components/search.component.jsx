import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { filterItemList } from "../redux/items/item.actions";

const SearchComponent = () => {
  const dispatch = useDispatch();
  const reduxQuery = useSelector((store) => store.items.filter.query);
  const handleInput = (event) => {
    dispatch(filterItemList(event.target.value));
  };

  return (
    <div
      className={`w-3/5 mx-auto bg-slate-200 rounded-lg border border-slate-400 lg:w-1/2 xl:w-5/12 flex`}
    >
      <input
        value={reduxQuery}
        type="text"
        className="my-6 h-10 m-auto w-5/6 rounded p-2 font-mono"
        placeholder="Search item..."
        onInput={handleInput}
      />
    </div>
  );
};

export default SearchComponent;
