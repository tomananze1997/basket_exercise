import { BasketActionTypes } from "./basket.action-types";

export const addToBasket = (item) => (dispatch) => {
  dispatch({ type: BasketActionTypes.ADD_TO_BASKET, payload: item });
};
