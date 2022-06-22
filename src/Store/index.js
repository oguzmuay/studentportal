import { configureStore } from '@reduxjs/toolkit'
import authSlice from "./Authantication/AuthSlice";
import classSlice from "./ClassSlice/ClassSlice";
import assignmentSlice from "./AssignmentSlice/AssignmentSlice";

export const store = configureStore({
    reducer: {
        auth:authSlice.reducer,
        class:classSlice.reducer,
        assignment:assignmentSlice.reducer,
    },
})