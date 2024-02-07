import { combineReducers } from "redux";
import changeTheNumber from "../Reducers/incdecReducer"

const rootReducer = combineReducers({
    changeTheNumber,
})

export default rootReducer;