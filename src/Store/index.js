import { configureStore } from '@reduxjs/toolkit'
import authSlice from "./Authantication/AuthSlice";
import classSlice from "./ClassSlice/ClassSlice";

export const store = configureStore({
    reducer: {
        auth:authSlice.reducer,
        class:classSlice.reducer
    },
})