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
    default:
      return state;
  }
};

export default basketReducer;
