import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count:0
}
export const counterSlice =createSlice({
 name:"counter",
 initialState,
 reducers:{
    increase: (state,action)=>{
        state.count++;
    },
    decrease: (state,action)=>{
        if (state.count > 0) 
        state.count--;
    },
    
}
})
export const {increase,decrease} = counterSlice.actions
export default counterSlice.reducer