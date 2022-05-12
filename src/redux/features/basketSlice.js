import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filter: {
    show: "SHOW_ALL",
  },
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state = initialState, action) => {
      console.log(action);
      const exists = state.items.some(({ id }) => id === action.payload.id);
      let newItems;

      if (exists) {
        newItems = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1, bought: false };
          }
          return item;
        });
      } else {
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }
      state.items = newItems;
    },
    removeAllFromBasket: (state = initialState) => {
      state.items = [];
    },
    RemoveItemFromBasket: (state = initialState, action) => {
      const foundItem = state.items.find(({ id }) => id === action.payload.id);
      let itemArray;
      if (foundItem.bought) {
        itemArray = state.items.filter(({ id }) => {
          return id !== foundItem.id;
        });
      } else {
        if (foundItem.quantity > 1) {
          itemArray = state.items.map((item) => {
            return item.id === foundItem.id
              ? { ...item, quantity: item.quantity - 1, bought: true }
              : item;
          });
        } else {
          itemArray = state.items.filter(({ id }) => id !== foundItem.id);
        }
      }
      state.items = itemArray;
    },
    purchaseItem: (state = initialState, action) => {
      const filteredIfBoughtArray = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, bought: !item.bought };
        } else {
          return item;
        }
      });
      state.items = filteredIfBoughtArray;
    },
    changeShownItems: (state = initialState, action) => {
      state.filter.show = action.payload;
    },
  },
});
export const {
  addToBasket,
  removeAllFromBasket,
  removeItemFromBasket,
  purchaseItem,
  changeShownItems,
} = basketSlice.actions;
export default basketSlice.reducer;
