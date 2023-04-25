import { configureStore } from "@reduxjs/toolkit";
import User from './UserSlice'
import userrapport from './RapportSlice'
export const Store = configureStore({
    reducer:{
        User,
        userrapport
    }
})
