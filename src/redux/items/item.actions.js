import { ItemActionTypes as action } from "./item.action-types";

export const filterItemList = (string) => (dispatch) => {
  dispatch({
    type: action.FILTER_ITEMS,
    payload: string,
  });
};
