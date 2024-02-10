import { configureStore } from "@reduxjs/toolkit";
import changeTheNumber from "./Reducers"


const store = configureStore({
    reducer:{
        custom : changeTheNumber,

    }
})

export default store;