import { BasketActionTypes } from "./basket.action-types";

const INITIAL_STATE = {
  items: [],
  filters: {
    status: "all",
  },
};

const basketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BasketActionTypes.ADD_TO_BASKET:
      const exists = state.items.some(({ id }) => id === action.payload.id);
      let newItems;

      if (exists) {
        newItems = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      } else {
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      return {
        ...state,
        items: newItems,
      };
    case BasketActionTypes.REMOVE_ALL_FROM_BASKET:
      return {
        ...state,
        items: [],
      };
    case BasketActionTypes.REMOVE_ITEM_FROM_BASKET:
      const foundItem = state.basket.find(({ id }) => id === action.payload.id);
      if (foundItem) {
        console.log(foundItem);
      } else {
        console.log("item not found");
      }
      let itemArray;
      if (foundItem.quantity > 1) {
        itemArray = [...state.basket, { ...foundItem, quantity: quantity - 1 }];
      } else {
        itemArray = state.basket.filter((item) => item.id !== foundItem.id);
      }
      return {
        ...state,
        items: itemArray,
      };
      break;
    default:
      return state;
  }
};

export default basketReducer;
