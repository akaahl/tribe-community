import { combineReducers } from "redux";
import toggleReducers from "./toggleReducers";
import heightReducer from "./heightReducer";

const rootReducer = combineReducers({
  toggleReducers,
  headerHeight: heightReducer,
});

export default rootReducer;
