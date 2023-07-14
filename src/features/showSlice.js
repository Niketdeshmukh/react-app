import { createSlice } from "@reduxjs/toolkit";
const initialState = {value:0};

export const showSlice = createSlice({
    name: "showData",
    initialState,
    reducers:{
        showData:(state)=>{
            state.value=state.value;
        },
        increment:(state)=>{
            state.value=state.value+1;
        }
    }
})
export const {showData,increment} =showSlice.actions;
export default showSlice.reducer;