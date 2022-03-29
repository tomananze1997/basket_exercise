import React from "react";
import { useDispatch } from "react-redux";
import { ButtonComponent } from "./button.component";
import { changeShownItems } from "../redux/basket/basket.actions";

export const FooterComponent = () => {
  const dispatch = useDispatch();
  const handleButtonOne = () => {
    dispatch(changeShownItems("SHOW_ALL"));
  };
  const handleButtonTwo = () => {
    dispatch(changeShownItems("SHOW_PENDING"));
  };
  const handleButtonThree = () => {
    dispatch(changeShownItems("SHOW_PURCHASED"));
  };

  return (
    <div className="h-36 bg-customHeader flex justify-center items-center">
      <ButtonComponent click={handleButtonOne}>ALL</ButtonComponent>
      <ButtonComponent click={handleButtonTwo}> PENDING</ButtonComponent>
      <ButtonComponent click={handleButtonThree}>PURCHASED</ButtonComponent>
    </div>
  );
  // const footerButtons = [
  //   {
  //     name: "All",
  //     onClick: () => handleOnButtonClick("SHOW_ALL"),
  //   },
  //   {
  //     name: "PENDING",
  //     onClick: () => handleOnButtonClick("SHOW_SENDING"),
  //   },
  //   {
  //     name: "PURCHASED",
  //     onClick: () => handleOnButtonClick("SHOW_PURCHASED"),
  //   },
  // ];
  // const handleOnButtonClick = (buttonType) => {
  //   dispatch(changeShownItems(buttonType));
  // };
  // return (
  //   <div className="h-36 bg-customHeader flex justify-center items-center">
  //     {footerButtons.map(({ name, onClick }) => (
  //       <ButtonComponent onClick={onClick}>{name}</ButtonComponent>
  //     ))}
  //   </div>
  // );
};
