import React from "react";
import { BsFillBasketFill } from "react-icons/bs";

export const HeaderComponent = () => {
  return (
    <div className="h-56 bg-customHeader w-full flex flex-col justify-center items-center text-white font-sans">
      <BsFillBasketFill style={{ width: "120px", height: "120px" }} />
      <p className="text-titleCustom font-bold mt-3">Hello, Basket!</p>
    </div>
  );
};
