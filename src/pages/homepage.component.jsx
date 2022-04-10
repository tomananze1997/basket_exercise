import React, { createContext, useState } from "react";
import SearchComponent from "../components/search.component";
import { BasketComponent } from "../components/basket-item-list.component";
import ItemListComponent from "../components/item-list.component";

export const searchContext = createContext(null);
export const HomepageComponent = () => {
  const [search, setSearch] = useState("");
  return (
    <searchContext.Provider value={{ search, setSearch }}>
      <div className="">
        <section className="mt-8">
          <SearchComponent />
        </section>
        <section className="flex w-11/12 m-auto justify-between mt-8 mb-20 md:w-4/6 xl:w-3/6">
          <div className="w-5/12">
            <ItemListComponent />
          </div>
          <div className="w-5/12">
            <BasketComponent />
          </div>
        </section>
      </div>
    </searchContext.Provider>
  );
};
