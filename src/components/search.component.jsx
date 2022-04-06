import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterItemList } from "../redux/items/item.actions";

export const SearchComponent = ({ className }) => {
  // const { setSearch } = useContext(searchContext);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    dispatch(filterItemList(search));
  }, [search]);
  return (
    <div
      className={`w-3/5 mx-auto bg-slate-200 rounded-lg border border-slate-400 ${className}  lg:w-1/2 xl:w-5/12 flex`}
    >
      <input
        type="text"
        className="my-6 h-10 m-auto w-5/6 rounded p-2 font-mono"
        placeholder="Search item..."
        onInput={handleInput}
      />
    </div>
  );
};
