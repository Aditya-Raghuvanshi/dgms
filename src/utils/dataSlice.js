import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name:"data",
    initialState:{
        transpoters:[],
        allDetails:[],
    },
    reducers:{
        pushTranspoter:(state,actions)=>{
            state.transpoters=(actions.payload);
        },
        pushAllDetails:(state,actions)=>{
            state.allDetails=(actions.payload);
        }
    }
})

export const { pushTranspoter,pushAllDetails } = dataSlice.actions;

export default dataSlice.reducer;