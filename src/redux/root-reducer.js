import { combineReducers } from "redux";
import itemReducer from "./items/item.reducer";

export default combineReducers({
    items: itemReducer,
});