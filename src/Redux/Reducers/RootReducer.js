import { combineReducers } from "redux";
import changeTheNumber from "./Reducer";

let rootReducer = combineReducers({
    changeTheNumber,
})

export default rootReducer;