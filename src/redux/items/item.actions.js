import {
  ItemActionTypes as action,
  ItemActionTypes,
} from "./item.action-types";

export const filterItemList = (string) => (dispatch) => {
  dispatch({
    type: action.FILTER_ITEMS,
    payload: string,
  });
};

export const addItem = (item) => (dispatch) => {
  dispatch({
    type: action.ADD_ITEM,
    payload: item,
  });
};

export const RemoveItem = (item) => (dispatch) => {
  dispatch({
    type: ItemActionTypes.REMOVE_ITEM,
    payload: item,
  });
};
