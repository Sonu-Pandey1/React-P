


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    c: 0
};

const changeTheNumberSlice = createSlice({
    name: "changeTheNumber",
    initialState,
    reducers: {
        increment: (state) => {
            state.c += 1;
        },
        decrement: (state) => {
            state.c -= 1;
        }
    }
});

export const { increment, decrement } = changeTheNumberSlice.actions;
export default changeTheNumberSlice.reducer;