import productReducer from "./productReducer";
import { combineReducers } from "redux";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  products: productReducer,
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;
