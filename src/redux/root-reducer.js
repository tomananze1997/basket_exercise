import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import itemReducer from "./items/item.reducer";
import basketReducer from "./basket/basket.reducer";

const rootReducer = combineReducers({
  items: itemReducer,
  basket: basketReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

export default persistReducer(persistConfig, rootReducer);
