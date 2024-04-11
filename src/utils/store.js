import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./adminSlice";
import dataSlice from "./dataSlice";

const store = configureStore({
    reducer:{
        admin:adminSlice,
        data:dataSlice,
    }
});

export default store;