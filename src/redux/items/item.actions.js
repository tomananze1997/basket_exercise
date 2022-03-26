import { ItemActionTypes as action } from "./item.action-types";

export const filterAllItems = (string) => (dispatch) => {
  dispatch({ type: action.filterAllItems, payload: string });
};
