import { combineReducers } from "@reduxjs/toolkit"
import incDecReducer from "incDecReducer"

const rootReducer = ()=>{
    combineReducers({
        incDecReducer,
    })
}

export default rootReducer;