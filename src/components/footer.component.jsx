import React from "react";
import { ButtonComponent } from "./button.component";

export const FooterComponent = () => {
  const handleClick = () => {
    alert("Clicked!");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(form[0]);
  };
  return (
    <div className="h-36 bg-customHeader flex justify-center items-center">
      <form onSubmit={handleSubmit} action="">
        <ButtonComponent click={handleClick}>ALL</ButtonComponent>
        <ButtonComponent click={handleClick}>PENDING</ButtonComponent>
        <ButtonComponent click={handleClick}>PURCHASED</ButtonComponent>
      </form>
    </div>
  );
};
