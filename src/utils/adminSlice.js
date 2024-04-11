import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name:"admin",
    initialState:{
        email:[
            "raghuvanship@indianoil.in",
            "survi@indianoil.in",
            "tripathis@indianoil.in",
            "gautamd@indianoil.in",
        ],
        password:[
            "Prince@123",
            "Survi@123",
            "Sanjay@123",
            "Dheerendra@123",
        ],
        currentUser:null,
    },
    reducers:{
        insertName:(state,action)=>{
            state.currentUser = action.payload;
        }
    },
})

export const { insertName } = adminSlice.actions;

export default adminSlice.reducer;