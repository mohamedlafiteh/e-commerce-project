import productReducer from "./productReducer";
import { combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  products: productReducer,
  user: userReducer,
});

export default rootReducer;
