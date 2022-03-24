import { combineReducers } from "redux";

import itemReducer from "./items/item.reducer";
import basketReducer from "./basket/basket.reducer";

export default combineReducers({
    items: itemReducer,
    basket: basketReducer
});