import React from "react";
import { useDispatch } from "react-redux";
import ButtonComponent from "./button.component";
import { changeShownItems } from "../redux/basket/basket.actions";

export const FooterComponent = () => {
  const dispatch = useDispatch();

  const handleButtonClick = (type) => {
    dispatch(changeShownItems(type));
  };
  const footerButtons = [
    {
      name: "ALL",
      onClick: () => handleButtonClick("SHOW_ALL"),
    },
    {
      name: "PENDING",
      onClick: () => handleButtonClick("SHOW_PENDING"),
    },
    {
      name: "PURCHASED",
      onClick: () => handleButtonClick("SHOW_PURCHASED"),
    },
  ];
  return (
    <div className="h-36 bg-customHeader flex justify-center items-center mt-auto">
      {footerButtons.map(({ name, onClick }, idx) => (
        <ButtonComponent click={onClick} key={idx}>
          {name}
        </ButtonComponent>
      ))}
    </div>
  );
};
