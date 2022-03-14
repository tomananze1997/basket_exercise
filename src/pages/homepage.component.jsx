import React from "react";
import { SearchComponent } from "../components/search.component";
import { BasketComponent } from "../components/basket-item-list.component";
import { ItemListComponent } from "../components/item-list.component";

export const HomepageComponent = () => {
  return (
    <div className="bg-slate-100 h-full">
      <section>
        <SearchComponent className="mt-8" />
      </section>
      <section>
        <ItemListComponent />
        <BasketComponent />
      </section>
    </div>
  );
};
