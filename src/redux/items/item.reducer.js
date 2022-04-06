import { ItemActionTypes } from "./item.action-types";

const INITIAL_STATE = {
  items: [
    { name: "Strawberry", type: "fruit", id: 1 },
    { name: "Blueberry", type: "fruit", id: 2 },
    { name: "Orange", type: "fruit", id: 3 },
    { name: "Banana", type: "fruit", id: 4 },
    { name: "Apple", type: "fruit", id: 5 },
    { name: "Corn", type: "vegetables", id: 6 },
    { name: "Tomato", type: "vegetables", id: 7 },
    { name: "Carrot", type: "vegetables", id: 8 },
    { name: "Cheese", type: "dairy", id: 9 },
    { name: "Yougurt", type: "dairy", id: 10 },
    { name: "Butter", type: "dairy", id: 11 },
    { name: "Milk", type: "dairy", id: 12 },
    { name: "Bread", type: "grains", id: 13 },
    { name: "Corn flakes", type: "grains", id: 14 },
    { name: "Rice", type: "grains", id: 15 },
    { name: "Pasta", type: "grains", id: 16 },
    { name: "Egg", type: "protein", id: 17 },
    { name: "Fish", type: "protein", id: 18 },
    { name: "Chicken", type: "protein", id: 19 },
  ],
  filter: { query: "" },
};

const itemReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ItemActionTypes.FILTER_ITEMS:
      return {
        ...state,
        filter: { query: payload },
      };
    case ItemActionTypes.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, payload],
      };
    default:
      return state;
  }
};

export default itemReducer;
