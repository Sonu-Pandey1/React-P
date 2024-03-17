import { createStore } from "redux";
import rootReducer from "./Redux/Reducers/RootReducer";

let storeeeeee = createStore(
    rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default storeeeeee;