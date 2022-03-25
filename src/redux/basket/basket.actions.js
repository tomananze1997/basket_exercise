import { BasketActionTypes } from "./basket.action-types";

export const addToBasket = (item) => (dispatch) => {
  dispatch({
    type: BasketActionTypes.ADD_TO_BASKET,
    payload: item,
  });
};

export const removeAllFromBasket = () => (dispatch) => {
  dispatch({
    type: BasketActionTypes.REMOVE_ALL_FROM_BASKET,
  });
};

export const RemoveItemFromBasket = (item) => (dispatch) => {
  dispatch({
    type: BasketActionTypes.REMOVE_ITEM_FROM_BASKET,
    payload: item,
  });
};
