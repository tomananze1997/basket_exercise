import { BasketActionTypes } from "./basket.action-types";

const INITIAL_STATE = {
  items: [],
  filter: {
    show: "SHOW_ALL",
  },
};

const basketReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case BasketActionTypes.ADD_TO_BASKET:
      const exists = state.items.some(({ id }) => id === payload.id);
      let newItems;

      if (exists) {
        newItems = state.items.map((item) => {
          if (item.id === payload.id) {
            return { ...item, quantity: item.quantity + 1, bought: false };
          }
          return item;
        });
      } else {
        newItems = [...state.items, { ...payload, quantity: 1, bought: false }];
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
      const foundItem = state.items.find(({ id }) => id === payload.id);
      let itemArray;
      if (foundItem.quantity > 1) {
        itemArray = state.items.map((item) => {
          return item.id === foundItem.id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        });
      } else {
        itemArray = state.items.filter(({ id }) => id !== foundItem.id);
      }
      return {
        ...state,
        items: itemArray,
      };
    case BasketActionTypes.ITEM_PURCHASED:
      let filteredIfBoughtArray;
      const foundBought = state.items.filter(({ id }) => (id = payload.id));
    // filteredIfBoughtArray = state.items.map((item) => {
    //   if (item.id === payload.id) {
    //     return { ...item, bought: !item.bought };
    //   } else {
    //     return item;
    //   }
    // });

    // return {
    //   ...state,
    //   item: item.
    // };
    case BasketActionTypes.CHANGE_SHOWN_ITEMS:
      return {
        ...state,
        filter: { show: payload },
      };

    default:
      return state;
  }
};

export default basketReducer;
