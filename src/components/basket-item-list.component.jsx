import React from "react";
import { BsBasket2Fill } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";

export const BasketComponent = () => {
  return (
    <div>
      <div className="flex text-lg font-semibold items-center ">
        <BsBasket2Fill className="mr-2" />

        <span>Basket</span>
        <FaRegTrashAlt className="ml-auto" />
      </div>
      <section className="flex flex-col">
        <span className="bg-slate-300 w-full">ačsdmčkas</span>
        <span>ačsdmčkas</span>
        <span>ačsdmčkas</span>
        <span>ačsdmčkas</span>
        <span>ačsdmčkas</span>
      </section>
    </div>
  );
};
